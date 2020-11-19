import React, { useState, useRef, useEffect } from 'react';
import Two from 'two.js';
import styles from './Canvas.module.scss';

// const params = {
//   // fullscreen: true,
//   autostart: true,
// };

export default function TwoCanvas(props: any) {

  const ref = useRef<HTMLDivElement>(null);
  let two: Two;
  // const lib = Two.Instances
  // const [shapes, setShapes] = React.useState(lib);
  const [shapes, setShapes] = React.useState<Two.Object[]>([]);

  useEffect(setup, []);

  function setup() {
    const start = document.querySelectorAll('.stage')[0];
    two = new Two({
      width: start.clientWidth,
      height: start.clientHeight,
      autostart: true,
    })
    two.appendTo(start as HTMLElement);

    // Add any shapes you'd like here
    const twoShapes: Two.Object[] = [];
    const shape = two.makeCircle(500, 0, 250);
    
    twoShapes.push(shape);
    setShapes(twoShapes)
    two.add(shapes)

    // two.update();

    start.addEventListener('resize', resize);
    // two.bind('update', update);
    // two.bind('resize', resize);

    return function() {
      // Unmount handler
      two.unbind('update', update);
      two.unbind('resize', resize);
    }

  }

  function resize() {
    // Resize logic here
    console.log('resizing!');
    // const stage = document.querySelectorAll('.stage')[0];
    const stage = ref.current;
    
    console.log(`Stage is: ${stage?.clientWidth} by ${stage?.clientHeight}`);
    console.log(`Two is: ${two?.width} by ${two.height}`);

    
    two.width = stage?.clientWidth || 0 ;
    two.height = stage?.clientHeight || 0;

    two.update();
  }

  function update() {
    // animate shapes here
  }

  return (
    <div className={`${styles.twoStage} stage`} ref={ ref } />
  );

}