import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Youtube.css";
import Fetch_Load from "../Loading/Fetch_Load"

export default function Youtube() {
  const navigate = useNavigate();
  const API_KEY = "AIzaSyDF8P_OFm8fNIP0D08xz4fMMlw198TLfQA";

  const [mode, setMode] = React.useState(true);
  const [yvideo, setVideo] = React.useState("");
  const [page, setPage] = React.useState(1);
  const yVideoR = React.useRef();
  const [load, setLoad] = React.useState(false);
  const [loadedVid, setLoadedVid] = React.useState({
    link: "",
    title: "",
    desc: "",
  });
  const [results, setResults] = React.useState([
    {
      id: {
        videoId: "",
      },
      snippet: {
        title: "",
        description: "",
      },
    },
  ]);

  const handleChange = (e) => {
    setVideo(e.target.value);
  };

  React.useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        console.log("Searching for Videos.....");
        submitQuery();
        yVideoR.current.value = "";
        setLoad(true);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [yvideo]);

  React.useEffect(() => {
    setLoadedVid({
      link: results[0].id.videoId,
      title: results[0].snippet.title,
      desc: results[0].snippet.description,
    });
    setLoad(false);
    setMode(!mode);
  }, [results]);

  const submitQuery = () => {
    console.log(yvideo);
    const ENDPOINT =
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=" +
      yvideo +
      "&key=" +
      API_KEY +
      "&maxResults=40&type=video";
    axios.get(ENDPOINT).then((data) => {
      console.log(data);
      setResults(data.data.items);
    });
  };

  return (
    <div>
      {!mode && (
        <div className="Youtube__parent">
          <div className="books__cntr">
            <div className="books__cntr-innr">
              <label className="books__search" htmlFor="inpt_search">
                <input
                  id="inpt_search"
                  type="text"
                  ref={yVideoR}
                  placeholder="Search book"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>
      )}
      {load && (
        <div className="Youtube__parent">
          <Fetch_Load color="#07051a" />
        </div>
      )}
      {mode && (
        <div>
          <div className="Youtube__Table__Parent">
            <div
              className="yt__back"
              onClick={() => {
                navigate("/utils/youtube");
                setMode(!mode);
              }}
            >
              Back to search
            </div>
            <iframe
              width="960"
              height="515"
              src={`https://www.youtube.com/embed/${loadedVid.link}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="youtube__title">{loadedVid.title}</p>
            <p className="youtube__desc">{loadedVid.desc}</p>
          </div>
          <div
            className="yt__mouse_scroll"
            id="yt__arrow_up"
            onClick={() => {
              console.log(page);

              if (page > 0) setPage(page - 1);
              else if (page == 0) setPage(results.length);
            }}
          >
            <div className="yt__mouse"></div>
            <div>
              <span className="yt__m_scroll_arrows yt__unu"></span>
              <span className="yt__m_scroll_arrows yt__doi"></span>
              <span className="yt__m_scroll_arrows yt__trei"></span>
            </div>
          </div>
          <div className="youtube__side">
            {results.slice(page - 1, page).map((ele, index) => {
              console.log(ele);
              return (
                <Videotile
                  key={index}
                  date={ele.snippet.publishedAt}
                  title={ele.snippet.title}
                  desc={ele.snippet.description}
                  channel={ele.snippet.channelTitle}
                  thumbnail={
                    ele.snippet.thumbnails
                      ? ele.snippet.thumbnails.high.url
                      : "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  }
                  link={ele}
                  setNewVideo={setLoadedVid}
                />
              );
            })}
          </div>
          <div
            className="yt__mouse_scroll"
            id="yt__arrow_down"
            onClick={() => {
              console.log(page);
              if (page < results.length) setPage(page + 1);
              else if (page == results.length) setPage(1);
            }}
          >
            <div className="yt__mouse"></div>
            <div>
              <span className="yt__m_scroll_arrows yt__unu"></span>
              <span className="yt__m_scroll_arrows yt__doi"></span>
              <span className="yt__m_scroll_arrows yt__trei"></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const Videotile = (props) => {
  return (
    <>
      <div className="yt__tile__card">
        <div className="yt__row">
          <div className="yt__example-2 yt__card">
            <div className="yt__wrapper">
              <div className="yt__header">
                <div className="yt__date">
                  <span className="yt__day">{props.date}</span>
                </div>
                <div
                  className="yt__thumbnails"
                  style={{
                    backgroundImage: `url(${props.thumbnail})`,
                    width: "280px",
                  }}
                ></div>
              </div>
              <div className="yt__data">
                <div className="yt__content">
                  <span className="yt__author">{props.channel}</span>
                  <h1 className="yt__title">
                    <a href="#">{props.title}</a>
                  </h1>
                  <p className="yt__text">{props.desc}</p>
                  <a
                    href="#"
                    className="yt__button"
                    style={{ color: "royalblue" }}
                    onClick={() => {
                      console.log(props.link);
                      props.setNewVideo({
                        link: props.link.id.videoId,
                        title: props.link.snippet.title,
                        desc: props.link.snippet.description,
                      });
                    }}
                  >
                    play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
