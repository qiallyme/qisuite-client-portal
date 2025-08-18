import { useEffect } from 'react';
import { auth } from '../firebase';
import {
  isSignInWithEmailLink,
  signInWithEmailLink
} from 'firebase/auth';

export default function FinishSignIn() {
  useEffect(() => {
    const finish = async () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          email = window.prompt('Please enter your email to complete sign-in');
        }

        try {
          const result = await signInWithEmailLink(auth, email, window.location.href);
          window.localStorage.removeItem('emailForSignIn');
          console.log('User signed in:', result.user);
        } catch (error) {
          console.error('Error signing in:', error);
          alert('Sign-in failed. Try again.');
        }
      }
    };

    finish();
  }, []);

  return <p>Finishing sign-in, please wait...</p>;
}
