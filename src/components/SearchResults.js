import { useEffect, useState } from "react"
import TextTrackList from "./TrackList"

export default function ListResults({ searchResults }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (searchResults) {
            setLoaded(true);
        }
    }, [searchResults])

    return (
        <>
            <div className="sm:w-1/2">
                <div className="text-white text-lg font-semibold sm:w-1/2 mx-7 sm:mx-0 mt-8 flex justify-center align-center">
                    <h1>Results</h1>
                </div>

                {loaded && searchResults.tracks.items.map((track, key) => (
                    <TextTrackList key={track.id} track={track} />
                ))}
            </div>
        </>
    )
}
