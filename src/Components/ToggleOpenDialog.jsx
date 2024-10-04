export default function ToggleOpenDialog({handleOpenDialog}){
    return(
        <div
                    onClick={handleOpenDialog}
                    className="fixed z-10 left-0 flex items-center justify-center w-12 h-10 mt-40 ml-0 rounded rounded-r-full cursor-pointer bg-reguler-green sm:hidden"
                    aria-label="Open Search Dialog"
                >
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M28 28L22.2094 22.2094M22.2094 22.2094C23.1999 21.2188 23.9856 20.0429 24.5217 18.7488C25.0577 17.4546 25.3336 16.0675 25.3336 14.6667C25.3336 13.2659 25.0577 11.8788 24.5217 10.5846C23.9856 9.29046 23.1999 8.11455 22.2094 7.12403C21.2188 6.13351 20.0429 5.34779 18.7488 4.81173C17.4546 4.27566 16.0675 3.99976 14.6667 3.99976C13.2659 3.99976 11.8788 4.27566 10.5846 4.81173C9.29046 5.34779 8.11455 6.13351 7.12403 7.12403C5.12359 9.12447 3.99976 11.8376 3.99976 14.6667C3.99976 17.4957 5.12359 20.2089 7.12403 22.2094C9.12447 24.2098 11.8376 25.3336 14.6667 25.3336C17.4957 25.3336 20.2089 24.2098 22.2094 22.2094Z"
                            stroke="#FFFFFF"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
    )
}