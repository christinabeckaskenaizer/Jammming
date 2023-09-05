// import './App.css';
import PlayList from '../components/PlayList';
import SearchBar from '../components/SearchBar';
import ListResults from '../components/SearchResults';
import { useState } from 'react';
export default function Home() {

  // hooks here for search results
  const [searchResults, setSearchResults] = useState();
  const [playlist, setPlaylist] = useState([]);

  console.log("reults in home", searchResults)
  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-black to-purple-700">
      <div className='bg-black flex items-center justify-center text-center h-12'>
        <h1 className='mt-10 tracking-wide font-bold text-2xl text-white'>Ja<span className='tracking-wide font-bold text-violet-700'>mmm</span>ing</h1>
      </div>
      <SearchBar searchResults={searchResults} setSearchResults={setSearchResults}/* pass hooks here into searchBar as props, including the set functions, and update the hook on search */ />
      <div className='sm:flex sm:flex-row w-full items-center justify-center'>
        <ListResults searchResults={searchResults} /* pass hooks into results - once searchBar has updated hooks, state will update and searchResults can display data from hooks */ />
        <PlayList searchResults={searchResults} />
      </div>
    </div>
  );
}
