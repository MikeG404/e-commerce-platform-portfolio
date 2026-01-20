import './App.scss';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase/firebase.util';

import Home from './routes/home/home.component';
import Shop from './routes/shop.component';
import Category from './routes/category/category.component';
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
  }, [dispatch]);
  
  return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='shop/:category' element={<Category />} />
        </Route>
      </Routes>
  )
}

export default App
