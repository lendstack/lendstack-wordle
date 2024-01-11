import "../App.css";

import React, { useEffect } from "react";

const ErrorPopup = (props: { message:string, onClose :() => void}) => {
  const duration = 2000;

  useEffect(() => {
    const timer = setTimeout(() => {
      props.onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [props.onClose, duration]);

  return (
    <div className="error-popup">
      <p>{props.message}</p>
    </div>
  );
};


export default ErrorPopup;

