import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { io } from "socket.io-client";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { tickersActions } from './store/index';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const newSocket = io(`http://localhost:4000`);
    newSocket.emit('start');
    newSocket.on('ticker', response => {
      dispatch(tickersActions.updateTickers(response));
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
