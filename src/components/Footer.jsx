import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay} from 'swiper/modules';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
const Footer = ({prayerTime, isLoader}) => {
  const navigate = useNavigate();

   const handleLogout = () => {
    localStorage.clear();     
    navigate('/login');           
  };
  return (
    // <div  className='h-full w-full flex justify-between  items-center text-white font-bold text-lg md:text-xl xl:text-3xl 2xl:text-4xl'>
    //   <div className='w-[49%] h-full bg-[#4A2D1B] flex flex-col justify-center items-center space-y-5 '>
    //     <h1>Jummah</h1>
    //     <h1 className='font-serif'>جمعہ</h1>
    //     <h1>1:30</h1>
    //   </div>
    //   <div className='w-[49%] h-full bg-[#4A2D1B] flex flex-col justify-center items-center space-y-5 '>
    //     <h1>Zuhar Ends In</h1>
    //     <h1 className='font-serif'>ظہر ختم ہوتا ہے۔ </h1>
    //     <h1>3:30</h1>
    //   </div>
    // </div>




    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      onClick={handleLogout}
      className="w-full h-full text-white font-bold text-lg md:text-xl xl:text-3xl 2xl:text-4xl"
    >
      { prayerTime?.prayers?.map((item, index)=>(
        <SwiperSlide>
        <div className="w-full h-full bg-[#4A2D1B] flex flex-col justify-center items-center space-y-5">
          <h1>{item.name}</h1>
          <h1 className="font-serif">{item.urdu_title}</h1>
          <h1>{item.timing}</h1>
        </div>
      </SwiperSlide>
      ))

      }
    </Swiper>
  )
}

export default Footer