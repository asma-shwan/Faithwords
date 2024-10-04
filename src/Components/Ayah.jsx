import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Ayah({id , kurdish,arabic,loading}) {
    return (
          
        <div className="flex flex-col items-end justify-center w-full h-auto gap-6 p-4 rounded-md bg-light-green">
          <p className="text-xl sm:text-3xl font-arabic w-[80%]" style={{direction:"rtl"}}>{!loading ? arabic : <Skeleton count={2} />}</p>
          <div className="flex flex-row-reverse items-end justify-between w-full ">
          <p className="text-xs sm:text-base font-kurdish w-[80%]" style={{direction:"rtl"}}>{!loading?kurdish : <Skeleton count={3} />}</p>
          <div className="flex flex-row items-center self-start justify-center w-6 h-6 text-xs text-white rounded-full bg-reguler-green">{!loading ?id : <Skeleton />}</div>
          </div>
        </div>
    )
}