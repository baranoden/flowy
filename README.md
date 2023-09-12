# Flowy React App with Node.js Express Backend

This is a simple web application built with React on the front end and a Node.js Express server on the back end and uses Mongodb. It demonstrates an advanced setup for a full-stack web application.

## Important Note

Don't forget to install force while you are installing front dependencies.

## Features

### 1- Authentication and Role-based Permissions. Currently there is only 2 user. Admin and casual user.

- There are Routes with react router dom protected with protected route, permission route and permission func.
- If you are an admin, you are able to see other menus with thanks to permission route, on the other hand permission func is to visualise routes(menus) in the header navigation whether you can enter that page or not (if you are admin you can see all other pages includes /admin route but user only can see /user and /general)
- And lastly, protected route makes your app locked. Only registered users can enter.
- Complexity of registeration step is coming from second registeration step. Which is user choosing their occupation if an user or admin didn't choose his or her occupation he can't surf into our app.

### 2- Multi-language Support with Redux Intl. I would normally prefer more popular package and easier package which is reacti18next. but i used Redux-intl.

- Currently you can use the switch at the header to change language of the page.
- Differently from i18next it has a dynamic structure due to Redux.
- It was not easy to integrate with redux saga, Redux intl designed to mainly usage with redux-thunk. but its also compatible with saga aswell.
- Currently there is only 2 language but its not hard to add other languages.
- It would only take 1 min to add new language and couple more minutes to translate other files within `src/intl/{locale}.json`.
- Note: react-intl-redux package 2.4 is broken. It doesnt have libs folder within it, so it is not working thats why i used depecrated version of it which is 2.3.

### 3- Complex Form Handling and Validation: 2 Step register with formik and redux saga.

- Simply we have Yup and formik and also couple of inputs.
- We are using formik's internal funcs. to get the value and holding them in an initial state.
- After form's handlesubmit function we are dispatching with redux saga our values to saga and making the request.
- last but not least, after our dispatch if the returning value from reducer is succesfull we take the user to second step.
- ( This part may easily combined into one which is two step registeration with only 1 request. But from my pov. i think this one is more complex.)
- Login part is just login, nothing big deal.
- Second step is occupation choosing dropdown. after choosing you are free to enter our app.
- If you dont enter the values, Yup is not going to let you send the values into saga, which means you will not be able to use handlesubmit. Yup is expecting some values.
- You can register as admin as well, that checkbox is not a required part for form but rest is.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (usually included with Node.js)

## Getting Started

1.  Clone the repository to your local machine using Git:

    ```
    git clone https://github.com/baranoden/flowy.git
    Navigate to the project directory:
    ```

    ```
        cd flowy-client

        npm i -f
    ```

    Unfortunately you have to force install due to some depecrated packages. (react-intl-redux...)

    After you install all neccessary node modules for client go back into main folder.

    Install dependencies for the Node.js Express server:

    ```
       cd flowy-api

       npm i
    ```

    No need to force.

# Running the Application

To run the application, you'll need to start both the React app and the Node.js Express server.

### Starting the React App

Navigate to the client directory:

       npm run start

The React app should now be running at http://localhost:3000. You can access it in your web browser.

### Starting the Node.js Express Server

Navigate to the server directory:

       npm run start

The server will be running at http://localhost:3302. Backend has node mon so it will work indefinitely.

if 3302 or 3000 occupied you can change it within index.ts in server side.

### Important Notes

I didnt use any .env files due to app's complexitity. Simply add your mongodb connect ssh to serverside index.ts.

### Accessing the Application

Once both the React app and the Node.js Express server are running, you can access the full application in your web browser at http://localhost:3000. The React app will interact with the server for any necessary data and functionality.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Contributing

Contributions are not welcome...

Cheers, Baran.
