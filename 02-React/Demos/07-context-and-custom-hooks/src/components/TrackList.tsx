import React, { useContext } from "react";
import { MusicPlayerContext } from "../context/AppContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

function TrackList() {
	const [state, setState] = useContext(MusicPlayerContext)
	console.log(state)
	// const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();
	const trackList: { name: string }[] = state.tracks

	const currentTrackName = ""
	const playTrack = (track: number) => { }
	const isPlaying = state.isPlaying

	return (
		<>
			{trackList.map((track, index) => (
				<div className="box">
					<button className="button" onClick={() => playTrack(index)}>
						{currentTrackName === track.name && isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
					</button>
					<div className="song-title">
						{track.name}
					</div>
				</div>
			))}
		</>
	)
}

export default TrackList