const leagueMap = {
    wnba: 6,
    nwsl: 7,
    fifa: 8,
    au: 9,
    ncaa: 10,
  }

  const sportMap = {
    basketball: 4,
    softball: 6,
    soccer: 5,
  }

// const apiPrex = "http://127.0.0.1:8000/api/";
const apiPrex = "https://api.sheplays.net/api/";
const leagueParams = "games/?current=1&league=";

export const upcomingAPI = `${apiPrex}upcoming/`;
export const todayAPI = `${apiPrex}today/`;
export const wnbaAPI = `${apiPrex}${leagueParams}${leagueMap.wnba}`;
export const nwslAPI = `${apiPrex}${leagueParams}${leagueMap.nwsl}`;
export const fifaAPI = `${apiPrex}${leagueParams}${leagueMap.fifa}`;
export const auAPI = `${apiPrex}${leagueParams}${leagueMap.au}`;
export const usaAPI = `${apiPrex}/games?&current=1&team_includes=usa`;
export const ncaaBball = `${apiPrex}${leagueParams}${leagueMap.ncaa}&sport=4`;
const teamsAPI = `${apiPrex}teams/?league=`;
const ncaaTeamsAPI = `${apiPrex}teams/?league=${leagueMap.ncaa}&sport=4`;
const teamsLookupAPI = `${apiPrex}/games?&current=1&team_includes=`;

export const countryCodes = {
    "USA": "us",
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
