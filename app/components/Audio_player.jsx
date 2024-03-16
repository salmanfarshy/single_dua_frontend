import React from "react";

function Audio_player({ url }) {
  return (
    <div>
      <audio controls autoPlay>
        <source src={url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Audio_player;
