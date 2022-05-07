# Hi there!

This website is a project I will be continuously expanding on in order to have a sandbox of sorts to develop and
gain proficiency in HMTL and front-end development. I hope that as my skills develop, the overall quality of the
site and it's pages will continue to progress and hopefully allow me to explore areas such as cyber security
systems for the website. I have also left an email in the site to allow any users to leave feedback on improvements
that could be made, or any questions they have about the site. I developed this site with help from Glitch.com and
React.

## Contents

← `README.md`: That’s this file, where I've left a description of the site and it's components.

← `index.html`: This is the main page template React uses to build my site. It imports `index.jsx` to intizialize the site, which in turn gets the contents of the site from `app.jsx`.

← `src/`: This folder contains all the files React uses to build my site.

### Hooks

← `src/hooks/`: [Hooks](https://reactjs.org/docs/hooks-intro.html) are a powerful way to provide interaction with the app.

← `src/hooks/prefers-reduced-motion.jsx`: For accessibility reasons, some users will indicate in their system settings that they prefer motion effects to be minimized–this allows the site to hold off on these effects in such cases.

← `src/hooks/wiggle.jsx`: The wiggle effect animates elements, as you'll see if you hover over the image (or text below it) on the homepage.

### Pages

← `src/pages/`: These files include components that specify the content of the pages of this site. Most are defined as functions and referenced in `router.jsx`. The content is built into the page outline specified in `app.jsx`.

← `src/pages/home.jsx`: The content of the Home page, defined as a component function - the landing page of the site, contains a short title and invitation to explore the site.

← `src/pages/about.jsx`: The content of the About page, also a component function - contains information about the purpose of the site, as well as an email for users to reach out to.

← `src/pages/gallery.jsx`: The content of the Gallery page, also a component function - contains pictures and other representations of artwork I have created, as well as descriptions.

← `src/pages/sketches.jsx`: The content of the Sketches page, defined as a subpage to `/gallery.jsx` - contains a series of 5 sketches.
