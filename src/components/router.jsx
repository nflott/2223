import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Gallery from "../pages/gallery";
import Sketches from "../pages/sketches";

/**
 * The router is imported in app.jsx
 *
 * Each route is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/sketches" component={Sketches} />
  </Switch>
);
