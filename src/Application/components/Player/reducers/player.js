import { useWith, find, prop, identity, compose, pickAll, values } from "ramda";
import { PLAYER_PLAY_SONG, PLAYER_NEXT_SONG } from "../actions";

const initialState = {
  player: {
    song: {},
    list: [],
    recent: []
  }
};

const player = (state = initialState.player, { type, song, list, action }) => {
  switch (type) {
    case PLAYER_PLAY_SONG:
      return {
        ...state,
        song,
        list,
        recent: [...state.recent.slice(-4), song]
      };
    case PLAYER_NEXT_SONG: {
      const currentSong = useWith(find, [prop("id"), identity])(song, list);
      const currentSongIndex = compose(values, pickAll)(currentSong);
      const songIndex =
        (currentSongIndex < 0 ? state.list.lenth - 1 : currentSongIndex) +
        action;
      const nextSong = state.list[songIndex];
      return {
        ...state,
        song: nextSong,
        recent: [...state.recent.slice(-4), nextSong]
      };
    }
    default:
      return state;
  }
};

export const getSong = state => state.player.song;
export const getList = state => state.player.list;
export const getRecent = state => state.player.recent;

// export default combineReducers({
//   player
// });
export default player;
