# Lonely Planet Front End Code Test

Welcome to the Lonely Planet coding test for front end developers wishing to join our team.
All you need to do is fork this repository, make your changes, and then submit a pull request which we will then review.

We want to see your front-end skills and how you approach a problem with a specific set of requirements.
It has been started for you, but implementation details are up to you.

1. [Installation](#installation)
1. [Usage](#usage)
1. [Requirements](#requirements)

## Installation

```sh
git clone git@github.com:davezuko/front-end-candidate-lightbox
cd front-end-candidate-lightbox
yarn # or `npm i` if you do not have yarn
```

## Usage

### Development Server

To start the live development server, run `npm start`; the task will notify you that the server is running at http://localhost:3000.

Hot Module Replacement (HMR) is enabled, so any changes you make to the source code will be live-updated in the browser.

### Static Deployments

To compile the application to disk, run `npm run build`. Production optimizations are automatically applied.

### Mock Production Server

If you want to run a local server against the compiled application, simply run `npm run serve` after building the application. This will launch the express server (http://localhost:3000) in production mode, meaning it will disable any live development middleware.

### Testing

Unit tests have a `.spec.{ts,tsx}` suffix and are located in `~/tests/specs`. You can use `npm test` or `npm run test:watch` to run the test suite.

## Requirements

The Lightbox should support the following:

* [x] Be able to create a lightbox instance
* [x] Common ways to close the lightbox (close button and ESC key).
* [x] Fetching remote content.
* [x] Rendering the content in the page.
* [x] When the lightbox is open, the page behind it should not scroll.

### Optional
* [x] Build the component w/ React
* [x] CSS animations/transitions for opening effects.
* [x] Write in ES6 and transpile to ES5.
* [ ] Turn your lightbox into a jQuery plugin.
* [x] Use jshint/jslint to analyze your code. (used Prettier)
* [x] Automate your workflow using tools like Webpack, Grunt or Gulp.
* [x] Use Sass and a CSS autoprefixer.
* [x] Add unit tests.
