import React from "react";

const MusicPlayerContext = React.createContext();

function MusicPlayerProvider(props) {
  const [state, setState] = React.useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Lost Chameleon - Genesis",
        // file: LostChameleon,
      },
      {
        name: "The Hipsta - Shaken Soda",
        // file: Rock,
      },
      {
        name: "Tobu - Such Fun",
        // file: Tobu,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
}

export { MusicPlayerContext, MusicPlayerProvider };
