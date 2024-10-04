import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function HadithCategoryCard({ title, id, count, loading }) {
  return (
    <div className={`h-28 flex flex-cols relative justify-center items-center ${loading ? "bg-light-green" : "bg-white"} border-[1px] border-dark-green rounded-lg p-6`}>
      <div className="absolute flex items-center justify-center w-6 h-6 text-xs rounded-full right-2 top-2 bg-light-green text-dark-green font-kurdish">
        {!loading ? id : <Skeleton count={1} />}
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-1">
        <p className="w-full text-sm text-center md:text-base font-kurdish text-dark-green">
          {!loading ? title : <Skeleton count={2} />}
        </p>
        <p className="w-full text-xs text-center font-kurdish text-placeholder">
          {!loading ? `ژمارەی فەرموودە: ${count}` : <Skeleton count={1} />}
        </p>
      </div>
    </div>
  );
}
