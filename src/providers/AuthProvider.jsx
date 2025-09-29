import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
export const AuthContext = createContext();
//from firebase app st
const auth = getAuth(app);

//from the Firebase app end
const AuthProvider = ({ children }) => {
    //for jwt token axiosPublic start 2
 const axiosPublic = useAxiosPublic();
  //for jwt token axiosPublic end 2 

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
      setUser(currentUser);  if(currentUser){
          //get token and store client site
          const userInfo = {email:currentUser.email};

          axiosPublic.post('/jwt', userInfo)
          .then(res =>{
            if(res.data.token){
            localStorage.setItem('access-token', res.data.token);
          }
          })
      }
      else{
        //To Do: remove token(if token stored in the client side:local storage, caching, in memory)
        localStorage.removeItem('access-token');
      }

      setLoading(false);
    });
    return () => {
      return unsubscribe();
    }
  }, [axiosPublic]);
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
