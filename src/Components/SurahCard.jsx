import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SurahCard({name , number , Ayah , location,loading}) {
  
  return (
    <div  className="h-40 w-28 sm:w-36 rounded-md cursor-pointer flex-col bg-white  border-[1px] gap-6 border-reguler-green flex justify-start items-center p-3 hover:shadow-md">
     
         <div className="flex items-center self-end justify-center w-6 h-6 ml-0 text-xs rounded-full bg-light-green text-dark-green font-kurdish">
        {number}
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="text-lg sm:text-xl font-arabic text-dark-green">{!loading ? name  : <Skeleton />}</p>
        <p className=" text-[10px] sm:text-xs font-kurdish text-placeholder">{!loading ? `ژمارەی ئایەت : ${Ayah}` : <Skeleton />}</p>
      </div>
      <p className="self-start text-xs font-kurdish text-dark-green" >{!loading ?location === "Meccan" ? "مەککە" : "مەدینە" : <Skeleton />}</p>

    </div>
  );
}
