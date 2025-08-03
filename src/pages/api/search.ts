import type { APIRoute } from 'astro';
import { apiPrex } from '../../config';

interface Team {
  id: number;
  name: string;
  rank: number | null;
  conference: string;
  league: number;
}

interface League {
  id: number;
  name: string;
  sport: number;
}

interface Sport {
  id: number;
  name: string;
}

interface Game {
  id: number;
  time: string;
  time_formatted: string;
  date_formatted: string;
  name: string;
  league: League;
  sport: Sport;
  teams: Team[];
  networks: any[];
}

interface SearchResult {
  id: string;
  name: string;
  type: 'team' | 'sport';
  league?: string;
  sport?: string;
}

export const GET: APIRoute = async ({ url }) => {
  const query = url.searchParams.get('q');
  
  if (!query || query.length < 2) {
    return new Response(JSON.stringify({ 
      results: [],
      error: 'Query must be at least 2 characters' 
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Additional input validation for security
  if (query.length > 100) {
    return new Response(JSON.stringify({ 
      results: [],
      error: 'Query too long' 
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Sanitize query to prevent potential injection attempts
  const sanitizedQuery = query.trim().replace(/[<>\"']/g, '');

  try {
    let teamResults: SearchResult[] = [];
    const lowerQuery = sanitizedQuery.toLowerCase();
    
    try {
      // Use the correct search endpoint for teams
      const searchURL = `${apiPrex}games/?team_includes=${encodeURIComponent(sanitizedQuery)}&current=1&limit=20`;
      console.log('Search URL:', searchURL);
      
      const teamsResponse = await fetch(searchURL);
      
      if (teamsResponse.ok) {
        const gamesData: { results: Game[] } = await teamsResponse.json();
        
        // Extract unique teams from games that match the search
        const teamsMap = new Map<string, SearchResult>();
        
        gamesData.results?.forEach((game: Game) => {
          if (game.teams && Array.isArray(game.teams)) {
            game.teams.forEach((team: Team) => {
              // Team object structure: { id, name, league: number, ... }
              // League and sport info comes from the game level
              const teamId = team.id?.toString();
              const teamName = team.name;
              
              if (teamId && teamName) {
                // Only add teams that match the search query
                if (teamName.toLowerCase().includes(lowerQuery)) {
                  if (!teamsMap.has(teamId)) {
                    teamsMap.set(teamId, {
                      id: teamId,
                      name: teamName,
                      league: game.league?.name || 'Unknown League',
                      sport: game.sport?.name || 'Unknown Sport',
                      type: 'team'
                    });
                  }
                }
              }
            });
          }
        });
        
        teamResults = Array.from(teamsMap.values());
      }
    } catch (apiError) {
      console.log('Teams API unavailable:', apiError);
      // Continue with empty team results
    }

    // Add sport results for common searches
    const sportResults: SearchResult[] = [];
    
    if (lowerQuery.length >= 2) {
      if ('basketball'.includes(lowerQuery)) {
        sportResults.push({
          id: 'basketball',
          name: 'Basketball',
          type: 'sport'
        });
      }
      if ('soccer'.includes(lowerQuery) || 'football'.includes(lowerQuery)) {
        sportResults.push({
          id: 'soccer',
          name: 'Soccer',
          type: 'sport'
        });
      }
      if ('hockey'.includes(lowerQuery)) {
        sportResults.push({
          id: 'hockey',
          name: 'Hockey',
          type: 'sport'
        });
      }
      if ('volleyball'.includes(lowerQuery)) {
        sportResults.push({
          id: 'volleyball',
          name: 'Volleyball',
          type: 'sport'
        });
      }
    }

    // Combine and limit results
    const allResults: SearchResult[] = [...sportResults, ...teamResults].slice(0, 10);
    
    return new Response(JSON.stringify({ 
      results: allResults 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
  } catch (error) {
    console.error('Search API error:', error);
    
    return new Response(JSON.stringify({ 
      results: [],
      error: 'Search temporarily unavailable' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};