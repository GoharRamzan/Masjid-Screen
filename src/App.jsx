import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import image from './assets/islamic.webp'
import Main from './components/Main';
function App() {
  const [isLeft, setIsLeft] = useState(null);


  const portraitStyle2 = {
    width: "100vh",
    height: "100vw",
    position: "fixed",
    backgroundImage: `url(${image})`, // path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    top: "50%",
    left: "50%",
    margin: 0,
    transformOrigin: "center center",
    transform: isLeft
      ? "translate(-50%, -50%) rotate(-90deg)"
      : "translate(-50%, -50%) rotate(90deg)",
  };

  return (
    <>

      <div style={portraitStyle2}  >
   l
        {/* this is for overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(255,255,255,0.5)', // 0.1 to 0.5 for lightening
          zIndex: -1,
        }} />


        <div className='h-[20vw] w-full overflow-hidden' onClick={() => setIsLeft(!isLeft)}>
          <Header  />
        </div>
        <div className='h-[65vw] w-full overflow-hidden '>
          <Main />
        </div>
        <div className='h-[15vw] w-full overflow-hidden '>
          <Footer />
        </div>


      </div>
    </>
  );
}

export default App
