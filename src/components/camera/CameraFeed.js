import React, { useRef, useEffect, forwardRef } from 'react';

const CameraFeed = forwardRef((props, ref) => {
  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          ref.current.srcObject = stream;
        })
        .catch(console.error);
    }
  }, [ref]);

  return <video ref={ref} autoPlay />;
});

export default CameraFeed;
