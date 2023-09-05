import SearchBar from "./SearchBar"

export default function TextTrackList({ track, SearchResults }) {

    const addSong = async () => {

    }

    return (
        <>
            <div className="flex grid-cols-2">
                < div className="ml-7 text-left text-white font-normal w-11/12" >
                    <p>{track.name}</p>
                    <p className="font-light">{track.artists[0].name} | {track.album.name} </p>
                    <hr className="mt-3"></hr>
                </div >
                <button onClick={addSong} className="text-white justify-center w-1/12">+</button>
                <hr className="mt-3"></hr>
            </div>
        </>
    )
}
