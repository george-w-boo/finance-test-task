import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { io } from "socket.io-client";
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { updateTickers } from '../../store/index';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io(`http://localhost:4000`);

    socket.emit('start');
    socket.on('ticker', response => {
      dispatch(updateTickers(response));
    });
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
