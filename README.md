# React Spinner Component
## John Moore

The main component is src/components/Spinner created in React

### Architectural decisions

- The spinner was created as an svg to maximise scalability, performance, platform support. This would work on mobile devices as well as on the web.

- The spinner is consumed by the Card which handles layout / configuration / Control. TThe spinner is highly parameterized via props so that things like size / color / position / inner text can be passed as props.

- The Card simulates a loading indiicator by setting an interval that increments the percentage complete. 

- A utilitty function converts percentages into degree values for drawing the paths of the spinner. This utility function would be reusable as well.

- Finally, the Card is rendered by the App. This is just the default App by create-react-app clii and is just for ease of demo

### With more time

If I had more time tot dedicate to this I would:

- break up the card into more reusable components and add labeling

- More closely match the sttyle of the WeTransfer spinner

- Write more functional tests

## External link to deployed component

(Deployed Spinner Component)[https://spinner-jet.vercel.app/]

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

