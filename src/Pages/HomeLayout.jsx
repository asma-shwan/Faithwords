import { Outlet } from "react-router-dom";
import { useEffect, useState,useRef } from "react";
import 'animate.css';
import SearchingDialog from "../Components/SearchingDialog";
import Navbar from "../Components/Navbar";
import ToggleOpenDialog from "../Components/ToggleOpenDialog";
import { GetSurahs,GetHadiths } from "../../Api";
import SearchingContext from "../context/SearchingContext";

export default function HomeLayout() {
    const [openDialog, setOpenDialog] = useState(false);
    const [result, setResult] = useState([]);
    const [surah, setSurahs] = useState([]);
    const [Hadiths,setHadiths]=useState([])
    const [value,setValue]=useState("")
     const ResultRef=useRef()
function handleOpenDialog(){
    setOpenDialog(prev=>!prev)
}
    function Search(Input) {
        if(Input.location=="/Quran"){
            var arabicRegex =  /[\u0600-\u06FF]/;
            if (Input.value.length) {
                const isArabic = arabicRegex.test(Input.value);
                const filteredSurahs = surah.filter(surah => {
                    if (isArabic) {
                        const withoutDiacritics = removeDiacritics(surah.name);
                        return withoutDiacritics.includes(Input.value);
                    } else {
                        return surah.englishName.toLowerCase().includes(Input.value.toLowerCase());
                    }
                });
                setResult(filteredSurahs);  
            } else {
                setResult([]);  
            }
        }
        else{
            if (Input.value.length) {
                const filteredHadith = Hadiths.filter(Hadith => {return Hadith.title.includes(Input.value)});
                setResult(filteredHadith);  
            } else {
                setResult([]);  
            }
        }
        
    }
    
    function removeDiacritics(text) {
        var diacriticsMap = {
            '\u064B': '', // Fathatan
            '\u064C': '', // Dammatan
            '\u064D': '', // Kasratan
            '\u064E': '', // Fatha
            '\u064F': '', // Damma
            '\u0650': '', // Kasra
            '\u0651': '', // Shadda
            '\u0652': '', // Sukun
            '\u0653': '', // Maddah
            '\u0654': '', // Hamza Above
            '\u0655': '', // Hamza Below
        };

        return text.replace(/[\u064B-\u0655]/g, function(match) {
            return diacriticsMap[match];
        });
    }

    useEffect(() => {
        GetSurahs()
            .then((res) => {
                setSurahs(res.data);
            })
            .catch((err) => console.log(err));
        GetHadiths()
            .then((res) => {
                setHadiths(res);
            })
            .catch((err) => console.log(err));
    }, []); 
    return (
        <SearchingContext.Provider  value={[Search, result,ResultRef,value,setValue]}>
            <section>
                <div className={`py-6 px-4 ${openDialog ? "blur-sm" : null}`}>
                    <Navbar />
                    {!openDialog && <ToggleOpenDialog handleOpenDialog={handleOpenDialog} />}
                    <Outlet />
                </div>
                {openDialog && 
                <SearchingDialog 
                handleOpenDialog={handleOpenDialog}
                    openDialog={openDialog}
                />
                }   
            </section> 
        </SearchingContext.Provider>     
    );
}
