import type { APIRoute } from 'astro';

const API_BASE = 'https://api.sheplays.net/api/';

// Map sport IDs to names
function getSportName(sportId: number): string {
  const sportMap: { [key: number]: string } = {
    4: 'Basketball',
    5: 'Soccer', 
    6: 'Softball',
    7: 'Hockey',
    8: 'Volleyball'
  };
  return sportMap[sportId] || 'Unknown Sport';
}

export const GET: APIRoute = async ({ url }) => {
  const query = url.searchParams.get('q');
  
  if (!query || query.length < 2) {
    return new Response(JSON.stringify({ results: [] }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    // Fetch both sports and teams in parallel
    const [sportsResponse, teamsResponse] = await Promise.all([
      fetch(`${API_BASE}sports`),
      fetch(`${API_BASE}teams?limit=50`)
    ]);

    const [sportsData, teamsData] = await Promise.all([
      sportsResponse.json(),
      teamsResponse.json()
    ]);

    // Filter sports
    const sports = sportsData.results
      .filter((sport: any) => sport.name.toLowerCase().includes(query.toLowerCase()))
      .map((sport: any) => ({
        name: sport.name,
        type: 'sport',
        id: sport.id
      }));

    // Filter teams
    const teams = teamsData.results
      .filter((team: any) => team.name.toLowerCase().includes(query.toLowerCase()))
      .map((team: any) => ({
        name: team.name,
        league: team.league.name,
        sport: getSportName(team.league.sport),
        type: 'team',
        id: team.id
      }));

    // Combine results, sports first, limit to 10 total
    const results = [...sports, ...teams].slice(0, 10);

    return new Response(JSON.stringify({ results }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Search API error:', error);
    return new Response(JSON.stringify({ error: 'Search failed' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};