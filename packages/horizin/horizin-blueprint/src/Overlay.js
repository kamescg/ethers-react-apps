import React, {useState} from 'react';
import {Button, Classes, Overlay} from '@blueprintjs/core';

export const OverlaySystem = ({children, ...props}) => {
  const [isOpen, setIsOpen] = useState();
  const toggleOverlay = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button text="Show overlay" onClick={toggleOverlay} />
    
      <Overlay isOpen={isOpen} onClose={toggleOverlay} className={'content-boi'}>
        {children && children[1] ? children[1] : null}
      </Overlay>
    </div>
  );
};
