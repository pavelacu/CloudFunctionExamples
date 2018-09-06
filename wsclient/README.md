## Example: consume a webservice SOAP from cloud Function
Consume a webservice SOAP from cloud Function, this example consume a Exchange from BANGUAT (banco de Guatemala)
**Remember, cloud functions free version, only can consume resources within google cloud. The Out resources required pay.**


## Setting up the sample

 1. Create a Firebase Project using the [Firebase Console](https://console.firebase.google.com).
 2. Enable the **Google** Provider in the **Auth** section, enable Anonymous.
 3. Clone or download this repo directory.
 4. You must have the Firebase CLI installed. If you don't have it install it with `npm install -g firebase-tools` and then configure it with `firebase login`.
 5. Configure the CLI locally by using `firebase use --add` and select your project in the list.
 6. Install dependencies locally by running: `cd functions; npm install; cd -`


## Deploy and test

This sample comes with a web-based UI for testing the function.
To test locally do:

 1. Start serving your project locally using `firebase serve --only hosting,functions`
 2. Open the app in a browser at `http://localhost:5000`.
 3. .


To deploy and test on prod do:

 1. Deploy your project using `firebase deploy`
 2. Open the app using `firebase open hosting:site`, this will open a browser.
 3. Sign in the web app in the browser using Google Sign-In and two authenticated requests will be performed from the client and the result will be displayed on the page, normally "Hello <user displayname>".


## Contributing

We'd love that you contribute to the project. Before doing so please read our [Contributor guide](../CONTRIBUTING.md).


## License

© Google, 2018. Licensed under an [Apache-2](../LICENSE) license.
