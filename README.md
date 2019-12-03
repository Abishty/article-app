Create your firebase config :

<pre>
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    // will generated after you create your firebase project
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots : true });

  export default firebase;
  </pre>