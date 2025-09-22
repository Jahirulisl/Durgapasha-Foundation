import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext();
//from firebase app st
const auth = getAuth(app);

//from the Firebase app end
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  //FOR CREATE USER START
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //FOR CREATE USER END

  //for signin user start
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password);
  }
  //for signin user end

  //for logOut user start
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  //for logOut user end
   //for Google Sign-in step 1
  const googleProvider = new GoogleAuthProvider();

  // for Google SignIn stap -2
  const googleSignIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
  }


  
  //for updateUserprofile create context start>
   const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    });
  }
  //for updateUserprofile create context end>

  //FOR USER MANAJE START
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('current user', currentUser)
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    }
  }, [])
  //FOR USER MANAJE end

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
