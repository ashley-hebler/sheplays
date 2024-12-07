const leagueMap = {
    wnba: 6,
    nwsl: 7,
    fifa: 8,
    au: 9,
    ncaa: 14,
    ncaaBball: 15,
    usSoccer: 11,
    pwhl: 16,
  }

  const sportMap = {
    basketball: 4,
    softball: 6,
    soccer: 5,
    hockey: 7,
    volleyball: 8,
  }

// const apiPrex = "http://127.0.0.1:8000/api/";
const apiPrex = "https://api.sheplays.net/api/";
const leagueParams = "games/?current=1&league=";
const sportParams = "games/?current=1&sport=";

export const upcomingAPI = `${apiPrex}upcoming/`;
export const todayAPI = `${apiPrex}today/?limit=100`;
export const wnbaAPI = `${apiPrex}${leagueParams}${leagueMap.wnba}`;
export const nwslAPI = `${apiPrex}${leagueParams}${leagueMap.nwsl}`;
export const fifaAPI = `${apiPrex}${leagueParams}${leagueMap.fifa}`;
export const auAPI = `${apiPrex}${leagueParams}${leagueMap.au}`;
export const pwhlAPI = `${apiPrex}${leagueParams}${leagueMap.pwhl}`;
export const usaAPI = `${apiPrex}${leagueParams}${leagueMap.usSoccer}`;
export const ncaaBball = `${apiPrex}${leagueParams}${leagueMap.ncaaBball}&sport=4&limit=100`;
export const ncaaVball = `${apiPrex}${leagueParams}${leagueMap.ncaa}&sport=${sportMap.volleyball}&limit=100`;
export const soccerAPI = `${apiPrex}${sportParams}${sportMap.soccer}`;
export const teamsAPI = `${apiPrex}teams/?league=`;
export const ncaaTeamsAPI = `${apiPrex}teams/?league=ncaa&limit=1000`;
export const teamsLookupAPI = `${apiPrex}games/?current=1&team_includes=`;
export const teamIdAPI = `${apiPrex}games/?current=1&team=`;
export const networkIdAPI = `${apiPrex}games/?current=1&network=`;

export const countryCodes = {
    "USA": "us",
    "United States": "us",
    "Australia": "au",
    "Canada": "ca",
    "China PR": "cn",
    "France": "fr",
    "Germany": "de",
    "Italy": "it",
    "Japan": "jp",
    "Mexico": "mx",
    "Netherlands": "nl",
    "New Zealand": "nz",
    "Norway": "no",
    "Spain": "es",
    "Sweden": "se",
    "United Kingdom": "gb",
    "England": "gb",
    "Thailand": "th",
    "Brazil": "br",
    "Argentina": "ar",
    "Colombia": "co",
    "Morocco": "ma",
    "Panama": "pa",
    "Korea Republic": "kr",
    "Switzerland": "ch",
    "Republic of Ireland": "ie",
    "Denmark": "dk",
    "Haiti": "ht",
    "Jamaica": "jm",
    "Philippines": "ph",
    "Nigeria": "ng",
    "Portugal": "pt",
    "Zambia": "zm",
    "Costa Rica": "cr",
    "South Africa": "za",
    
}