import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/image/bg.png";
// import WheelComponent from "react-wheel-of-prizes";

// import "react-wheel-of-prizes/dist/index.css";
import { Wheel } from "react-custom-roulette";

// import audio
import audioOf3 from "../assets/audio/a3.mp3";
import audioxoso from "../assets/audio/xoso.mp3";
import audiocainit from "../assets/audio/cainit.mp3";
import audiocartoon from "../assets/audio/cartoon.mp3";
import audiovit from "../assets/audio/vit.mp3";
// import Modal from "./Modal";
// import "../hooks/script";

const buttonMotion = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgba(255,255,255)",
    boxShadow: "0px 0px 8px rgba(255,255,255)",
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

export default function Game() {
  // hex color for lucky wheel game

  // [#62c050,#699ee5,#fb8e42,#e83d45]

  // using ref react
  const ref = useRef();

  // data game lucky wheel

  const [data, setData] = useState([
    {
      option: "VND 5K",
      style: {
        backgroundColor: "#62c050",
        textColor: "white",
      },
    },
    {
      option: "VND 10K",
      style: { backgroundColor: "#699ee5", textColor: "white" },
    },
    {
      option: "May mắn lần sau",
      style: { backgroundColor: "#fb8e42", textColor: "white" },
    },
    {
      option: "VND 20K",
      style: { backgroundColor: "#e83d45", textColor: "white" },
    },
    {
      option: "VND 30K",
      style: { backgroundColor: "#62c050", textColor: "white" },
    },
    {
      option: "May mắn lần sau",
      style: { backgroundColor: "#699ee5", textColor: "white" },
    },
    {
      option: "VND 50K",
      style: { backgroundColor: "#fb8e42", textColor: "white" },
    },
    {
      option: "Còn cái nịt",
      style: { backgroundColor: "#e83d45", textColor: "white" },
    },
  ]);

  // state component
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [audio, setAudio] = useState();
  const [dataArea, setDataArea] = useState([]);
  const [goblet, setGoblet] = useState();

  // const [showPrize, setShowPrize] = useState();
  // const [modalPrize, setModalPrize] = useState(true);

  // useEffect(() => {}, []);

  const randomAudio = () => {
    const arrAudio = [audioOf3, audiocainit, audiocartoon, audioxoso, audiovit];

    const random = Math.floor(Math.random() * arrAudio.length);
    return arrAudio[random];
  };

  // function update audio

  const updateAudio = (source) => {
    setAudio(source);
    if (ref.current) {
      ref.current.pause();
      ref.current.load();
    }
  };

  // handle click spin button

  const handleSpinClick = () => {
    setMustSpin(true);
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    updateAudio(randomAudio());
    const randomGoblet = Math.floor(Math.random() * 4);
    setGoblet(randomGoblet);
    ref.current.play();
    ref.current.volume = 0.5;
  };

  // handle spin stop

  const handleSpinStop = () => {
    setMustSpin(false);
    // ref.current.pause();
    alert(
      ` ${data[prizeNumber].option} + không làm uống  ${
        goblet == 0 ? 1 : goblet
      } ly`
    );
    if (data[prizeNumber].option) {
      var fakeData = data.filter((item) => {
        return item.option !== data[prizeNumber].option;
      });
      setData(fakeData);
    }
    // setModalPrize(true);
    // setMustSpin(false);
    // alert(data[prizeNumber].option);
  };

  // func back when modal prize show

  return (
    // container game page
    <>
      <div className="game">
        <img src={bgImage} className="game_img" />
        {/* game audio */}

        <audio className="game_audio" ref={ref}>
          <source src={audio} type="audio/mp3" />
        </audio>

        {/* game content */}

        <div className="game_content">
          {/* lucky wheel */}

          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={handleSpinStop}
            outerBorderColor="#4E5452"
            outerBorderWidth={3}
            innerBorderColor="#4E5452"
            innerBorderWidth={3}
            radiusLineColor="#4E5452"
          />

          {/* lucky wheel spin */}

          <motion.button
            variants={buttonMotion}
            whileHover="hover"
            className="game_content_spin"
            onClick={handleSpinClick}
          >
            Quay thưởng
          </motion.button>
        </div>

        {/* when spin stop => show prize component */}
        <textarea
          className="text-area"
          value={data[0].option}
          id="text-area"
          name="text-area"
          rows="4"
          cols="50"
        ></textarea>
      </div>
    </>
  );
}
