# Hello Firebase

The tiniest proof of concept that shows how [Firebase Realtime Database](https://firebase.google.com/docs/database/) can be used to create a realtime chat.

## To start

Create a file `firebase.config.js` exporting the config settings for your firebase application (See Project Settings > Add Firebase to your web app). For example:

```
export default {
  apiKey: "<API_KEY>",
  authDomain: "<PUBLIC_FACING_NAME>.firebaseapp.com",
  databaseURL: "https://<PUBLIC_FACING_NAME>.firebaseio.com",
  projectId: "<PUBLIC_FACING_NAME>",
  storageBucket: "<PUBLIC_FACING_NAME>.appspot.com",
  messagingSenderId: "<MESSAGE_SENDER_ID>"
};
```

Set the database rules to allow public read and write access (don't forget to put it back):

```
// These rules give anyone, even people who are not users of your app,
// read and write access to your database
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

And do a `yarn` to install the dependencies and `yarn start` to start the webserver