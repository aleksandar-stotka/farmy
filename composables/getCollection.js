// getCollection.js
import { ref, watchEffect } from 'vue';
import { projectFirestore } from '@/firebase/config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const getCollection = (collectionName) => {
  const documents = ref(null);
  const error = ref(null);

  // register the firestore collection reference
  const collectionRef = query(collection(projectFirestore, collectionName), orderBy('createdAt'));

  const unsub = onSnapshot(collectionRef, (snap) => {
    let results = [];
    snap.docs.forEach((doc) => {
      // must wait for the server to create the timestamp & send it back
      if (doc.data().createdAt) {
        results.push({ ...doc.data(), id: doc.id });
      }
    });

    // update values
    documents.value = results;
    error.value = null;
  }, (err) => {
    console.log(err.message);
    documents.value = null;
    error.value = 'could not fetch the data';
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, documents };
};

export default getCollection;
