import { ref, watchEffect } from 'vue';
import { projectFirestore } from '@/firebase/config';
import { doc, onSnapshot, deleteDoc } from 'firebase/firestore';

const useDocument = (collectionName, id) => {
  const document = ref(null);
  const error = ref(null);

  // Register the Firestore document reference
  const documentRef = doc(projectFirestore, collectionName, id);

  const unsubscribe = onSnapshot(documentRef, (doc) => {
    if (doc.exists()) {
      document.value = { ...doc.data(), id: doc.id };
      error.value = null;
    } else {
      error.value = "That document does not exist";
    }
  }, (err) => {
    console.error(err.message);
    error.value = 'Could not fetch the data';
  });

  const deleteDocument = async () => {
    try {
      await deleteDoc(documentRef);
      document.value = null;
      error.value = "Document successfully deleted";
    } catch (err) {
      console.error(err.message);
      error.value = "Could not delete the document";
    }
  };

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe());
  });

  return { error, document, deleteDocument };
};

export default useDocument;
