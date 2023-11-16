import "./GameDisplay.css";
import Popup from "./components/Popup";
function GameDisplay() {
  return (
    <div className="GameDisplay">
      Hi{" "}
      <Popup>
        Welcome to Path of Power! <br />
        <br /> (You can close this popup by clicking the X){" "}
      </Popup>
    </div>
  );
}

export default GameDisplay;
