/* eslint-disable react/no-unescaped-entities */
import "./welcomepage.css";
import img1 from "../images/tempphoto.jpg";
import catImg from "../images/catstronaut.png";
import sunImg from "../images/sun.png";
export default function welcomepage() {
  return (
    <>
      <div id="aboutme" className="welcome-container">
        <div className="intro">
          <p id="name">Hi, my name is</p>
          <h1>Yiu Ming Wong</h1>
          <p id="summary">
            But I go by <span id="name-emp">Dexter</span>. I'm a recent Software
            Engineering grad from UCR, and I'm all about creating cool,
            user-friendly tech. Join me as I explore the world of software and
            make tech both awesome and accessible!
          </p>
        </div>
        <div className="picture">
          <img src={img1} alt="" />
        </div>
        <div className="cat-container">
          <img src={catImg} alt="" />
        </div>
        <div className="sun-container">
          <img src={sunImg} alt="" />
        </div>
      </div>
    </>
  );
}
