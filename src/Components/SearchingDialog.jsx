import SearchInput from "./SearchInput"
export default function SearchingDialog({openDialog , handleOpenDialog}){
    return(
        <dialog
        open={true}
        className={` gap-4  fixed top-0 bg-background_color border-[1px] p-3 border-dark-green  h-[60%] w-[87%]  flex flex-col rounded justify-start items-center animate__animated  ${openDialog ? "animate__fadeIn" :"animate__fadeOut" }`}
    >
        <svg
        
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 72 72"
            className="self-end cursor-pointer fill-dark-green hover:fill-reguler-green"
            onClick={handleOpenDialog}
            autoFocus
            
            aria-label="Close Dialog"
        >
            <path d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z"></path>
        </svg>
       <SearchInput 
       
       />
    </dialog>  
    )
}