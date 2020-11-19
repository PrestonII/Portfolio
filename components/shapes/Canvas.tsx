import React, { useState, useRef, useEffect } from 'react';
import Two from 'two.js';
import styles from './Canvas.module.scss';

const params = {
  fullscreen: true,
  autostart: true
};

export default function TwoCanvas(props: any) {

  const ref = useRef<HTMLDivElement>(null);
  const two = useRef(new Two(params));
  // const lib = Two.Instances
  // const [shapes, setShapes] = React.useState(lib);
  // const [shapes, setShapes] = React.useState<Two.Object[]>([]);

  useEffect(setup, []);

  function setup() {

    two.current.appendTo(ref.current as HTMLElement);

    // Add any shapes you'd like here
    // const twoShapes: Two.Object[] = [];
    // const shape = two.current.makeCircle(500, 0, 250);
    
    // twoShapes.push(shape);
    // setShapes(twoShapes)
    // two.current.add(shapes)

    two.current.bind('update', update);
    two.current.bind('resize', resize);

    return function() {
      // Unmount handler
      two.current.unbind('update', update);
      two.current.unbind('resize', resize);
    }

  }

  function resize() {
    // Resize logic here
    console.log('resizing!');
    // const stage = document.querySelectorAll('.stage')[0];
    // const stage = ref.current;
    
    // console.log(`Stage is: ${stage?.clientWidth} by ${stage?.clientHeight}`);
    // two.current.width = stage?.clientWidth || 0 ;
    // two.current.height = stage?.clientHeight || 0;
  }

  function update() {
    // animate shapes here
  }

  return (
    <div className={`${styles.twoStage} stage`} ref={ ref } />
  );

}