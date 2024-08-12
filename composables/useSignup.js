import { ref } from 'vue';
import { projectAuth } from '~/firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    // Use the modular method for creating a user
    const res = await createUserWithEmailAndPassword(projectAuth, email, password);
    
    if (!res) {
      throw new Error('Could not complete signup');
    }

    // Use the modular method for updating the user's profile
    await updateProfile(res.user, { displayName });
    error.value = null;
    
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
