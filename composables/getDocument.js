// getDocument.js
import { ref, watchEffect } from 'vue';
import { projectFirestore } from '@/firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';

const getDocument = (collectionName, id) => {
  const document = ref(null);
  const error = ref(null);

  // Register the Firestore document reference
  const documentRef = doc(projectFirestore, collectionName, id);

  const unsub = onSnapshot(documentRef, (doc) => {
    if(doc.exists()) {
      document.value = { ...doc.data(), id: doc.id };
      error.value = null;
    } else {
      error.value = "That document does not exist";
    }
  }, (err) => {
    console.error(err.message);
    error.value = 'Could not fetch the data';
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, document };
};

export default getDocument;
