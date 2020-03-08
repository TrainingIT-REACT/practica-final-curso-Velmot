import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SongList, { MODE } from "../Application/components/Song/List";
import { getRecent } from "../Application/components/Player/reducers/player";
import Loader from "../Application/components/Loader";

import "./css/HomePage.css";

const HomePage = ({ recent }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [recomLoading, setRecomLoading] = useState(true);
  useEffect(() => {
    const fetchRecommendations = async () => {
      await setTimeout(
        () =>
          fetch("/songs")
            .then(res => res.json())
            .then(setRecommendations)
            .then(() => setRecomLoading(false))
            .catch(err => console.error("Error accediendo al servidor", err)),
        1000
      );
    };
    fetchRecommendations();
  }, [false]);
  return (
    <div className="home-page">
      {recent && recent.length !== 0 && (
        <div className="home__recent">
          <div className="home__recent-title">Escuchadas recientemente</div>
          <SongList data={recent} mode={MODE.COVER} />
        </div>
      )}
      <div className="home__recommendation">
        <div className="home__recommendation-title">Te podría interesar</div>
        {recomLoading ? (
          <Loader />
        ) : (
          <SongList data={recommendations} mode={MODE.COVER} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  recent: getRecent(state)
});

export default connect(mapStateToProps)(HomePage);
