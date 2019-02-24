import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import dead from '../assets/dead.png';
import smile from '../assets/smile.png';
import win from '../assets/win.png';
import ohh from '../assets/ohh.png';
import empty from '../assets/empty.png';
import open1 from '../assets/open1.png';
import open2 from '../assets/open2.png';
import open3 from '../assets/open3.png';
import open4 from '../assets/open4.png';
import open5 from '../assets/open5.png';
import open6 from '../assets/open6.png';
import open7 from '../assets/open7.png';
import open8 from '../assets/open8.png';
import flag from '../assets/flag.png';
import mine from '../assets/mine-ceil.png';
import mineDeath from '../assets/mine-death.png';
import misFlagged from '../assets/misflagged.png';
import question from '../assets/question.png';
import checked from '../assets/checked.png';

function MineSweeperView({
  ceils,
  className,
  changeCeilState,
  onReset,
  openCeil,
  mines,
  status,
  seconds,
  onClose,
  difficulty,
}) {
  const face = useRef(null);
  const [mouseDown, setMouseDown] = useState(false);
  const [openOption, setOpenOption] = useState(null);

  function remainMines() {
    return (
      mines -
      ceils.filter(ceil => ceil.state === 'flag' || ceil.state === 'misflagged')
        .length
    );
  }
  function statusFace() {
    if (mouseDown) return <img alt="ohh" src={ohh} />;
    switch (status) {
      case 'died':
        return <img alt="dead" src={dead} />;
      case 'won':
        return <img alt="win" src={win} />;
      default:
        return <img alt="smile" src={smile} />;
    }
  }
  function onMouseDown(e) {
    if (
      face.current.contains(e.target) ||
      status === 'won' ||
      status === 'died'
    )
      return;
    setMouseDown(true);
  }
  function onMouseUp() {
    setMouseDown(false);
  }
  function closeOption(e) {
    if (e.target.closest('.mine__top-bar__text')) return;
    setOpenOption(null);
  }
  function hoverOption(option) {
    if (openOption) setOpenOption(option);
  }
  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('click', closeOption);
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('click', closeOption);
    };
  }, []);
  return (
    <div className={className}>
      <div className="mine__drop-downs">
        <div
          style={{ visibility: openOption === 'game' ? 'visible' : 'hidden' }}
          className="mine__drop-down"
        >
          <div className="mine__drop-down__title">Game</div>
          <div className="mine__drop-down__menu">
            <div className="mine__drop-down__row" onClick={() => onReset()}>
              <div className="mine__drop-down__check" />
              <div className="mine__drop-down__text">New</div>
              <span className="mine__drop-down__hot-key">F2</span>
              <div className="mine__drop-down__arrow" />
            </div>
            <div className="mine__drop-down__separator" />
            <div
              className="mine__drop-down__row"
              onClick={() => onReset('Beginner')}
            >
              <div className="mine__drop-down__check">
                {difficulty === 'Beginner' && (
                  <img src={checked} alt="checked" />
                )}
              </div>
              <span>Beginner</span>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
            <div
              className="mine__drop-down__row"
              onClick={() => onReset('Intermediate')}
            >
              <div className="mine__drop-down__check">
                {difficulty === 'Intermediate' && (
                  <img src={checked} alt="checked" />
                )}
              </div>
              <span>Intermediate</span>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
            <div
              className="mine__drop-down__row"
              onClick={() => onReset('Expert')}
            >
              <div className="mine__drop-down__check">
                {difficulty === 'Expert' && <img src={checked} alt="checked" />}
              </div>
              <span>Expert</span>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
            <div className="mine__drop-down__row">
              <div className="mine__drop-down__check" />
              <span>Custom...</span>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
            <div className="mine__drop-down__separator" />
            <div className="mine__drop-down__row">
              <div className="mine__drop-down__check">
                <img src={checked} alt="checked" />
              </div>
              <span>Marks (?)</span>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
            <div className="mine__drop-down__row">
              <div className="mine__drop-down__check">
                <img src={checked} alt="checked" />
              </div>
              <span>Color</span>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
            <div className="mine__drop-down__row">
              <div className="mine__drop-down__check" />
              <span>Sound</span>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
            <div className="mine__drop-down__separator" />
            <div className="mine__drop-down__row">
              <div className="mine__drop-down__check" />
              <span>Best Times...</span>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
            <div className="mine__drop-down__separator" />

            <div className="mine__drop-down__row" onClick={onClose}>
              <div className="mine__drop-down__check" />
              <span>Exit</span>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
          </div>
        </div>
        <div
          style={{ visibility: openOption === 'help' ? 'visible' : 'hidden' }}
          className="mine__drop-down"
        >
          <div className="mine__drop-down__title">Help</div>
          <div className="mine__drop-down__menu">
            <div className="mine__drop-down__row">
              <div className="mine__drop-down__check" />
              <div className="mine__drop-down__text">Contents</div>
              <span className="mine__drop-down__hot-key">F1</span>
              <div className="mine__drop-down__arrow" />
            </div>
            <div className="mine__drop-down__row">
              <div className="mine__drop-down__check" />
              <div className="mine__drop-down__text">Search for Help on...</div>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
            <div className="mine__drop-down__row">
              <div className="mine__drop-down__check" />
              <div className="mine__drop-down__text">Using Help</div>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
            <div className="mine__drop-down__separator" />
            <div className="mine__drop-down__row">
              <div className="mine__drop-down__check" />
              <div className="mine__drop-down__text">About Minesweeper...</div>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="mine__top-bar">
        <div
          onClick={() => setOpenOption('game')}
          onMouseOver={() => hoverOption('game')}
          className="mine__top-bar__text"
        >
          Game
        </div>
        <div
          onClick={() => setOpenOption('help')}
          onMouseOver={() => hoverOption('help')}
          className="mine__top-bar__text"
        >
          Help
        </div>
      </div>
      <section className="mine__content" onMouseDown={onMouseDown}>
        <div className="mine__score-bar">
          <div className="mine__digits__outer">{remainMines()}</div>
          <div className="mine__face__outer">
            <button ref={face} className="mine__face" onClick={() => onReset()}>
              {statusFace()}
              <img alt="smile" src={smile} />
            </button>
          </div>
          <div className="mine__digits__outer">{seconds}</div>
        </div>
        <div className="mine__content__inner">
          <Ceils
            ceils={ceils}
            onLeftClickCeil={openCeil}
            onRightClickCeil={changeCeilState}
          />
        </div>
      </section>
    </div>
  );
}
function getTextImg(index) {
  return [empty, open1, open2, open3, open4, open5, open6, open7, open8][index];
}
function Ceils({ ceils, onLeftClickCeil, onRightClickCeil }) {
  function renderContent(ceil) {
    const { state, minesAround } = ceil;
    switch (state) {
      case 'open':
        return <MinesAround mines={minesAround} />;
      case 'unknown':
        return <Question />;
      case 'flag':
        return <Flag />;
      case 'misflagged':
        return <MisFlagged />;
      case 'mine':
        return <Mine />;
      case 'die':
        return <Die />;
      default:
        return <Cover />;
    }
  }

  return ceils.map((ceil, index) => (
    <Ceil
      key={index}
      state={ceil.state}
      index={index}
      onLeftClick={onLeftClickCeil}
      onRightClick={onRightClickCeil}
    >
      {renderContent(ceil)}
    </Ceil>
  ));
}

