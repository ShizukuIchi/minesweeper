import React from 'react';
import Minesweeper from './Minesweeper';

function App() {
  const [scale, setScale] = React.useState(1);
  const [samePos, setSamePos] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth <= 768) {
      setScale(2);
    }
  }, []);
  React.useEffect(() => {
    function touchStart() {
      setSamePos(true);
    }
    function touchMove() {
      setSamePos(false);
    }
    window.addEventListener('touchstart', touchStart);
    window.addEventListener('touchmove', touchMove);
    return () => {
      window.removeEventListener('touchstart', touchStart);
      window.removeEventListener('touchmove', touchMove);
    };
  }, []);
  return (
    <div style={{ transform: `scale(${scale})` }}>
      <Minesweeper defaultDifficulty="Beginner" sameTouchPos={samePos} />
    </div>
  );
}

export default App;
