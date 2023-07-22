const leagueMap = {
    wnba: 6,
    nwsl: 7,
    fifa: 8,
    au: 9,
  }

const apiPrex = "https://api.sheplays.net/api/";
const leagueParams = "/games?&current=1&league=";

export const upcomingAPI = `${apiPrex}upcoming`;
export const todayAPI = `${apiPrex}today`;
export const wnbaAPI = `${apiPrex}${leagueParams}${leagueMap.wnba}`;
export const nwslAPI = `${apiPrex}${leagueParams}${leagueMap.nwsl}`;
export const fifaAPI = `${apiPrex}${leagueParams}${leagueMap.fifa}`;
export const auAPI = `${apiPrex}${leagueParams}${leagueMap.au}`;
