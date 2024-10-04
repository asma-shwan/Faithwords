import { NavLink } from "react-router-dom"
export default function Result({name,id,font,to}){
    return(
        <NavLink to={to} >

        <li className={`p-2 flex ${font} ${font=="font-arabic"?"text-lg":"text-xs"} text-[10px] hover:bg-dark-green cursor-pointer group flex-row gap-x-3 justify-start items-center`}>
   <div className="bg-dark-green group-hover:bg-white text-xs group-hover:text-dark-green w-5 h-5 rounded-full flex justify-center items-center text-white">{id}</div> 
   <p className="group-hover:text-white">{name}</p>
</li>
        </NavLink>
    )
}