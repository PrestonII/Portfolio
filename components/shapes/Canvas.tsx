import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Two from 'two.js';
import styles from './Canvas.module.scss';

// export default DynamicTwo;

const params = {
  // fullscreen: true,
  autostart: true
};

interface ITwoComp {
  text?: string;
}

const TwoComponent = (props: ITwoComp ) => {
  const ref = useRef<HTMLDivElement>();
  const two = useRef(new Two(params));
  const lib = Two.Instances
  const [shapes, setShapes] = React.useState(lib);

  useEffect(setup, [shapes]);

  
  function resize() {
    // Resize logic here
    const stage = document.querySelectorAll('.stage')[0];
    console.log('resizing');
    console.log(`Stage is: ${stage.clientWidth} by ${stage.clientHeight}`);
    two.current.width = stage.clientWidth;
    two.current.height = stage.clientHeight;
  }

  function update() {
    // animate shapes here
    console.log('updating');
  }

  function setup() {
    const stage = document.querySelectorAll('.stage')[0];
    two.current.appendTo(stage);
    two.current.width = stage.clientWidth;
    two.current.height = stage.clientHeight;

    // Add any shapes you'd like here
    
    const shape = two.current.makeCircle(500, 0, 250);
    two.current.add(shape);

    two.current.bind('update', update);
    two.current.bind('resize', resize);

    return () => {
      // Unmount handler
      two.current.unbind('update', update);
      two.current.unbind('resize', resize);
    }
  }

  return (
    <div className={`${styles.twoStage} stage`} ref={ ref } />
  )
}

export default TwoComponent;