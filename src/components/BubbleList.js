import React from "react";
import BubbleItem from "./BubbleItem";
import "./BubbleList.css";
import { BsBook, BsThreeDots, BsPerson, BsQuestion } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { AiOutlinePhone } from "react-icons/ai";
import { IoLanguageOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

const BubbleList = (props) => {
  return (
    <div className="bubble__list">
      <BubbleItem addClass="bubble__item--1" title="Contact">
        <AiOutlinePhone
          className="bubble__item--icon"
          style={{ color: "#4CAF50" }}
        />
      </BubbleItem>
      <BubbleItem addClass="bubble__item--2" title="Skills">
        <FaReact className="bubble__item--icon" style={{ color: "#48dbfb" }} />
      </BubbleItem>
      <BubbleItem addClass="bubble__item--3" title="Other">
        <BsThreeDots
          className="bubble__item--icon"
          style={{ color: "#ff9ff3" }}
        />
      </BubbleItem>
      <BubbleItem addClass="bubble__item--4" title="Education">
        <BsBook className="bubble__item--icon" style={{ color: "#FFC107" }} />
      </BubbleItem>
      <BubbleItem addClass="bubble__item--5" title="Portfolio">
        <CgWebsite
          className="bubble__item--icon"
          style={{ color: "#a971c0" }}
        />
      </BubbleItem>
      <BubbleItem addClass="bubble__item--6" title="About Me">
        <BsPerson className="bubble__item--icon" style={{ color: "#F44336" }} />
      </BubbleItem>
      <BubbleItem addClass="bubble__item--7" title="Languages">
        <IoLanguageOutline
          className="bubble__item--icon"
          style={{ color: "#03A9F4" }}
        />
      </BubbleItem>
      <BubbleItem addClass="bubble__item--8" title="Whats Next?">
        <BsQuestion
          className="bubble__item--icon"
          style={{ color: "#f8e07f" }}
        />
      </BubbleItem>
    </div>
  );
};

export default BubbleList;