const Die = () => (
  <>
    <CeilBackgroundOpen />
    <img alt="death" src={mineDeath} />
  </>
);
const Cover = () => <CeilBackgroundCover />;
const MisFlagged = () => (
  <>
    <CeilBackgroundOpen />
    <img alt="misFlagged" src={misFlagged} />
  </>
);
const Flag = () => (
  <>
    <CeilBackgroundCover />
    <img alt="flag" src={flag} />
  </>
);
const MinesAround = ({ mines }) => (
  <>
    <CeilBackgroundOpen />
    <img alt="mines-around" src={getTextImg(mines)} />
  </>
);
const Question = () => (
  <>
    <CeilBackgroundCover />
    <img alt="question" src={question} />
  </>
);
const Mine = () => (
  <>
    <CeilBackgroundOpen />
    <img alt="mine" src={mine} />
  </>
);
function Ceil({ children, index, onLeftClick, onRightClick }) {
  function _onLeftClick() {
    onLeftClick(index);
  }
  function _onRightClick(e) {
    e.preventDefault();
    onRightClick(index);
  }
  return (
    <div
      className="mine__ceil"
      onClick={_onLeftClick}
      onContextMenu={_onRightClick}
    >
      {children}
    </div>
  );
}

const CeilBackgroundCover = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-left: rgb(245, 245, 245) solid 2px;
  border-top: rgb(245, 245, 245) solid 2px;
  border-right: rgb(128, 128, 128) solid 2px;
  border-bottom: rgb(128, 128, 128) solid 2px;
