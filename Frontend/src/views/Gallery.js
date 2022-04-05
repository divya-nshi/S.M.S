import React from "react";
import Hammer from "hammerjs";

import "../static/css/Gallery.css";

export default function Gallery() {
  React.useEffect(() => {
    var tinderContainer = document.querySelector(".tinder");
    var allCards = document.querySelectorAll(".tinder--card");
    var nope = document.getElementById("nope");
    var love = document.getElementById("love");

    function initCards(card, index) {
      var newCards = document.querySelectorAll(".tinder--card:not(.removed)");

      newCards.forEach(function (card, index) {
        card.style.zIndex = allCards.length - index;
        card.style.transform =
          "scale(" + (20 - index) / 20 + ") translateY(-" + 30 * index + "px)";
        card.style.opacity = (10 - index) / 10;
      });

      tinderContainer.classList.add("loaded");
    }

    initCards();

    allCards.forEach(function (el) {
      var hammertime = new Hammer(el);

      hammertime.on("pan", function (event) {
        el.classList.add("moving");
      });

      hammertime.on("pan", function (event) {
        if (event.deltaX === 0) return;
        if (event.center.x === 0 && event.center.y === 0) return;

        tinderContainer.classList.toggle("tinder_love", event.deltaX > 0);
        tinderContainer.classList.toggle("tinder_nope", event.deltaX < 0);

        var xMulti = event.deltaX * 0.03;
        var yMulti = event.deltaY / 80;
        var rotate = xMulti * yMulti;

        event.target.style.transform =
          "translate(" +
          event.deltaX +
          "px, " +
          event.deltaY +
          "px) rotate(" +
          rotate +
          "deg)";
      });

      hammertime.on("panend", function (event) {
        el.classList.remove("moving");
        tinderContainer.classList.remove("tinder_love");
        tinderContainer.classList.remove("tinder_nope");

        var moveOutWidth = document.body.clientWidth;
        var keep =
          Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

        event.target.classList.toggle("removed", !keep);

        if (keep) {
          event.target.style.transform = "";
        } else {
          var endX = Math.max(
            Math.abs(event.velocityX) * moveOutWidth,
            moveOutWidth
          );
          var toX = event.deltaX > 0 ? endX : -endX;
          var endY = Math.abs(event.velocityY) * moveOutWidth;
          var toY = event.deltaY > 0 ? endY : -endY;
          var xMulti = event.deltaX * 0.03;
          var yMulti = event.deltaY / 80;
          var rotate = xMulti * yMulti;

          event.target.style.transform =
            "translate(" +
            toX +
            "px, " +
            (toY + event.deltaY) +
            "px) rotate(" +
            rotate +
            "deg)";
          initCards();
        }
      });
    });

    function createButtonListener(love) {
      return function (event) {
        var cards = document.querySelectorAll(".tinder--card:not(.removed)");
        var moveOutWidth = document.body.clientWidth * 1.5;

        if (!cards.length) return false;

        var card = cards[0];

        card.classList.add("removed");

        if (love) {
          card.style.transform =
            "translate(" + moveOutWidth + "px, -100px) rotate(-30deg)";
        } else {
          card.style.transform =
            "translate(-" + moveOutWidth + "px, -100px) rotate(30deg)";
        }

        initCards();

        event.preventDefault();
      };
    }

    var nopeListener = createButtonListener(false);
    var loveListener = createButtonListener(true);

    nope.addEventListener("click", nopeListener);
    love.addEventListener("click", loveListener);
  }, []);

  return (
    <div className="gallery__parent">
      <div className="tinder">
        <div className="tinder--status">
          <i className="fa fa-remove"></i>
          <i className="fa fa-heart"></i>
        </div>

        <div className="tinder--cards">
          <div className="tinder--card">
            <img src="https://placeimg.com/600/300/people" />
            <h3>Demo card 1</h3>
            <p>This is a demo for Tinder like swipe cards</p>
          </div>
          <div className="tinder--card">
            <img src="https://placeimg.com/600/300/animals" />
            <h3>Demo card 2</h3>
            <p>This is a demo for Tinder like swipe cards</p>
          </div>
          <div className="tinder--card">
            <img src="https://placeimg.com/600/300/nature" />
            <h3>Demo card 3</h3>
            <p>This is a demo for Tinder like swipe cards</p>
          </div>
          <div className="tinder--card">
            <img src="https://placeimg.com/600/300/tech" />
            <h3>Demo card 4</h3>
            <p>This is a demo for Tinder like swipe cards</p>
          </div>
          <div className="tinder--card">
            <img src="https://placeimg.com/600/300/arch" />
            <h3>Demo card 5</h3>
            <p>This is a demo for Tinder like swipe cards</p>
          </div>
          <div className="tinder--card">
            <img src="https://placeimg.com/600/300/arch" />
            <h3>Demo card 5</h3>
            <p>This is a demo for Tinder like swipe cards</p>
          </div>
          <div className="tinder--card">
            <img src="https://placeimg.com/600/300/arch" />
            <h3>Demo card 5</h3>
            <p>This is a demo for Tinder like swipe cards</p>
          </div>
          <button class="button-53" role="button" onClick={ () => {
            
          }}>Refresh</button>
        </div>

        <div className="tinder--buttons">
          <button id="nope">
            <i className="fa fa-remove"></i>
          </button>
          <button id="love">
            <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
