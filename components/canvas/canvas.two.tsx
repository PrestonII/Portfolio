import React, { useState, useRef, useEffect } from 'react';
import Two from 'two.js';
import styles from './canvas.module.scss';

const canvasTwo: React.FC = () => {
  let two: Two;
  const stageRef = useRef<HTMLDivElement>(null);
  const [shapes, setShapes] = React.useState<Two.Object[]>([]);

  useEffect(() => {
    setup()
   }, []);

  const setup = () => {
    two = new Two({
      width: stageRef.current?.clientWidth,
      height: stageRef.current?.clientHeight,
      autostart: true,
    })
    two.appendTo(stageRef.current as HTMLDivElement);

    // Add any shapes you'd like here
    const twoShapes: Two.Object[] = [];
    const shape = two.makeCircle(500, 0, 250);
    
    twoShapes.push(shape);
    setShapes(twoShapes)
    two.add(shapes)

    // two.update();

    // stageRef.current?.addEventListener('resize', resize);
    two.bind('update', update);
    two.bind('resize', resize);

    return function() {
      // Unmount handler
      two.unbind('update', update);
      two.unbind('resize', resize);
    }

  }

  const resize = () => {
    // Resize logic here
    console.log('resizing!');
    const stage = stageRef.current as HTMLElement;
    
    console.log(`Stage is: ${stage.clientWidth} by ${stage.clientHeight}`);
    console.log(`Two is: ${two?.width} by ${two.height}`);
    
    two.width = stage.clientWidth || 0 ;
    two.height = stage.clientHeight || 0;

    two.update();
  }

  function update() {
    // animate shapes here
  }

  return (
    <div className={`${styles.stage} stage`} ref={ stageRef } />
  );
}

export default canvasTwo;