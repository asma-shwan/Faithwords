import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import backArrow from "../assets/backArrow.svg";
import headphone from "../assets/headphone.svg";
import { NavLink } from 'react-router-dom';
export default function GreenHeader({handleListen,name,showPlay,font}){
    return(
        <div className="sticky top-0 flex flex-row-reverse items-center justify-between w-full px-5 py-4 rounded-md md:py-6 md:px-8 bg-dark-green">
        <div className="flex flex-row items-center justify-center ">
          <p className={` text-white ${font} md:text-4xl  ${font?"text-lg":"text-2xl"}`}>
            {name || <Skeleton count={2} />}
          </p>
          <NavLink to={-1}>
            <img src={backArrow} alt="arrow" />
          </NavLink>
        </div>
       {handleListen && <button
          className={`flex flex-row gap-1 px-3 py-2 ${showPlay ?"bg-light-green" :"bg-white"} rounded-md sm:py-3 sm:px-4`}
          onClick={handleListen}
        >
          <p className="hidden font-kurdish text-dark-green sm:flex xl:text-base">
            گوێگرتن
          </p>
          <img src={headphone} alt="headphone" className="animate-pulse " />
        </button>
        }
      </div>
    )
}