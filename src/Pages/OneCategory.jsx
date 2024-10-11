import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { GetOneCategoryHadith, GetHadiths } from "../../Api";
import { useEffect, useState } from "react";
import backArrow from "../assets/backArrow.svg";
import Hadiths from "../Components/Hadiths";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GreenHeader from "../Components/GreenHeader.jsx";

export default function OneCategory() {
  
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const id = params.get("id");
  const name = params.get("name");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [HadithCount, setHadithCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      GetOneCategoryHadith(id, page),
      GetHadiths()
    ])
      .then(([categoryResponse, hadithsResponse]) => {
        setData(categoryResponse.data);
        const obj = hadithsResponse.find(res => res.id === id);
        setHadithCount(obj?.hadeeths_count || 0);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [page, id]);

  function handlePaginationChange(event, value) {
    setPage(value);
    navigate(`?id=${id}&name=${name}&page=${value}`);
  }

  return (
    <section className="relative flex flex-col gap-3 p-2 md:p-6 h-lvh ">
      <GreenHeader
        name={name}
        font="font-kurdish"
      />
      <div className="flex flex-col gap-2 h-[550px] overflow-y-auto">
        {loading
          ? Array(30).fill(0).map((_, index) => (
            <Hadiths key={index} loading={true} />
          ))
          : data.map((H, index) => (
            <Hadiths
              name={name}
              loading={false}
              title={H.title}
              key={index}
              id={H.id}
            />
          ))
        }
      </div>
      <div className="w-full">
        <Stack >
          <Pagination
            size="small"
            onChange={handlePaginationChange}
            count={Math.ceil(HadithCount / 20)}
            renderItem={(item) => (
              <PaginationItem
                style={{ color: "#007044" }}
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </div>
    </section>
  );
}
