interface data {
    url: string,
}

export const getGames = async (data: data) => {
    const response = await fetch(data.url);
    const json = await response.json();
    return {
        results: json.results,
        next: json.next,
        previous: json.previous,
    };
};