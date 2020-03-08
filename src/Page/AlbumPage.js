import React, { useState, useEffect } from "react";
import Album from "Components/Album";

const AlbumPage = ({ match }) => {
  const [album, setAlbum] = useState({});
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbum = async () => {
      await setTimeout(
        () =>
          fetch(`/albums?id=${match.params.id}`)
            .then(res => res.json())
            .then(albums => setAlbum(Array.isArray(albums) ? albums[0] : {}))
            .then(fetch(`/songs?album_id=${match.params.id}`)
            .then(res => res.json())
            .then(setSongs)
            .then(() => setLoading(false)))
            .catch(err => console.error("Error accediendo al servidor", err)),
        1000
      );
    };
    fetchAlbum();
  }, [false]);
  return (
    <div className="album-page">
      <Album album={album} songs={songs} loading={loading} />
    </div>
  );
};

export default AlbumPage;
