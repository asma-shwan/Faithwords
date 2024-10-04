export default function HadithPart({contentOne , contentTwo }){
    return(
        <div className="flex flex-col w-full text-center md:text-base text-xs leading-7 text-dark-green  gap-5 h-auto p-6 items-center justify-center rounded-md bg-background_color">
        <p className="w-[100%] font-kurdish leading-9 ">{contentOne}</p>
        <p className="w-[100%] font-kurdish leading-9">{contentTwo}</p>
    </div>
    )
}