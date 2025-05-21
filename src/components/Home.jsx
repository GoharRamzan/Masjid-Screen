import { useEffect, useState } from 'react'
import '../App.css'
import Header from './Header';
import Footer from './Footer';
import image from '../assets/islamic.webp'
import Main from './Main';
import { getRequestById } from '../utils/authApi';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
// const socket = io('http://localhost:5000');
const socket = io('https://masjid-screen-phi.vercel.app/');
function HomePage() {
  const [isLeft, setIsLeft] = useState(null);
  const [data, setData] = useState([]);
  const [duas, setDua] = useState([]);
  const [loader, setIsLoader] = useState(false);
  const navigate = useNavigate()
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
  // console.log("get duas by state ", duas)
 const getDua = async () => {
  try {
    setIsLoader(true);
    const response = await getRequestById("getDua");
    console.log(response);
    setDua(response?.data);
  } catch (error) {
    console.log("Fetching Error", error);
  } finally {
    setIsLoader(false);
  }
};

const getPrayersTime = async () => {
  try {
    setIsLoader(true);
    const response = await getRequestById("getSchedule");
    setData(response?.data[0]);
  } catch (error) {
    console.log("Fetching Error", error);
  } finally {
    setIsLoader(false);
  }
};
useEffect(() => {
  const getToken = localStorage.getItem("token");
  const UID = localStorage.getItem("UID");

  if (!getToken) {
    navigate("/login");
    return;
  }

  getPrayersTime();
  getDua();

  if (UID) {
    socket.emit("joinRoom", UID);

    const handleDuaUpdate = (updatedDua) => {
      setDua(updatedDua?.duas);
    };

    const handleScheduleUpdate = (updatedSchedule) => {
      setData(updatedSchedule);
    };

    socket.on("DuaUpdated", handleDuaUpdate);
    socket.on("prayerScheduleUpdated", handleScheduleUpdate);

    return () => {
      socket.off("DuaUpdated", handleDuaUpdate);
      socket.off("prayerScheduleUpdated", handleScheduleUpdate);
    };
  }
}, []);

  return (
    <>

      <div style={portraitStyle2}  >
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
          <Main duaData={duas}/>
        </div>
        <div className='h-[15vw] w-full overflow-hidden '>
          <Footer  prayerTime={data} isLoader={loader}/>
        </div>


      </div>
    </>
  );
}

export default HomePage
