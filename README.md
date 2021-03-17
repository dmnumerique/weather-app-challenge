# Weather APP

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the project

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### Approach

The application uses a public API to fetch the weather based on original location (Manually set to Melbourne,au).
App uses React hooks to set the location and fetched weather data in `location` and `weather` states.
Utility functions help with fetching data from the API.
Once data is successfully fetched, necessary data is passed down to components to display the information.
`styled-component` is used to style each component and no third-party framework such as MUI or Bootstrap is used for styling.

### Searching for a new location

To search for a new location you must use a combination of city name and country code. For example to search weather in London, you must use London as city name and UK as country code.

### Improvements to be made

- Add validation to search bar to avoid user from entering wrong values.
- Enhance the search with suggestive search using google API.
- Add loaders when new data is between fetched.
- Additional test cases.
- Detecting user location based on their IP or current location using `Geolocation API` instead of manually setting the original location(initial work for this is set up in `getLocation.js`).
- Use state management such as React context to pass the state more easily across the app.
- To change the unit from metric to imperial a new API call is made to fetch new data. This is important as values such as wind speed change units from Km/h to Mph however depending on the number of items change in the app, utility functions can be created to avoid flooding the API.
