## Project Name & Pitch

#### Restaurant Locator:

Denver has a lot of good restaurants. Sometimes there are too many to choose from, you’re new to town, or your dining companions can’t agree. This is an app that will help you choose a restaurant based on your location when you can’t make a decision.

## Project Screen Shot(s)

#### Example:   

![Screenshot of Live Site](https://github.com/apsitos/Wheel/blob/master/app/assets/Final.png)

## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/#`  

## Reflection

This was a two-week project built at the end of the third module at Turing School for Software and Design. Project goals included using technologies learned up until now and using documentation.

I originally wanted to build and application that would allow users to input their location and would return a random happy hour near their chosen location. I started this process by building my own boilerplate with `react`, `react-router`, and `Sass` from the lesson plan and installing all the necessary dependencies. I wired up `redux`, but discovered that I didn't actually need it. I chose to build my own boilerplate because I wanted more experience using Sass, and there wasn't a way to use it with `create-react-app`.

One of the main challenges of this project was dealing with the APIs I chose. I discovered that using a search string instead of latitude and longitude would count for ten API hits, drastically reducing my ability to test functionality. In attempting to implement the Google geolocation API, I ran into several problems of getting the input field to properly update state and pass the information down. I hope to be able to return to this project over break and implement this functionality. In the meantime, I decided to go with the geolocation in the browser. Learning how to send variables from the front end to the back end was a good experience and I hope it will help me as we go into module 4.
