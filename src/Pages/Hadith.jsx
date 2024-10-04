import { NavLink, useSearchParams } from "react-router-dom"
import { GetOneHadith } from "../../Api"
import { useEffect, useState } from "react"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import HadithPart from "../Components/HadithPart";

export default function Hadith() {
    const [params] = useSearchParams()
    const id = params.get("Hadith_id")
    const name = params.get("Categoryname")
    const [hadith, setHadith] = useState({ title: "" })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        GetOneHadith(id)
            .then((data) => {
                setHadith(data.kurdishData)
                setLoading(false)
                console.log(loading)

            })
            .catch((err) => console.log(err))
    }, [id])

    return (
        <section style={{ direction: "rtl" }} className="flex flex-col items-center gap-4 justify-center p-[3%]">
            <div className="self-start text-[10px] sm:text-sm flex flex-row gap-3 font-kurdish text-reguler-green"><NavLink to={-1} className="hover:text-dark-green">{name}</NavLink> &gt; <p >{!loading && hadith.title.substring(0, 20).concat("...")}</p>      </div>
            <HadithPart
                contentOne={!loading ? hadith.hadeeth : <Skeleton />}
                contentTwo={!loading ? hadith.hadeeth_ar : <Skeleton />}
            />
            <HadithPart
                contentOne={!loading ? hadith.hadeeth : <Skeleton />}
                contentTwo={!loading ? hadith.hadeeth_ar : <Skeleton />}
            />

            <HadithPart
                contentOne={!loading ? hadith.explanation : <Skeleton />}
                contentTwo={!loading ? hadith.explanation_ar : <Skeleton />}
            />
            <HadithPart
                contentOne={!loading ? `${hadith.attribution}(${hadith.attribution_ar})` : <Skeleton />}
                contentTwo={!loading && hadith.grade}
            />
        </section>
    )
}