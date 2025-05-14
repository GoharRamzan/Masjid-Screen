import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
const Main = ({duaData}) => {
    // console.log("get dua",duaData)
    const filterBottomDua = duaData?.filter((dua)=>dua.type=="bottomDua")
    const filterTopDua = duaData?.filter((dua)=>dua.type=="topDua")
    const topDuaContent = filterTopDua.map((dua)=>dua.content)
    const bottomDuaContent = filterBottomDua.map((dua)=>dua.content)
    // console.log(topDuaContent)
    return (
        <div className='h-full w-full px-5 xl:px-8 py-3 flex flex-col justify-between items-center'>
            <div className='w-full h-[18%] text-lg xl:text-2xl 2xl:text-4xl   bg-[#4A2D1B] text-white rounded-xl  md:py-3 xl:py-7 flex flex-col justify-center items-center  '>
                <h1 className=' font-bold'>Azkar After Obligatory Prayers</h1>
                <h1 className=' mt-3 font-bold font-serif '>فرض نماز کے بعد اذکار</h1>
            </div>
            <div className='w-full h-[80%]  flex justify-center items-center '>
                <table className='h-full w-full  '>
                    <tbody className='w-full '>
                        <tr className='text-2xl  xl:text-4xl 2xl:text-5xl w-full'>
                            <td className='text-center'>3 Times</td>
                            <td className='text-center font-serif '>أَسْتَغْفِرُ ٱللَّٰهَ</td>
                            <td className='text-center font-serif'>  ۳ مرتبہ</td>
                        </tr>
                        {/* <tr className='text-2xl  md:leading-10 xl:text-5xl xl:leading-16 2xl:text-6xl w-full '>
                            <td className='text-center col-span-3 row-span-3 font-serif font-bold ' colSpan={3}> اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ</td>
 
                        </tr> */}

                        <tr className="text-2xl md:leading-10 xl:text-5xl xl:leading-16 2xl:text-6xl w-full">
                            <td
                                className="text-center col-span-3 row-span-3 font-serif font-bold"
                                colSpan={3}
                            >
                                <span dir="rtl">
                                    <Typewriter
                                        words={topDuaContent}
                                        loop={true}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={60}
                                        deleteSpeed={35}
                                        delaySpeed={10000}
                                    />
                                </span>
                            </td>
                        </tr>
                        <tr className='text-2xl  xl:text-4xl 2xl:text-5xl w-full'>
                            <td className='text-center'>33 Times</td>
                            <td className='text-center font-serif'>أَسْتَغْفِرُ ٱللَّٰهَ</td>
                            <td className='text-center font-serif'>  ۳۳ مرتبہ</td>
                        </tr>
                        <tr className='text-2xl  xl:text-4xl 2xl:text-5xl w-full'>
                            <td className='text-center '>33 Times</td>
                            <td className='text-center font-serif'>أَسْتَغْفِرُ ٱللَّٰهَ</td>
                            <td className='text-center font-serif'>  ۳۳ مرتبہ</td>
                        </tr>
                        <tr className='text-2xl   xl:text-4xl 2xl:text-5xl w-full'>
                            <td className='text-center'>33 Times</td>
                            <td className='text-center font-serif'>أَسْتَغْفِرُ ٱللَّٰهَ</td>
                            <td className='text-center font-serif'>  ۳۳ مرتبہ</td>
                        </tr>
                        {/* <tr className='text-2xl  md:leading-10 xl:text-5xl xl:leading-16 2xl:text-6xl w-full '>
                            <td className='text-center col-span-3 row-span-3 font-serif font-bold' colSpan={3}> لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَىْءٍ قَدِيرٌ
                            </td>

                        </tr> */}
                        <tr className="text-2xl md:leading-10 xl:text-5xl xl:leading-16 2xl:text-6xl w-full">
                            <td
                                className="text-center col-span-3 row-span-3 font-serif font-bold"
                                colSpan={3}
                            >
                                <span dir="rtl">
                                    <Typewriter
                                        words={bottomDuaContent}
                                        loop={true}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={60}
                                        deleteSpeed={35}
                                        delaySpeed={10000}
                                    />
                                </span>
                            </td>
                        </tr>
                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default Main