`;
const CeilBackgroundOpen = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-left: rgb(128, 128, 128) solid 1px;
  border-top: rgb(128, 128, 128) solid 1px;
`;

export default styled(MineSweeperView)`
  user-select: none;
  display: inline-block;
  .mine__drop-downs {
    position: absolute;
    display: flex;
    height: 20px;
  }
  .mine__drop-down {
    position: relative;
    z-index: 1;
  }
  .mine__drop-down__title {
    padding: 0 5px;
    height: 100%;
    line-height: 20px;
    font-size: 11px;
    color: white;
    background-color: #1660e8;
  }
  .mine__drop-down__menu {
    background-color: white;
    position: absolute;
    box-shadow: 2px 2px 1px rgb(100, 100, 100);
    border: 1px solid gray;
    padding: 2px;
    display: grid;
    grid-template-columns: 18px auto auto 15px;
    line-height: 18px;
    font-size: 11px;
  }
  .mine__drop-down__row {
    display: contents;
    &:hover > * {
      background: #e99f17;
      filter: invert(100%);
    }
  }
  .mine__drop-down__separator {
    grid-column: 1 / 5;
    height: 1px;
    background-color: gray;
    margin: 3px 1px;
  }
  .mine__drop-down__check {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mine__drop-down__arrow {
  }
  .mine__drop-down__hot-key {
    padding-left: 5px;
  }
  .mine__drop-down__text {
    white-space: nowrap;
  }
  .mine__top-bar {
    position: relative;
    display: flex;
    height: 20px;
    background-color: rgb(236, 233, 216);
  }
  .mine__top-bar__text {
    padding: 0 5px;
    height: 100%;
    line-height: 20px;
    font-size: 11px;
    &:hover {
      color: white;
      background-color: #0b61ff;
    }
  }
  .mine__content {
    border-left: rgb(245, 245, 245) solid 3px;
    border-top: rgb(245, 245, 245) solid 3px;
    background-color: rgb(192, 192, 192);
    padding: 5px;
  }
  .mine__score-bar {
    height: 34px;
    border-radius: 1px;
    border-top: rgb(128, 128, 128) solid 2px;
    border-left: rgb(128, 128, 128) solid 2px;
    border-right: rgb(245, 245, 245) solid 2px;
    border-bottom: rgb(245, 245, 245) solid 2px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 7px 3px 4px;
  }
  .mine__digits__outer {
    background: black;
    width: 42px;
    height: 100%;
    color: red;
    border-width: 0 1px 1px 0;
    border-style: solid;
    border-color: #fff;
    font-size: 22px;
    line-height: 22px;
    text-align: right;
  }
  .mine__face__outer {
    width: 24px;
    height: 24px;
    border-top: 1px solid rgb(128, 128, 128);
    border-left: 1px solid rgb(128, 128, 128);
    border-radius: 2px;
  }
  .mine__face {
    border-radius: 2px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(192, 192, 192);
    border-width: 2px;
    border-style: solid;
    border-color: rgb(245, 245, 245) rgb(128, 128, 128) rgb(128, 128, 128)
      rgb(245, 245, 245);
    outline: none;
    &:active:hover {
      border-width: 1px;
      border-color: rgb(128, 128, 128);
      img {
        pointer-events: none;
        transform: translate(1px, 1px);
      }
      img:nth-child(1) {
        display: none;
      }
      img:nth-child(2) {
        display: block;
      }
    }
    img:nth-child(2) {
      display: none;
    }
  }
  .mine__content__inner {
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns}, 16px);
    grid-template-rows: repeat(${({ rows }) => rows}, 16px);
    border-top: rgb(128, 128, 128) solid 3px;
    border-left: rgb(128, 128, 128) solid 3px;
    border-right: rgb(245, 245, 245) solid 3px;
    border-bottom: rgb(245, 245, 245) solid 3px;
  }
  .mine__ceil {
    position: relative;
    img {
      position: absolute;
      width: 16px;
      height: 16px;
    }
  }
`;
