import React, { useState, useRef, useEffect } from 'react';
import Two from 'two.js';
// import Two from '../../lib/two.min.js';
import styles from './canvas.module.scss';

const canvasTwo: React.FC = () => {
  let two: Two;
  const stageRef = useRef<HTMLDivElement>(null);
  const [shapes, setShapes] = React.useState<Two.Object[]>([]);

  useEffect(() => {
    setup()
   }, []);

  const setup = () => {
    const stage = stageRef.current as HTMLDivElement;
    two = new Two({
      width: stage.clientWidth,
      height: stage.clientHeight,
      autostart: true,
      // fullscreen: true,
    })
    
    if(stage.children.length < 1)
      two.appendTo(stage);

    // Add any shapes you'd like here
    const twoShapes: Two.Object[] = [];
    const shape = two.makeCircle(500, 0, 250);
    
    twoShapes.push(shape);
    setShapes(twoShapes)
    two.add(shapes)
    
    two.bind('update', update);
    two.bind('resize', resize);
    two.update();

  }

  const resize = () => {
    // Resize logic here
    console.log('resizing!');
    const stage = stageRef.current as HTMLElement;
    
    console.log(`Stage is: ${stage.clientWidth} by ${stage.clientHeight}`);
    console.log(`Two is: ${two?.width} by ${two.height}`);
    
    two.width = stage.clientWidth || 0 ;
    two.height = stage.clientHeight || 0;

    // two.update();
  }

  function update() {
    // animate shapes here
  }

  return (
    <div className={`${styles.stage} stage`} ref={ stageRef } />
  );
}

export default canvasTwo;