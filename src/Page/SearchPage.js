import React, { useState, useEffect } from "react";
import SongList from "../Song/List";

const SearchPage = ({ match }) => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const fetchSongs = async () => {
      //Fake fetch with delay
      await setTimeout(
        () =>
          fetch(`/songs?name_like=${match.params.query}`)
            .then(res => res.json())
            .then(setSongs)
            .catch(err => console.error("Error accediendo al servidor", err)),
        2000
      );
    };
    fetchSongs();
  }, [match.params.query]);
  return (
    <div>
      <SongList data={songs} mode="cover" />
    </div>
  );
};

export default SearchPage;
