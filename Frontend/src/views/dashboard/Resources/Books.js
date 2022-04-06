import React from "react";
import axios from "axios";

import "./Books.css";
import Fetch_Load from "../Loading/Fetch_Load"

export default function Books() {
  const API_KEY = "AIzaSyDF8P_OFm8fNIP0D08xz4fMMlw198TLfQA";

  const [gbook, setBook] = React.useState("");
  const gbookR = React.useRef();
  const [results, setResults] = React.useState([]);
  const [mode, setMode] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [load, setLoad] = React.useState(false);

  const handleChange = (e) => {
    setBook(e.target.value);
  };

  React.useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        console.log("Searching for Book.....");
        submitQuery();
        gbookR.current.value = "";
        setLoad(true);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [gbook]);

  React.useEffect( () => {
    setLoad(false);
    setMode(!mode);
  }, [results]);

  const submitQuery = () => {
    // console.log(gbook);
    const ENDPOINT =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      gbook +
      "&key=" +
      API_KEY +
      "&maxResults=40";
    axios.get(ENDPOINT).then((data) => {
      console.log(data);
      setResults(data.data.items);
    });
  };

  return (
    <>
      {!mode && (
        <div className="Books__parent">
          <div className="books__cntr">
            <div className="books__cntr-innr">
              <label className="books__search" htmlFor="inpt_search">
                <input
                  id="inpt_search"
                  type="text"
                  ref={gbookR}
                  placeholder="Search book"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>
      )}
      {load && (
        <div className="Books__parent">
          <Fetch_Load color="#ff9800"/>
        </div>
      )}
      {mode && (
        <div className="Books__Table__Parent">
          <div className="books__wrapper">
            <div className="books__cols">
              {results.slice(8 * (page - 1), page * 8).map((result) => (
                <Book
                  key={result.id}
                  image={
                    result.volumeInfo.imageLinks
                      ? result.volumeInfo.imageLinks.thumbnail ||
                        "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                      : "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                  }
                  title={result.volumeInfo.title}
                  subtitle={result.volumeInfo.subtitle}
                  author={result.volumeInfo.authors}
                  content={
                    result.searchInfo
                      ? result.searchInfo.textSnippet ||
                        "An awesome book on " + result.volumeInfo.title
                      : "An awesome book on " + result.volumeInfo.title
                  }
                  link={result.volumeInfo.previewLink}
                />
              ))}
            </div>
          </div>
          <div className="breadcrumbs">
            <ul>
              <li>
                <a
                  style={{ color: "gray" }}
                  onClick={() => {
                    setPage(1);
                  }}
                >
                  1
                </a>
                <div className="bread-shadow">1</div>
              </li>
              <li>
                <a
                  style={{ color: "gray" }}
                  onClick={() => {
                    setPage(2);
                  }}
                >
                  2
                </a>
                <div className="bread-shadow">2</div>
              </li>
              <li>
                <a
                  style={{ color: "gray" }}
                  onClick={() => {
                    setPage(3);
                  }}
                >
                  3
                </a>
                <div className="bread-shadow">3</div>
              </li>
              <li>
                <a
                  style={{ color: "gray" }}
                  onClick={() => {
                    setPage(4);
                  }}
                >
                  4
                </a>
                <div className="bread-shadow">4</div>
              </li>
              <li>
                <a
                  style={{ color: "gray" }}
                  onClick={() => {
                    setPage(5);
                  }}
                >
                  5
                </a>
                <div className="bread-shadow">5</div>
              </li>
            </ul>
            <p
              style={{
                width: "max-content",
                margin: "auto",
                color: "white",
                fontSize: "1rem",
                marginTop: "3em",
              }}
            >
              Showing results for : {gbook} &emsp;&emsp;
              <span
                style={{ zIndex: "100", cursor: "pointer" }}
                onClick={() => {
                  setMode(false);
                }}
              >
                Back to search
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function Book(props) {
  return (
    <>
      <div className="books__col">
        <div className="books__container">
          <div
            className="books__front"
            style={{
              backgroundImage: "url(" + props.image + ")",
              fontSize: props.title.length < 20 ? "" : "0.8em",
            }}
          >
            <div className="books__inner">
              <span>{props.author}</span>
              <hr />
              <p>{props.title}</p>
              <span>{props.subtitle}</span>
            </div>
          </div>
          <div className="books__back">
            <div className="books__inner">
              <p>{props.content}</p>
              <button className="book__pulse">
                <a href={props.link} target="_blank">
                  Read More
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
