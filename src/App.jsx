import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/common/reset.css'
import './styles/App.module.css';

const App = () => (
    <div className="wrapper">
      <Header />
      <Main/>
      <Footer />
    </div>
);

export default App;
