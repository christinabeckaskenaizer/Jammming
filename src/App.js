import logo from './logo.svg';
import './App.css';
import PlayList from './components/PlayList';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-black to-purple-700">
      <div className='bg-black flex items-center justify-center text-center h-12'> 
      <h1 className='mt-10 tracking-wide font-bold text-white'>Ja<span className='tracking-wide font-bold text-violet-700'>mmm</span>ing</h1>
      </div>
      <SearchBar />
      <div className='sm:flex sm:flex-row w-full items-center justify-center'>
      <SearchResults />
      <PlayList />
      </div>
    </div>
  );
}

export default App;
