import React from "react";
import { List, Cover } from "./mode";

export const MODE = {
  LIST: "list",
  COVER: "cover"
};

const SongList = props => {
  return MODE.COVER === props.mode ? <Cover {...props} /> : <List {...props} />;
};

export default SongList;
