import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Two from 'two.js';


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
  const stage = document.querySelectorAll('.stage')[0];

  useEffect(setup, []);

  
  function resize() {
    // Resize logic here
    
  }

  function update() {
    // animate shapes here
  }

  function setup() {

    two.current.appendTo(stage);

    // Add any shapes you'd like here
    
    const shape = two.current.makeCircle(0, 0, 250);
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
    <div className="stage" ref={ ref } />
  )
}

export default TwoComponent;