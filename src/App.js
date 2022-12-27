import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { setUser } from './features/auth/authSlice';
import auth from './firebase/firebase.config';
import routes from './routes/routes';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {

      if (user) {
        dispatch(setUser(user.email));
      }

    })
  }, [])

  return (

    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
