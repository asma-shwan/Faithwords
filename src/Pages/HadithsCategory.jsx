import { useEffect, useState } from "react";
import { GetHadiths } from "../../Api";
import HadithCategoryCard from "../Components/HadithCategoryCard";
import { NavLink } from "react-router-dom";

export default function HadithsCategory() {
  const [Hadiths, setHadiths] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetHadiths()
      .then(res => {
        setHadiths(res);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="grid lg:grid-cols-[32%_32%_32%] sm:grid-cols-[48%_48%] grid-cols-1 w-full h-dvh gap-[1%] p-[1%] mt-6 rounded-lg bg-background_color overflow-y-scroll">
      {
        loading
          ? Array(30).fill(0).map((_, index) => (
              <HadithCategoryCard key={index} loading={true} />
            ))
          : Hadiths.map((H, index) => (
              <NavLink key={index} to={`Category?id=${H.id}&name=${H.title || "فەرموودە"}&page=1`}>
                <HadithCategoryCard
                  loading={false}
                  title={H.title || "فەرموودە"}
                  count={H.hadeeths_count}
                  id={H.id}
                />
              </NavLink>
            ))
      }
    </section>
  );
}
