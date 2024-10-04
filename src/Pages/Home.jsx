import { Link } from "react-router-dom";
import background from "../assets/background.svg"
export default function Home(){
    return (
        <section className="flex flex-col items-center justify-center gap-14">
        <img src={background} alt="background" className="absolute bottom-0 w-full -z-10 " />
        <div className="flex flex-col items-center justify-center gap-16 mt-32 w-fit ">
            <h1 className="text-4xl 2xl:text-7xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-5xl font-arabic text-dark-green" >بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ </h1>
           <div className="flex flex-row-reverse items-center justify-center gap-4">
            <h2 className="text-2xl 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl font-arabic text-reguler-green">أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ</h2>
            <h3 className="self-end font-arabic text-dark-green">سورة الرعد</h3>
           </div>
        </div>
        
           <Link to='/Quran'>
        <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-dark-green 2xl:py-3 2xl:px-10 font-kurdish bg-reguler-green xl:py-3 xl:px-10 lg:py-2 lg:px-8 md:py-2 md:px-6">
            <p className="text-base text-white 2xl:text-xl xl:text-xl md:text-lg lg:text-lg">دەستپێکردن</p>
            <svg width="37" height="37" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M52.25 33H13.75M52.25 33L35.75 16.5M52.25 33L35.75 49.5" 
            stroke="#FFFFFF"
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
           </svg>

        </button>
           </Link>
        <div style={{direction:"rtl"}} className="absolute bottom-0 flex flex-row items-center justify-center w-full text-[10px] font-kurdish bg-light-green">
         گەشەپێدراوە لەلایەن ئەسما🌻
        </div>
        </section>
      
    )
}