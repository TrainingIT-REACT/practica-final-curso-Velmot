export const PLAYER_PLAY_SONG = "PLAYER_PLAY_SONG";
export const playSong = (song, list) => ({
    type: PLAYER_PLAY_SONG,
    song,
    list
});

export const PLAYER_NEXT_SONG = "PLAYER_NEXT_SONG";
export const nextSong = action => ({
    type: PLAYER_NEXT_SONG,
    action
})