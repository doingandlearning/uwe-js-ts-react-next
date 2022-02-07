import React from "react";

import { MusicPlayerContext } from "../context/MusicPlayerContext";

const TrackList = () => {
  const [state, setState] = React.useContext(MusicPlayerContext);
  return (
    <>
      {state.tracks.map((track: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
        <div className="box">
          <div className="song-title">
            {track.name}
          </div>
        </div>
      ))}
    </>
  );
};

export default TrackList;
