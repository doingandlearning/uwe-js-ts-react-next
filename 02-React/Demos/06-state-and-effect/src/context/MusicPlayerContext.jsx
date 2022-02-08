import React from "react"

const MusicPlayerContext = React.createContext();

function MusicPlayerProvider(props) {
	const [state, setState] = React.useState({})
	return <MusicPlayerContext.Provider value={[state,setState]}>
		{props.children}
	</MusicPlayerContext.Provider>
}

export { MusicPlayerContext, MusicPlayerProvider }
