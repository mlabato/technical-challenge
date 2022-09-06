# Technical task for Front-End Developer

This project was developed in order to face the challenge proposed by Ortex for their "Front-End Developer" position

## Requirements

The page should render well on mobile and desktop resolutions.
• The page should contain a login form with a login button which posts the username and password to /login
• There should be a reset password option and clicking it should show a modal with the relevant fields.
• Somewhere on the page you should show the latest price and the latest timestamp (in local time for the
user) for the EUR/USD exchange rate from a websocket feed.
o The feed can be accessed by sending “{"topic": "subscribe", "to": "EURUSD:CUR"}” to
ws://stream.tradingeconomics.com/?client=guest:guest
o ‘dt’ is the timestamp as UTC and ‘price’ is the latest price.
• The deliverable is a set of files that can be opened as a local webpage. 

## About the project
I developed the project using React.js framework for the front end development and Tailwind.css library for styling.
I also used React Router for routing and React Icons for the icons.

## About the fullfilment of the requirements.

I created a login page with a login form, both with backend and front end validations (using React Hooks as useRef and useState). 
In the case of the back end ones i wrote and commented the code because we weren't required to develop one (nor a database). 
If i had to do it, i probably had created an API with Express.js for the backend and a MongoDB or a MySQL database, depending on the client's requirements.

For the reset password option i chose to use ReactPortal to create the modal, managing the visibility with useState.

Finally, i linked the websocket and gathered the data by using useState and useEffect (the latest to avoid a lot of extra re-renders), and exposed it in the header.
For the timestamps i used JS Date methods to convert it to a readable date.

## Run the project

1) Download and unzip the documents (or go to  my github at https://github.com/mlabato and run git clone (and take a look at my other projects ))
2) run npm install
3) run npm start

## About me
https://www.linkedin.com/in/luis-martin-3b394a228/
https://github.com/mlabato

