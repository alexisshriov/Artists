

// these would usually go in an .env file
const BASE_URL = "https://music.musicaudience.info"
const API_KEY = "5db48e1f3a0a4580bad47849f1317bd0"

async function fetchArtistsByGenre(str: string) {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/music/artists?apikey=${API_KEY}&q=${str}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function fetchGenres(str: string, limit: number) {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/music/genres?apikey=${API_KEY}&q=${str}&limit=${limit}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getArtistDetails(id: number) {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/music/artists/${id}?apikey=${API_KEY}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getSimilarArtists(id: number) {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/music/artists/${id}/similar?apikey=${API_KEY}`);
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error(error);
    }
}

export {
    fetchGenres,
    fetchArtistsByGenre,
    getArtistDetails,
    getSimilarArtists
}