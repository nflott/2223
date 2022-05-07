import * as React from "react";
import { useWiggle } from "../hooks/wiggle";
import { animated } from "react-spring";

/**
 * The About function defines the component that makes up the About page
 * This component is attached to the /home and /gallery paths in router.jsx
 */

export default function About() {
  const [style, trigger] = useWiggle({ x: 50, rotation: 1, scale: 1.2 });
  return (
    <div className="page">
      <animated.h1 className="title" style={style} onMouseEnter={trigger}>
        ~Check this out!~
      </animated.h1>
      <p>
        Using an animated header tag and placing the onMouseEnter in the tag as
        well, I was able to make the title "wiggle" when your mouse goes over
        it.
      </p>
      <p>
        <em>
          I used{" "}
          <a href="https://reactjs.org/docs/hello-world.html">this page</a> to
          help me understand some of the key components of this language and
          syntax, as well as watching several videos{" "}
          <a href="https://www.youtube.com/watch?v=Ke90Tje7VS0">like this</a> so
          I could actually see someone implementing some of the techniques I
          read about.
        </em>
      </p>
      <p>
        This site serves as a sandbox for html development. However, this site
        is live, meaning that I will be continuously updating and improving this
        site. I encourage and and all users to keep checking back for new
        content.
      </p>
      <p>
        Any questions or queries can be sent to{" "}
        <strong>njfinbox@gmail.com</strong> (all lowercase), and I will try to
        return any messages promptly as I can.
      </p>
    </div>
  );
}
