import './App.scss';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase/firebase.util';

import Home from './routes/home.component';
import Shop from './routes/shop.component';
import Navigation from './routes/navigation/navigation.component';

import { setCurrentUser } from './store/auth-slice/auth.slice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setCurrentUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        }));
      } else {
        dispatch(setCurrentUser(null));
      }
    })
    return unsubscribe;
  }, []);
  
  return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
        </Route>
      </Routes>
  )
}

export default App
