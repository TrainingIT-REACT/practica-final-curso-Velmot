import React from "react";
import { connect } from "react-redux";
import { List, Cover } from "./mode";
import { playSong } from "../../Player/actions";

export const MODE = {
  LIST: "list",
  COVER: "cover"
};

const SongList = props => {
  return MODE.COVER === props.mode ? <Cover {...props} /> : <List {...props} />;
};

const mapDispatchToProps = dispatch => ({
  playSong: (song, list) => dispatch(playSong(song, list))
})

export default connect(null, mapDispatchToProps)(SongList);
