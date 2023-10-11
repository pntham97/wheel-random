import { useRef, useState, useEffect } from "react";

import bgImage from "../assets/image/bg.png";
import {
  DeleteOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
// import WheelComponent from "react-wheel-of-prizes";

// import "react-wheel-of-prizes/dist/index.css";
import { Wheel } from "react-custom-roulette";

// import audio
import audioOf3 from "../assets/audio/a3.mp3";
import audioxoso from "../assets/audio/xoso.mp3";
import audiocainit from "../assets/audio/cainit.mp3";
import audiocartoon from "../assets/audio/cartoon.mp3";
import audiovit from "../assets/audio/vit.mp3";

import "antd/dist/antd.css";
import Modal from "./Modal";
import Button from "./Button";
import ErrImage from "../assets/image/quyen.jpg";
import ErrImage2 from "../assets/image/Suong.jpg";
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
  const colorArray = [
    "#699ee5",
    "#fb8e42",
    "#62c050",
    "#e83d45",
    "#62c050",
    "#699ee5",
    "#fb8e42",
    "#e83d45",
  ];
  const [data, setData] = useState([
    {
      option: "Bạn được quyển chọn người uống thay turn này",
      style: {
        backgroundColor: "#62c050",
        textColor: "white",
      },
    },
    {
      option: "Kể nhanh 3 bộ phận bắt đầu bằng chữ T ai chậm nhất uống",
      style: { backgroundColor: "#699ee5", textColor: "white" },
    },
    {
      option: "Điện thoại đắt tiền nhất uống",
      style: { backgroundColor: "#fb8e42", textColor: "white" },
    },
    {
      option: "Ai lùn nhất thì uống",
      style: { backgroundColor: "#e83d45", textColor: "white" },
    },
    {
      option: "Ai sài Iphone thì uống",
      style: { backgroundColor: "#62c050", textColor: "white" },
    },
    {
      option: "Mặt người nào chưa đỏ thì uống",
      style: { backgroundColor: "#699ee5", textColor: "white" },
    },
    {
      option: "Diễn tả 1 hành động cho cả nhóm đoán , đoán sai uống",
      style: { backgroundColor: "#fb8e42", textColor: "white" },
    },
    {
      option: "Bật 1 bài nhạc để cả nhóm đoán , đoán sai là uống",
      style: { backgroundColor: "#e83d45", textColor: "white" },
    },
  ]);
  const dataFast = [
    {
      option: "Nói hai điều trung thực về những người khác trong nhóm",
    },
    {
      option: "Nhảy không nhạc trong 1 phút",
    },
    {
      option: "Hôn người bên trái của bạn",
    },
    {
      option: "Bạn đã bao giờ hôn người cùng giới chưa",
    },
    {
      option: "Kể tên người bạn nuối tiếc khi chia tay",
    },
    {
      option: "Ai là người tình đầu tiên của bạn",
    },
    {
      option: "Nhảy sexsy dance",
    },
    {
      option: "Nhắn tin cho người đầu tiên trong mess nói i love you so much",
    },
    {
      option: "Đoán xem người đối diện bạn măc sip màu gì ",
    },
    {
      option: "Tự cởi 1 món đồ trên người ",
    },
    {
      option: "Gọi điện thoại cho người yêu nói chia tay ",
    },
    {
      option:
        "Chụp hình toàn bộ người trong nhóm và đăng lên fb (không chơi chế độ chỉ mình tôi)",
    },
    {
      option: "Công khai người yêu hiện tại ",
    },
    {
      option: "Kể ra điều hối hận nhất hiện tại",
    },
    {
      option: "Bạn đã bao giờ hôn người cùng giới chưa",
    },
    {
      option: "Bạn nghĩ đâu là bộ phận hấp dẫn nhất trên cơ thể mình",
    },
    {
      option: "Bạn đã bao giờ gần chết chưa",
    },
    {
      option: "Bạn đã bao giờ gần chết chưa",
    },
    {
      option: "Ai có đôi mắt đẹp nhất trong tất cả những người có mặt?",
    },
    {
      option: "Ai có người yêu thì uống  ",
    },
    {
      option: "Chống đẩy 20 cái",
    },
    {
      option: "Búng trán người bên trái",
    },
    {
      option: "Nói tên crush hiện tại",
    },
    {
      option: "Ai đang không có người yêu thì uống",
    },
    {
      option: "Toàn bộ thành viên nhóm đều uống  ",
    },
    {
      option: "Kể tên người bạn ghét nhất hiện tại",
    },
    {
      option: "Cùng người đối diện của bạn uống",
    },
    {
      option: "Quay 1 train tiktok do người đối diện chọn",
    },
    {
      option: "Bạn ghét điều gì nhất ở bản thân",
    },
    {
      option: "Kể tên những người yêu cũ của bạn",
    },
    {
      option: "Đéo nói nhiều uống ",
    },
    {
      option: "Cầm cái ly lên uống",
    },
    {
      option: "Ai mắt hí uống",
    },
    {
      option: "Ai niềng răng uống",
    },
    {
      option: "Cao trên 1m65 uống",
    },
    {
      option: "Lùn dưới 1m65 uống",
    },
    {
      option: "Nữ thì uống ",
    },
    {
      option: "Gọi điện điện thoại về cho mẹ báo mình bị gay or less",
    },
    {
      option: "Gọi cho bạn thân cùng giới nói tao thích m",
    },
    {
      option: "Gọi cho bạn thân khác giới nói tao thích m",
    },
    {
      option: "Nhắn tin cho người yêu cũ",
    },
    {
      option: "Ng cũ ai có chồng/ vợ uống",
    },
    {
      option: "Vật tay với người bên trái ai thua uống",
    },
    {
      option: "hát 1 bài bạn thích nhất",
    },
    {
      option: "Yêu cầu người đối diện hát 1 bài tặng mình",
    },
    {
      option: "Bạn thích nhất điều gì ở người đối diện",
    },
    {
      option: "Kể ra điều không thích ở người bên cạnh",
    },
    {
      option: "Búng trán người đối diện",
    },
  ];
  // state component
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [audio, setAudio] = useState();
  // const [dataArea, setDataArea] = useState([]);
  const [goblet, setGoblet] = useState();
  const [onModalAdd, setOnModalAdd] = useState(false);
  const [onModalAddFast, setOnModalAddFast] = useState(false);
  const [onModalErr, setOnModalErr] = useState(false);
  const [inputContent, setInputContent] = useState();
  let arrContent = [];
  const formErrImage = [ErrImage, ErrImage2];

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
      ` ${data[prizeNumber].option} nếu không trả lời hoặc thực hiện uống  ${
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
  const handleDelete = (event) => {
    if (event) {
      var dataDelete = data.filter((item) => {
        return item?.option !== event;
      });
      setData(dataDelete);
    }
  };
  const handleAddContent = () => {
    const Ex = data.find(
      (item) => item.option.toLowerCase() == inputContent.toLowerCase()
    );
    if (Ex !== undefined) {
      setOnModalErr(true);
    } else {
      let content = {
        option: inputContent,
        style: {
          backgroundColor:
            colorArray[Math.floor(Math.random() * colorArray.length)],
          textColor: "white",
        },
      };
      arrContent.push(content);
    }
    var test = [...data, ...arrContent];
    setData(test);
    setInputContent("");
    setOnModalAdd(false);
  };
  const handleAddFast = (e) => {
    const Ex = data.find(
      (item) => item.option.toLowerCase() == e.toLowerCase()
    );
    if (Ex !== undefined) {
      setOnModalErr(true);
    } else {
      let content = {
        option: e,
        style: {
          backgroundColor:
            colorArray[Math.floor(Math.random() * colorArray.length)],
          textColor: "white",
        },
      };
      arrContent.push(content);
    }
    var test = [...data, ...arrContent];
    setData(test);
    console.log(e, "ssss");
  };
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

          <Button
            variants={buttonMotion}
            whileHover="hover"
            className="game_content_spin"
            onClick={handleSpinClick}
          >
            Quay thưởng
          </Button>
        </div>

        {/* when spin stop => show prize component */}

        <div className="form-value">
          {data &&
            data.map((item, index) => (
              <div key={index} className="value-content">
                {item?.option}{" "}
                <span
                  onClick={() => handleDelete(item?.option)}
                  className="icon-delete"
                >
                  <DeleteOutlined />
                </span>
              </div>
            ))}
        </div>
        <div className="add-button-form">
          <Button onClick={() => setOnModalAdd(true)} className="add-button">
            <PlusCircleOutlined /> Add
          </Button>
          <Button
            onClick={() => setOnModalAddFast(true)}
            className="add-button"
          >
            <PlusCircleOutlined /> Add List Demo
          </Button>
        </div>
        <Modal
          title="Thêm yêu cầu"
          open={onModalAdd}
          onOk={handleAddContent}
          onCancel={() => setOnModalAdd(false)}
        >
          <div className="form-add">
            <label htmlFor="">Nhập nội dung</label>
            <input
              onChange={(e) => setInputContent(e.target.value)}
              className="add-input"
              type="text"
              value={inputContent}
            />
          </div>
        </Modal>
        <Modal
          title="Thêm yêu cầu fast"
          open={onModalAddFast}
          // onOk={handleAddContent}
          has_button={false}
          onCancel={() => setOnModalAddFast(false)}
        >
          <div className="form-value-add">
            {dataFast &&
              dataFast.map((item, index) => (
                <div key={index} className="value-content">
                  {item?.option}{" "}
                  <span
                    onClick={() => handleAddFast(item?.option)}
                    className="icon-delete"
                  >
                    <PlusOutlined />
                  </span>
                </div>
              ))}
          </div>
        </Modal>
        <Modal
          title="Thêm trùng dữ liệu"
          open={onModalErr}
          onOk={() => setOnModalErr(false)}
          onCancel={() => setOnModalErr(false)}
          titleButton="Nhập lại đê"
        >
          <h3 className="title_err">Thì ra m chọn cái chết :v</h3>
          <img
            className="err_img"
            src={formErrImage[Math.floor(Math.random() * formErrImage.length)]}
            alt=""
          />
        </Modal>
      </div>
    </>
  );
}
