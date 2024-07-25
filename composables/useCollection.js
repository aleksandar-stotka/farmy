import { ref } from 'vue';
import { projectFirestore, serverTimestamp } from '~/firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const useCollection = (collectionName) => {
  const error = ref(null);

  // Add a new document
  const addDocument = async (doc) => {
    error.value = null;

    try {
      const colRef = collection(projectFirestore, collectionName);
      await addDoc(colRef, {
        ...doc,
        createdAt: serverTimestamp()  // Add server timestamp
      });
    } catch (err) {
      console.log(err.message);
      error.value = 'could not send the message';
    }
  };

  return { error, addDocument };
};

export default useCollection;
