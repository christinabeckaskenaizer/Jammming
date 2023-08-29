import { toBeChecked } from "@testing-library/jest-dom/matchers";
import { getAccessToken } from "../spotify";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { Buffer } from 'buffer';
Buffer.from('anything', 'base64');

export default function SearchBar({ searchResults, setSearchResults }) {

  const [text, setText] = useState('');
  const [token, setToken] = useState('');

  const handleChange = async (e) => {
    setText(e.target.value);
  }

  const handleSearch = async () => {
    const searchURL = `https://api.spotify.com/v1/search?q=${text}&type=artist,track`;
    if (token) {
      try {
        const response = await fetch(searchURL, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
        const data = await response.json();
        setSearchResults(data);

      } catch (error) {
        console.log("error", error);
      }
    }
  }

  const getToken = async () => {
    let retrievedToken = await getAccessToken();
    setToken(retrievedToken);
  }

  useEffect(() => {
    getToken();
  }, [])

  useEffect(() => {
    console.log('these results are in searchBar', searchResults);
  }, [searchResults])

  return (
    <div className="mt-10 flex justify-center">
      <input
        onChange={handleChange}
        type="search"
        className="flex justify-center mt-5 border rounded-xl w-4/5 sm:w-3/5 p-2"
        id="exampleSearch"
        placeholder="Search a song or artist..."
      />
      <button onClick={handleSearch}><svg className="flex items-center justify-center mt-4 ml-4 hover:fill-violet-500" fill="#ffffff" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.4 490.4" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796 s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"></path> </g> </g></svg>
      </button>
    </div>
  );
}
