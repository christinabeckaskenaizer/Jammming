import logo from './logo.svg';
import './App.css';
import PlayList from './components/PlayList';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col bg-prple-wave">
      <div className='bg-black flex items-center justify-center text-center h-12'>
        <h1 className='mt-0s tracking-wide font-bold text-white text-3xl'>Ja<span className='tracking-wide font-bold text-violet-700'>mmm</span>ing</h1>
      </div>
      <h1 className='text-white flex items-center justify-center mt-60 mx-5 text-lg'>Crafting Playlists, Elevating Vibes.</h1>
      <h1 className='text-white font-bold flex items-center justify-center mx-5 text-center text-xl'>Connect Jammming to your Spotify Account to get started.</h1>
      <div className='flex justify-center items-center mt-3'>
        <button className="bg-black hover:bg-purple-700 flex justify-center items-center w-52 text-white font-bold py-2 px-4 rounded-full">
          Connect to Spotify
        </button>
      </div>
    </div>
  );
}

export default App;
