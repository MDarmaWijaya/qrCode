import './App.css';
import Generatecode from './Generate';
import Scanner from './Scanner';

function App() {
  return (
    <>
      <Generatecode />
      <div style={{ width: '500px', height: '500px' }}>
        <Scanner />
      </div>
    </>
  );
}

export default App;
