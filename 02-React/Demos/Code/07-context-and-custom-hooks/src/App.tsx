import TrackList from "./components/TrackList";
import PlayerControls from "./components/PlayerControls";
// import { MusicPlayerProvider } from "./context/MusicPlayerContext";

function App() {
  return (
    // <MusicPlayerProvider>
    <div className="container">
      <TrackList />
      <PlayerControls />
    </div>
    // </MusicPlayerProvider>
  );
}

export default App;
