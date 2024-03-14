import './App.css';
import Waveform from './WaveForm'
import Chat from './bubbles'
import clipwav from './/assets/media/live.mp3'

const App = () => (
  <>
    <h1>WaveSurfer Demo</h1>
    <div className='container'>
      <Waveform audio={clipwav} />
      <Chat></Chat>
    </div>
  </>
)

export default App;
