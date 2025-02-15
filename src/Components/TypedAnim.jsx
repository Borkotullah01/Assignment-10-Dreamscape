import React from 'react';
import Typed from 'typed.js';

const TypedAnim = ({data , cursorChar}) => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: data,
      typeSpeed: 50,
      loop: true,
      cursorChar: cursorChar
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
};

export default TypedAnim;