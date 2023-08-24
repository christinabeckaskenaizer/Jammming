import logo from './logo.svg';
import './App.css';
import PlayList from './components/PlayList';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { getAccessToken } from './spotify';

export default function Landing() {
  const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = 'http://localhost:3000/home';
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  return (
    <div className="w-screen h-screen flex flex-col bg-prple-wave">
      <div className='bg-black flex items-center justify-center text-center h-12'>
        <h1 className='mt-0s tracking-wide font-bold text-white text-3xl'>Ja<span className='tracking-wide font-bold text-violet-700'>mmm</span>ing</h1>
      </div>
      <h1 className='text-white flex items-center justify-center mt-60 mx-5 text-lg'>Crafting Playlists, Elevating Vibes.</h1>
      <h1 className='text-white font-bold flex items-center justify-center mx-5 text-center text-xl'>Connect Jammming to your Spotify Account to get started.</h1>
      <div className='flex justify-center items-center mt-3'>
        <a className="bg-black hover:bg-purple-700 flex justify-center items-center w-52 text-white font-bold py-2 px-4 rounded-full" href={`${AUTH_ENDPOINT}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Connect to Spotify</a>
      </div>
    </div>
  );
}
