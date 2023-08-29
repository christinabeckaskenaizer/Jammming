import { Buffer } from 'buffer';
// Buffer.from('anything', 'base64');
import axios from 'axios';
import * as base64 from 'base-64';

export async function getAccessToken() {

    const REACT_APP_SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const SPOTIFY_CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
    const BASE_URL = 'https://api.spotify.com';
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
    const REDIRECT_URI = 'http://localhost:3000';
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const authHeader = Buffer.from(`${REACT_APP_SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            // Authorization: `Basic ${authHeader}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            "grant_type": 'client_credentials',
            "client_id": REACT_APP_SPOTIFY_CLIENT_ID,
            "client_secret": SPOTIFY_CLIENT_SECRET,
        })
    });
    const data = await response.json();
    return data.access_token;
}
