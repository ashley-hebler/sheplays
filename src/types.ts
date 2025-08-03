export interface Network {
  id: number;
  name: string;
}

export interface WatchLink {
  label: string;
  url: string;
}

export interface Sport {
  id: number;
  name: string;
}

export interface League {
  id: number;
  name: string;
  sport: Sport;
}

export interface Team {
  id: number;
  name: string;
  rank: number | null;
  conference?: string;
  league?: number;
}

export interface Game {
  id: number;
  time: string;
  time_formatted: string;
  date_formatted: string;
  name: string;
  league: League;
  sport: Sport;
  teams: Team[];
  networks: Network[];
  watch_links?: WatchLink[];
}