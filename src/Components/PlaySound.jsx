import play from "../assets/play.svg";
import pause from "../assets/pause.svg";

export default function PlaySound({handleOnInput,handleInputState,InputState,playState,Pause,handleSound}){
    return (
        <div className="fixed flex flex-col items-center justify-center h-auto left-0 right-0 px-5 py-1 rounded-md bottom-5 md:py-2 md:px-8 bg-white border-dark-green border-[1px] w-full">
        <div className="w-full">
          <input
            type="range"
            name="range"
            id="range"
            onInput={handleOnInput}
            min="1"
            value={InputState.value}
            max={InputState.max}
            className="w-full h-2 border-none rounded-full outline-none appearance-none accent-dark-green bg-light-green"
            onChange={ handleInputState}
          />
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <p className="text-dark-green" id="currenttime">
            {playState.currentTime}
          </p>
          <p className="text-dark-green" id="duration">
            {playState.duration}
          </p>
        </div>
        <img
          src={Pause ? pause : play}
          onClick={handleSound}
          alt={Pause ? "Pause" : "Play"}
        />
      </div>
    )
}