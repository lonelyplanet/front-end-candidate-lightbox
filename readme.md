# Tena Percy - Lightbox

This is a React application which allows a user to search for images and view them in a lightbox. 
When the user enters a search term and clicks 'Open Lightbox' the ShutterStock API is called to get the first 10 images for that search.
Once the images are loaded, the user can navigate forwards and backwards through them using either the navigation buttons or their keyboard.


## Lightbox Properties
- closeOnClick (boolean): If true the lightbox will close when the user clicks outside of it
- enableKeyboardInput (boolean): If true the user can use their keyboard to navigate the images
- imageIndex (number): The current image to display
- images (array): A list of objects representing the images. Each image has a 'src' and 'caption' key
- isOpen (boolean): Determines whether to show the lightbox or not
- onClickNext (function): Handler for navigating to the next image
- onClickPrev (function): Handler for navigating to the previous image
- onClose (function): Handler for closing the lightbox
- preloadNextImage (boolean): If true, the next image will be loaded in advance
- showCaption (boolean): Determines whether or not to display the caption bar for the images

## Example
```
import Lightbox from './components/Lightbox';

const images = [{src: 'image1.jpg', caption: 'Image 1'}, {src: 'image2.jpg', caption: 'Image2'}];

<Lightbox
   isOpen={true}
   onClose={closeHandler}
   images={images}
   onClickNext={nextHandler}
   onClickPrev={prevhandler}
   imageIndex=0
   showCaption={true}
/>
 ```


## Commands

To run the application you will need to clone the repo. Below are some useful commands:

Install the application and the dependencies
```
 npm install
```

Run the application in dev mode
```
 npm run dev
```

Run the linter
```
npm run lint 
```

Run the unit tests
```
npm run test 
```

## Future Improvements
- Implement Redux (maybe redux-form as well) for better state/action handling
- Add more search fields for users (how many photos to fetch, different media types, etc...)
- Create mix-ins and variables for the css modules/clean up the styles for the example page
- Create better form components (button, input, loaders)
- Add production build config and dist bundler
- See if there are any better image APIs or open data sets
- Publish Lightbox/Components to npm registry for others to use
- Add localization/internationalization capabilities
