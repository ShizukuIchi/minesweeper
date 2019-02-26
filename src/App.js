import React from 'react';
import Minesweeper from './Minesweeper';

function App() {
  const [scale, setScale] = React.useState(1);
  React.useEffect(() => {
    if (window.innerWidth <= 768) {
      setScale(2);
    }
  }, []);
  return (
    <div style={{ transform: `scale(${scale})` }}>
      <Minesweeper defaultDifficulty="Beginner" />
    </div>
  );
}

export default App;
