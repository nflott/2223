import * as React from "react";

/**
 * The Gallery function defines the component that makes up the Gallery page.
 * This component is attached to the /home and /about paths in router.jsx
 */

export default function Gallery() {
  return (
    <div className="page">
      <h1 className="title">Gallery</h1>
      <p>
        This page contains pieces of my art that I have actually forced myself
        to upload digitally and add to this page. Some projects are simply
        titles with a hyperlink, meaning you'll need to click the title or the
        image below it in order to view that particular piece/set of pieces off
        of this particular page of the site.
      </p>
      <ul>
        Each piece of art <em>will</em> have the following:
        <li>A title describing the piece (or not describing it at all...)</li>
        <li>A picture or other visual representation of the piece</li>
        <li>
          A short description of the medium of that particular piece, and any
          context I deem necessary
        </li>
      </ul>
      <h2>Complementary Buildings:</h2>
      <img
        src="https://i.imgur.com/NtEzCiB.jpg?2"
        title="First complementary color painting I made, 
               used as an excercise in balancing opposites to 
               make sense to the viewer's eye."
      />
      <p>
        This piece of art is an 18" x 12" heavy body acrylic painting, painted
        using synthetic brushes on an 18" x 24" piece of watercolor cold-pressed
        paper.
      </p>
      <a href="/sketches">
        <h2>Sketched Series:</h2>
      </a>
      <a href="/sketches">
        <img src="https://i.imgur.com/oawY1Fc.jpg" title="source: imgur.com" />
      </a>
      <p>
        These 5 pieces are all hand drawn using a set of 5 pencils, varying from
        softer to harder graphite, in a 9" x 12" mixed media sketchpad.
      </p>
    </div>
  );
}
