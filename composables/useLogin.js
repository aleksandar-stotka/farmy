import { ref } from 'vue';
import { projectAuth } from '~/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const error = ref(null);

const login = async (email, password) => {
  error.value = null;

  try {
    // Use the modular method for creating a user
    const res = await signInWithEmailAndPassword(projectAuth, email, password);
    
    if (!res) {
      throw new Error('Could not complete signup');
    }

    // Use the modular method for updating the user's profile
    error.value = null;
    
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;

///signInWithEmailAndPassword