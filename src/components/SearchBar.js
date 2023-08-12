export default function SearchBar() {
  return (
    <div class="mt-10 flex justify-center">
      <input
        type="search"
        className="flex justify-center mt-5 border rounded-xl w-4/5 sm:w-3/5 p-2"
        id="exampleSearch"
        placeholder="Search a song, artist, or album..."
      />
    </div>
  );
}
