import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React, { useState } from "react";
function Test() {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        className="bar"
      />
      <button onClick={() => setProgress(progress + 10)}>
        Increase Progress
      </button>
    </div>
  );
}
export default Test;
