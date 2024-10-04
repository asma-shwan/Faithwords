import SearchInput from "../Components/SearchInput";
import {Link, useLocation} from "react-router-dom";
import SearchingContext from "../context/SearchingContext";
import { useContext } from "react";
export default function Navbar(){
    const location=useLocation()
    const data=useContext(SearchingContext)
    function handleClick(){
        data[4]("")
        data[0]({ value: "",location:location.pathname });     
    }
    return (
        <nav className="relative flex flex-row items-center justify-between w-full bg-white ">
        <ul className="flex flex-row gap-4 text-2xl sm:gap-4 sm:text-2xl 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl font-kurdish">
            <li onClick={handleClick} className={`${location.pathname.includes("Hadiths") ? "text-reguler-green" : "text-placeholder"}`}>
                <Link to="/Hadiths">فەرموودە</Link>
            </li>
            <li onClick={handleClick} className={`${location.pathname.includes("Quran") ? "text-reguler-green" : "text-placeholder"}`}>
                <Link to="/Quran">قورئان</Link>
            </li>
        </ul>
        <div className="sm:flex hidden">
    <SearchInput />
        </div>
    </nav>
    )
}