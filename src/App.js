import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { getUser, setUser, toggleLoading } from './features/auth/authSlice';
import auth from './firebase/firebase.config';
import routes from './routes/routes';

function App() {

  const {isLoading} =  useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(getUser(user.email));
      } else{
        dispatch(toggleLoading())
      }

    })
  }, [dispatch])

  return (

    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
