import axios from 'axios';

export async function GetHadiths(){
    try {
        const response = await axios.get("https://hadeethenc.com/api/v1/categories/list/?language=ku");
        return response.data; 
    } catch (err) {
        return err;  
    }
}

export async function GetOneCategoryHadith(id,page){
   
    try {
        const response = await axios.get(`https://hadeethenc.com/api/v1/hadeeths/list/?language=ku&category_id=${id}&page=${page}&per_page=20`);
        return response.data; 
    } catch (err) {
        return err;  
    }
}

export async function GetOneHadith(id){
  

try {
    const kurdish= await axios.get(`https://hadeethenc.com/api/v1/hadeeths/one/?language=ku&id=${id}`)
    const arabic= await axios.get(`https://hadeethenc.com/api/v1/hadeeths/one/?language=ar&id=${id}`)
    kurdish.data.title_ar=arabic.data.title
 return {kurdishData: kurdish.data }
   
} catch (err) {
    return err;  
}
}

export async function GetSurahs(){
    try {
        const response = await axios.get("https://api.alquran.cloud/v1/surah");
        return response.data; 
    } catch (err) {
        return err;  
    }
 }
 
export async function GetOneSurah(number){
 const ArabicRespose= await  axios.get(`https://api.alquran.cloud/v1/surah/${number}/editions/quran-uthmani,en.asad,en.pickthall`)
const KurdishRespose= await  axios.get(`https://quranenc.com/api/v1/translation/sura/kurdish_bamoki/${number}`)
let url = ``;
if (number >= 1 && number <= 9) {
  url = `https://server6.mp3quran.net/thubti/00${number}.mp3`;
}
if (number >= 10 && number <= 99) {
  url = `https://server6.mp3quran.net/thubti/0${number}.mp3`;
}
if (number >= 100 && number <= 114) {
  url = `https://server6.mp3quran.net/thubti/${number}.mp3`;
}
return {ArabicData:ArabicRespose , KurdishData:KurdishRespose , url: url}
}