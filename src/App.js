import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Header from './comtainer/header/Header';
import Brand from './component/brand/Brand';
import WhatGPT3 from './comtainer/whatGPT3/WhatGPT3';
import Feature from './comtainer/feature/Feature';
import Possibility from './comtainer/possibility/Possibility';
import Cta from './component/cta/Cta';
import Blog from './comtainer/blog/Blog';
import Footer from './comtainer/footer/Footer';

function App() {
  return (
    <div  className='App'>
      <div className='gradient__bg'>
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Feature></Feature>
      <Possibility></Possibility>
      <Cta></Cta>
      <Blog></Blog>
      <Footer></Footer>
       
    </div>
  );
}

export default App;
