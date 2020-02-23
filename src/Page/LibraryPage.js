import React, { useState, useEffect } from "react";
import SongList from "../Song/List";

const LibraryPage = () => {
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      await setTimeout(
        () =>
          fetch("/albums")
            .then(res => res.json())
            .then(setAlbums)
            .then(() => setLoading(false))
            .catch(err => console.error("Error accediendo al servidor", err)),
        2000
      );
    };
    const fetchSongs = async () => {
      //Fake fetch with delay
      await setTimeout(
        () =>
          fetch("/songs")
            .then(res => res.json())
            .then(setSongs)
            .catch(err => console.error("Error accediendo al servidor", err)),
        2000
      );
    };
    fetchAlbums();
    fetchSongs();
  }, [false]);
  return (
    <div className="library">
      <div className="library__title">Tu librería</div>
      <SongList data={songs} mode="cover" />
    </div>
  );
};

export default LibraryPage;
