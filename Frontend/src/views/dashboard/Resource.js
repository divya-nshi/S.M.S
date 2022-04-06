import React from "react";
import { Link } from 'react-router-dom'
import "../../static/css/Resource.css";

export default function Resource(props) {
  return (
    <div className="Resource__container">
      <ResourceCard image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" head="Books" content="Search Books" readmore="GOTO" linkto="/dashboard/books" />
      <ResourceCard image="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" head="Youtube" content="Search Videos" readmore="GOTO" linkto="/dashboard/youtube"/>
    </div>
  );
}

function ResourceCard(props) {
  return (
    <div className="Resource__card">
      <div className="Resource__face Resource__face1">
        <div className="Resource__content">
          <img src={props.image} />
          <h3>{props.head}</h3>
        </div>
      </div>
      <div className="Resource__face Resource__face2">
        <div className="Resource__content">
          <p>{props.content}</p>
          <Link to={props.linkto} > {props.readmore} </Link>
        </div>
      </div>
    </div>
  );
}
