import '../App.css';
import React, {useState} from 'react'

import {portfolioItems} from '../data/portfolioItems'

import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact'
import Modal from './Modal'

function App() {
  // PORTAL TEST USESTATE
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
    <Header />
    <About />
    <Portfolio 
    portfolioItems={portfolioItems}
    />
    
    {/* PORTAL TEST */}
    <div class="buttonwrapperstyle">
    </div>
    <div class="othercontentstyle">Other Content</div>
    {/* {PORTAL TEST END} */}

    <Contact />
    </div>
    );
}

export default App;
