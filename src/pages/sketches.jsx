import * as React from "react";

/**
 * The Sketches function defines the component that makes up the Sketches subpage
 * of the gallery page. This component is attached to the /home, /about and /gallery
 * paths in router.jsx
 */

export default function Sketches() {
  return (
    <div className="page">
      <h1 className="title">Sketches</h1>
      <p>
        This page contains exclusivley sketches and other simpler drawings I've
        made over my career.
      </p>
      <h2>Ruggles Station:</h2>
      <img
        src="https://i.imgur.com/oawY1Fc.jpg"
        title="A sketch from a reference photo of the Ruggles T stop"
      />
      <h2>Night/Day in the Dorm:</h2>
      <img
        src="https://i.imgur.com/DJluLYG.jpg"
        title="A sketch from memory of my dorm's living room, 
                 half at night and half during the day"
      />
      <h2>NUIceberg:</h2>
      <img
        src="https://i.imgur.com/snYag42.jpg"
        title="A sketch of a pile of snow with 
                 centential commons, west village, shillman 
                 in the background"
      />
      <h2>Trapped(?):</h2>
      <img
        src="https://i.imgur.com/l06qinw.jpg"
        title="A sketch of my desk in my dorm room where I do much
                 of my homework"
      />
      <h2>Marino:</h2>
      <img
        src="https://i.imgur.com/pHBTA7T.jpg"
        title="A sketch of Marino health center on Northeastern's
               campus, including the Green line going by."
      />
    </div>
  );
}
