import { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { GetOneSurah } from "../../Api";
import Ayah from "../Components/Ayah";
import PlaySound from "../Components/PlaySound";
import GreenHeader from "../Components/GreenHeader.jsx";

export default function Surah() {
  const [loading, setLoading] = useState(true);
  const [showPlay, setShowPlay] = useState(false);
  const [data, setData] = useState({ name: "", Ayah: Array(30).fill({}) });
  const [Pause, setPause] = useState(false);
  const [playState, setPlayState] = useState({
    duration: 0,
    currentTime: 1,
    startAgain: 1,
  });
  const [InputState, setInputState] = useState({
    max: 1,
    value: 0,
  });
  const [params] = useSearchParams();
  const SurahID = params.get("id");
  const navigate = useNavigate();
  const location = useLocation(); 

  const sound = useRef(new Audio());

  useEffect(() => {
    GetOneSurah(SurahID)
      .then((res) => {
        setData({
          name: res.ArabicData.data.data[0].name,
          Ayah: res.KurdishData.data.result,
          url: res.url,
        });
        handleSound();
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [SurahID]);

  useEffect(() => {
    const audio = sound.current;
    const UpdateUI = () => {
      if (!Pause) {
        audio.pause();
      } else {
        setInputState((prev) => ({
          max: audio.duration || 0,
          value: audio.currentTime || 0,
        }));
        audio.play();
      }
      setPlayState({
        duration: formatDuration(audio.duration || 0),
        currentTime: formatDuration(audio.currentTime || 0),
        startAgain: audio.currentTime,
      });
    };

    audio.addEventListener("timeupdate", UpdateUI);

    return () => {
      audio.removeEventListener("timeupdate", UpdateUI);
    };
  }, [Pause]);

  useEffect(() => {
    return () => {
      const audio = sound.current;
      audio.pause();
      setPause(false);
    };
  }, [location]);

  function handleOnInput() {
    let audio = sound.current;
    audio.currentTime = InputState.value;
  }

  const handleSound = () => {
    let audio = sound.current;
    if (audio.src !== data.url) {
      audio.src = data.url;
      audio.currentTime = 0;
      audio.load();
    }
    audio.currentTime = playState.startAgain;
    setPause((prev) => !prev);
  };

  function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  function handleListen() {
    setPause(false);
    setShowPlay((prev) => !prev);
  }

  function handleInputState(e) {
    setInputState({ ...InputState, value: e.target.value });
  }

  return (
    <section className="relative flex flex-col gap-3 p-3 sm:p-7">
      <GreenHeader
        handleListen={handleListen}
        name={data.name}
        showPlay={showPlay}
        font="font-arabic"
      />
      <div className="flex flex-col items-center justify-center gap-3 lg:pb-[10%] sm:pb-[20%] pb-[30%]">
        {loading
          ? Array(30)
              .fill(0)
              .map((_, index) => <Ayah key={index} loading={true} />)
          : data.Ayah.map((d, index) => (
              <Ayah
                key={index}
                id={d.aya}
                kurdish={d.translation}
                loading={false}
                arabic={d.arabic_text}
              />
            ))}
      </div>
      {showPlay && (
        <PlaySound
          handleOnInput={handleOnInput}
          InputState={InputState}
          handleInputState={handleInputState}
          playState={playState}
          Pause={Pause}
          handleSound={handleSound}

        />
      )}
    </section>
  );
}
