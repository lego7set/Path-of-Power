import React, { ReactNode, useRef, useEffect } from "react";
import "./Popup.css";

interface PopupProps {
  children?: ReactNode | string;
  onClose?: () => void;
}

function Popup({
  children = <code>(Empty Popup)</code>,
  onClose = () => {},
}: PopupProps) {
  const popupRef = useRef(null);
  const closeButtonRef = useRef(null);
  const handleClose = () => {
    // Remove the popup element from the DOM
    /* eslint-disable */
    // @ts-ignore
    const parentElement = popupRef.current.parentElement;
    parentElement!.removeChild(popupRef.current);
    /* eslint-enable */
  };
  useEffect(() => {
    const cur = closeButtonRef.current as unknown as HTMLElement;
    if (cur) {
      cur.addEventListener("click", handleClose);
    }
    return () => {
      if (cur) {
        onClose();
        cur.removeEventListener("click", handleClose);
      }
    };
  }, []);

  try {
    // TODO: add a close button
    return (
      <div ref={popupRef} className="popup">
        <button ref={closeButtonRef} className="close-button">
          X
        </button>
        <div
          style={{
            marginTop: "25px",
            marginRight: "25px",
            marginLeft: "5px",
            marginBottom: "5px",
          }}
        >
          {children}
        </div>
      </div>
    );
  } finally {
    // add event listener to close button
    /* eslint-disable */
    // @ts-ignore
    /* eslint-enable */
  }
}

export default Popup;
