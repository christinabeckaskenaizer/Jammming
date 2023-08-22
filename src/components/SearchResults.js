import TextTrackList from "./TrackList"

export default function SearchResults() {
    return(
        <>
        <div className="sm:w-1/2">
        <div className="text-white text-lg font-semibold sm:w-1/2 mx-7 sm:mx-0 mt-8 flex justify-center align-center">
            <h1>Results</h1>
        </div>
        <TextTrackList />
        <TextTrackList />
        </div>
        </>
    )
}