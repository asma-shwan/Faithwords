import Result from "./Result";
import SearchingContext from "../context/SearchingContext";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import useClickOutside from "../hooks/useClickOutSide";
export default function SearchInput({ display, width }) {
  const location=useLocation()
  const data = useContext(SearchingContext);
  const [showList,setShowList]=useState(false)

  const handleInputChange = (e) => {
    const inputValue = e.target.value;  
    data[4](inputValue);              
    data[0]({ value: inputValue,location:location.pathname });     
  };
  function handleClose(){
    setShowList(false)
  }
useClickOutside(data[2],handleClose)

  return (
    <div className="flex gap-2 flex-col w-full sm:w-[40%] h-[300px] absolute sm:top-0 top-14 right-0 z-10">
      <div
        className={`flex flex-row border-[#848484] rounded gap-2  w-full border-[1px] items-center justify-end py-1 px-2 focus-within:border-reguler-green`}
      >
        <input
          value={data[3]}
          onInput={handleInputChange}  
          onClick={()=>setShowList(true)}
          className="w-full text-sm bg-transparent outline-none font-kurdish peer"
          style={{ direction: "rtl" }}
          placeholder="گەڕان بکە ...."
          aria-label="Search"
        />
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Search Icon"
          className="peer-focus:stroke-reguler-green stroke-placeholder"
        >
          <path
            d="M28 28L22.2094 22.2094M22.2094 22.2094C23.1999 21.2188 23.9856 20.0429 24.5217 18.7488C25.0577 17.4546 25.3336 16.0675 25.3336 14.6667C25.3336 13.2659 25.0577 11.8788 24.5217 10.5846C23.9856 9.29046 23.1999 8.11455 22.2094 7.12403C21.2188 6.13351 20.0429 5.34779 18.7488 4.81173C17.4546 4.27566 16.0675 3.99976 14.6667 3.99976C13.2659 3.99976 11.8788 4.27566 10.5846 4.81173C9.29046 5.34779 8.11455 6.13351 7.12403 7.12403C5.12359 9.12447 3.99976 11.8376 3.99976 14.6667C3.99976 17.4957 5.12359 20.2089 7.12403 22.2094C9.12447 24.2098 11.8376 25.3336 14.6667 25.3336C17.4957 25.3336 20.2089 24.2098 22.2094 22.2094Z"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {
        showList &&
        <ul
        ref={data[2]}
        style={{ direction: "rtl" }}
        className="h-auto   text-dark-green rounded bg-white border border-reguler-green w-full overflow-y-scroll"
      >
       {
        data[1].map((d,index)=>{
         return <Result 
         to={d.name ? `/Quran/Surah/?id=${d.number}` : `/Hadiths/Category?id=${d.id}&name=${d.title}&page=1`}
         key={index}
          name={d.name || d.title}
        font={d.name ? "font-arabic":"font-kurdish"}
          id={d.number || d.id}
          />
        })
       }
      </ul>
      }
      
    </div>
  );
}
