import React, { useState } from 'react';
import './SearchGlass.scss';

const SearchGlass = () => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);

  // const frontImg = "https://img.freepik.com/free-vector/white-abstract-wallpaper_23-2148830026.jpg?w=2000"; 
  // const backImg = "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706__340.jpg";

  const frontImg = require('../../assets/5.1.png');
  const backImg =  require('../../assets/5.1a.png');
  const cursorImg = require('../../assets/goggle.png');
  const size = 200;
  const magnifierHeight = size;
  const magnifieWidth = size;
  const zoomLevel = 1;

  const absBtnStyle = {
    left: '50%',
    top: '10%',
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: `${size/2}px`,
    zIndex: 9,
  }
  return (
    <div
     className='SearchGlass'
  >
    <img
      className='bg back'
      src={backImg}
      alt={"img-1"}
    />
    <img
      className='bg front'
      src={frontImg}
      alt={"img-2"}
      onMouseEnter={(e) => {
        const elem = e.currentTarget;
        const { width, height } = elem.getBoundingClientRect();
        setSize([width, height]);
        setShowMagnifier(true);
      }}
      onMouseMove={(e) => {
        const elem = e.currentTarget;
        const { top, left } = elem.getBoundingClientRect();
  
        const x = e.pageX - left - window.pageXOffset;
        const y = e.pageY - top - window.pageYOffset;
       
        setXY([x, y]);
      }}
      onClick={() => {
        if (x > 290 && x < 500 && y > 110 && y < 280) {
          alert('found it!')
        }
      }}
      onMouseLeave={() => {
        setShowMagnifier(false);
      }}
    />
    <div
     style={{
      display: showMagnifier ? "block" : "none",
      position: "absolute",
      zIndex: 5,
      pointerEvents: "none",
      // set size of magnifier
      height: `${magnifierHeight}px`,
      width: `${magnifieWidth}px`,
      // cursor: `url('${cursorImg}'), auto`,
      // move element center to cursor pos
      top: `${y - magnifierHeight / 2}px`,
      left: `${x - magnifieWidth / 2}px`,
      borderRadius: `${magnifieWidth/2}px`,
      opacity: "1", // reduce opacity so you can verify position
      border: "1px solid lightgray",
      backgroundColor: "white",
      backgroundImage: `url('${backImg}')`,
      backgroundRepeat: "no-repeat",

      //calculate zoomed image size
      backgroundSize: `${imgWidth}px ${
        imgHeight
      }px`,

      backgroundPositionX: `${-x + magnifieWidth / 2}px`,
      backgroundPositionY: `${-y + magnifierHeight / 2}px`
    }}
    />
    <img style={{
      display: showMagnifier ? "block" : "none",
      position: "absolute",
      pointerEvents: "none",
      zIndex: 6,
      height: `${magnifierHeight + 56}px`,
      width: `${magnifieWidth+ 56}px`,
      top: `${y - magnifierHeight / 2}px`,
      left: `${x - magnifieWidth / 2}px`,
    }} src={cursorImg}/>
  </div>
  )
};

export default SearchGlass;