import React, { useState, useEffect } from "react";
import SongList from "../Application/components/Song/List";
import Loader from "../Application/components/Loader";

const LibraryPage = () => {
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      //Fake delay
      await setTimeout(
        () =>
          fetch("/songs")
            .then(res => res.json())
            .then(setSongs)
            .then(() => setLoading(false))
            .catch(err => console.error("Error accediendo al servidor", err)),
        2000
      );
    };
    fetchSongs();
  }, [false]);
  return (
    <div className="library-page">
      <div className="library__title">Tu librería</div>
      {loading ? <Loader /> : <SongList data={songs} mode="cover" />}
    </div>
  );
};

export default LibraryPage;
