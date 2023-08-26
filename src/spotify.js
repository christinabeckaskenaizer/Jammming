import { Buffer } from 'buffer';
Buffer.from('anything', 'base64');


export async function getAccessToken() {

    const REACT_APP_SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
    const BASE_URL = 'https://api.spotify.com';
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
    const REDIRECT_URI = 'http://localhost:3000';
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const authHeader = Buffer.from(`${REACT_APP_SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'GET',
        headers: {
            Authorization: `Basic ${authHeader}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
    });

    const data = await response.json();
    console.log(data);
    return data.access_token;
}

// export async function getPlaylist(playlistId) {
//     const accessToken = await getAccessToken();
//     const response = await fetch(`${BASE_URL}/playlists/${playlistId}`, {
//         headers: {
//             Authorization: `Bearer ${accessToken}`,
//         },
//     });

//     const data = await response.json();
//     return data;
// }
