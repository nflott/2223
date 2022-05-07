import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

/**
 * The Home function defines the content that makes up the main content of the Home page
 *
 * This component is attached to the /about and /gallery paths in router.jsx
 * The function in app.jsx defines the page wrapper that this appears in along with the footer
 */

export default function Home() {
  return (
    <div className="page">
      <h1 className="title">Welcome to Noah Flott's site.</h1>
      <h2>Please take your time and explore all the contents.</h2>
      <h2>
        Contact information can be found on the <Link href="/about">About</Link>{" "}
        page.
      </h2>
    </div>
  );
}
