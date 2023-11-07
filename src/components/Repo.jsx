import React, { useState, useEffect, useCallback } from 'react';

const Repo = React.memo(() => {
  const [show, setShow] = useState(false);

  const keys = [17, 91, 93, 224];

  const handleKeyDown = useCallback(
    (event) => {
      keys.includes(event.keyCode) && setShow(true);
    },
    [keys],
  );

  const handleKeyUp = useCallback(
    (event) => {
      keys.includes(event.keyCode) && setShow(false);
    },
    [keys],
  );

  const addEvent = useCallback(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
  }, [handleKeyDown, handleKeyUp]);

  const removeEvent = useCallback(() => {
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyDown, handleKeyUp]);

  useEffect(() => {
    addEvent();
    return () => {
      removeEvent();
    };
  }, [addEvent, removeEvent]);

  return (
    <div className={`repo ${!show ? 'hide' : ''}`.trim()}>
      {show && (
        <a
          href={process.env.REACT_APP_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {process.env.REACT_APP_REPO_URL}
        </a>
      )}
    </div>
  );
});

Repo.displayName = 'Repo';

export default Repo;
