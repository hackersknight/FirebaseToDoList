# FirebaseToDoList
ToDo List application developed by Polymer and Firebase used as database for the application. "TODO app without persistency".

#Firebase 
Firebase is a real-time cloud data service. It is designed for building real-time, collaborative applications. Data in Firebase is standard JSON, and developers can access it using a client library or the REST API. When accessed through a client library, changes to data are synchronized in real-time to clients within milliseconds. Firebase provides a highly flexible expression-based security API that allows fine-grained control over data access by clients. 

#Polymer Components
Polymer is a library for creating Web Components, which are a set of W3C standards and upcoming browser APIs for defining your own custom HTML elements. With the help of polyfills and sugar, it can create these custom elements and bring Web Component support to browsers that don’t play nice with the standard just yet.

#Step By Step Process to Initiate-

1.Clone or download the zip of the file.

2.Open in Chrome Dev Editor or you can use any other build option as you like or find easier.

3.Update the bower.json file. This will download all the required bower components to run the app.

4.In order to make the app interacting with database we wil use Firebase as a backend. 

5.Go to http://www.firebase.com, Create an account. You can either click on “Sign up” and create a new account or click on “Login” and use your GitHub account to log in.

6.On the dashboard, create a new Firebase app.

7.Click on the URL of the newly created app to open the app’s dashboard and see the empty database.

8.Allow anonymous logins to your application. Open the dashboard of the Firebase instance you just created in the previous step, go to “Login & Auth” and activate anonymous login.

9.Goto main.js file in the folder and update the  
app.firebaseURL = 'https://<YOUR FIREBASE NAME>.firebaseio.com';
app.firebaseProvider = 'anonymous';

#This repository is open for further contributions. 
