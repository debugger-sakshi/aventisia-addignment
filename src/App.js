
import { useState } from 'react';
import './App.css';
import LeftBar from './LeftBar';
import Main from './Main';
import Modal from './Modal';
import Navbar from './Navbar';

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className='flex  relative'>
      <LeftBar />
      <section className='h-screen w-screen'>
      <Navbar />
      <Main setShowModal={setShowModal} />

      </section>
      {
        showModal && <Modal show={showModal} setShow={setShowModal} />
      }
    </div>
  );
}

export default App;
