import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';


const app = firebase.initializeApp({
	   	apiKey: "AIzaSyBBq0_v-NzdKRMrftyD7XoeJJMEzdO80VE",
  		authDomain: "the-chartistt.firebaseapp.com",
  		projectId: "the-chartistt",
  		storageBucket: "the-chartistt.appspot.com",
  		messagingSenderId: "522766607190",
  		appId: "1:522766607190:web:2742b8b55ab132eeedecf7",
  		measurementId: "G-YYWG2KRL92"
});

export default app;
