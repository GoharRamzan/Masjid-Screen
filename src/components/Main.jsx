import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Main = ({ duaData }) => {
    const filterBottomDua = Array.isArray(duaData)
        ? duaData.filter((dua) => dua.type === "bottomDua")
        : [];

    const filterTopDua = Array.isArray(duaData)
        ? duaData.filter((dua) => dua.type === "topDua")
        : [];

    const topDuaContent = filterTopDua.map((dua) => dua.content || "");
    const bottomDuaContent = filterBottomDua.map((dua) => dua.content || "");

    return (
        <div className='h-full w-full px-5 xl:px-8 py-3 flex flex-col justify-between items-center'>
            <div className='w-full h-[18%] text-lg xl:text-2xl 2xl:text-4xl bg-[#4A2D1B] text-white rounded-xl md:py-3 xl:py-7 flex flex-col justify-center items-center'>
                <h1 className='font-bold'>Azkar After Obligatory Prayers</h1>
                <h1 className='mt-3 font-bold font-serif'>فرض نماز کے بعد اذکار</h1>
            </div>

            <div className='w-full h-[80%] flex justify-center items-center'>
                <table className='h-full w-full'>
                    <tbody>
                        <tr className='text-2xl xl:text-4xl 2xl:text-5xl w-full'>
                            <td className='text-center'>3 Times</td>
                            <td className='text-center font-serif'>أَسْتَغْفِرُ ٱللَّٰهَ</td>
                            <td className='text-center font-serif'>۳ مرتبہ</td>
                        </tr>

                        {topDuaContent.length > 0 && (
                            <tr className="text-2xl md:leading-10 xl:text-5xl xl:leading-16 2xl:text-6xl w-full">
                                <td colSpan={3} className="text-center font-serif font-bold">
                                    <span dir="rtl">
                                        <Typewriter
                                            words={topDuaContent}
                                            loop
                                            cursor
                                            cursorStyle="|"
                                            typeSpeed={60}
                                            deleteSpeed={35}
                                            delaySpeed={10000}
                                        />
                                    </span>
                                </td>
                            </tr>
                        )}

                        <tr className='text-2xl xl:text-4xl 2xl:text-5xl w-full'>
                            <td className='text-center'>33 Times</td>
                            <td className='text-center font-serif'>سُبْحَانَ ٱللَّٰهِ</td>
                            <td className='text-center font-serif'>۳۳ مرتبہ</td>
                        </tr>

                        <tr className='text-2xl xl:text-4xl 2xl:text-5xl w-full'>
                            <td className='text-center'>33 Times</td>
                            <td className='text-center font-serif'>ٱلْحَمْدُ لِلَّٰهِ</td>
                            <td className='text-center font-serif'>۳۳ مرتبہ</td>
                        </tr>

                        <tr className='text-2xl xl:text-4xl 2xl:text-5xl w-full'>
                            <td className='text-center'>34 Times</td>
                            <td className='text-center font-serif'>الله أكبر</td>
                            <td className='text-center font-serif'>۳۴ مرتبہ</td>
                        </tr>

                        {bottomDuaContent.length > 0 && (
                            <tr className="text-2xl md:leading-10 xl:text-5xl xl:leading-16 2xl:text-6xl w-full">
                                <td colSpan={3} className="text-center font-serif font-bold">
                                    <span dir="rtl">
                                        <Typewriter
                                            words={bottomDuaContent}
                                            loop
                                            cursor
                                            cursorStyle="|"
                                            typeSpeed={60}
                                            deleteSpeed={35}
                                            delaySpeed={10000}
                                        />
                                    </span>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Main;
