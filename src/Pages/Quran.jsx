import SurahCard from "../Components/SurahCard";
import { GetSurahs } from "../../Api";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function Quran() {
  const [Surahs, setSurashs] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetSurahs()
      .then((res) => {
        setSurashs(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <section className="flex flex-row flex-wrap items-center justify-center w-full h-dvh gap-4 p-[1%] mt-6 rounded-lg bg-background_color overflow-y-scroll ">
      {loading ? 
          Array(30).fill(0).map((_, index) => (
          <SurahCard key={index} loading={true} />
        )):
      Surahs.map((d, index) => {
        return (
          <NavLink key={index} to={`Surah/?id=${d.number}`} >
          <SurahCard
            name={d.name}
            number={d.number} 
            location={d.revelationType}
            loading={false}
            Ayah={d.numberOfAyahs}
          />
        </NavLink>
        );
      })}
    </section>
  );
}
