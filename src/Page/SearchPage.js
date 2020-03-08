import React, { useState, useEffect } from "react";
import SongList from "Components/Song/List";
import Loader from "Components/Loader";

const SearchPage = ({ match }) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSongs = async () => {
      //Fake delay
      await setTimeout(
        () =>
          fetch(`/songs?name_like=${match.params.query}`)
            .then(res => res.json())
            .then(setSongs)
            .then(() => setLoading(false))
            .catch(err => console.error("Error accediendo al servidor", err)),
        2000
      );
    };
    fetchSongs();
  }, [match.params.query]);
  return (
    <div className="search">
      {loading ? <Loader /> : <SongList data={songs} mode="cover" />}
    </div>
  );
};

export default SearchPage;
