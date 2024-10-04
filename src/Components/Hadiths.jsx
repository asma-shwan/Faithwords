import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { NavLink, useSearchParams } from 'react-router-dom';

export default function Hadiths({ title, id, loading }) {
  const [params] = useSearchParams();
  const name = params.get("name");

  return (
    <NavLink to={`Hadith/?Categoryname=${name} &Hadith_id=${id}`} className="sm:hidden flex ">
    <div className="flex flex-row-reverse w-full items-center justify-start gap-3 p-4 rounded-md md:p-6 bg-background_color ">
      <div className="flex items-center justify-center p-3 text-xs text-white rounded-full w-9 h-9 bg-reguler-green">
        {!loading ? id : <Skeleton />}
      </div>
      {!loading ? <div className="flex flex-row-reverse flex-wrap items-center justify-start w-full gap-2 text-xs text-end sm:text-base font-kurdish lg:text-lg">
      <p className='text-xs text-center md:text-base' style={{direction:"rtl"}}>{title.substring(0, 30).concat("...")}</p> 
<NavLink to={`Hadith/?Categoryname=${name} &Hadith_id=${id}`} className="text-[8px] sm:flex hidden text-center md:text-sm  text-dark-green">
          زیاتر بخوێنەوە
        </NavLink></div> : <Skeleton />
        }
    </div>
    </NavLink>
  );
}
