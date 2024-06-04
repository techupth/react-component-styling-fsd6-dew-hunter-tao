/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import errorImg from "./img/error-img.png";
import warningImg from "./img/warning-img.png";
import infoImg from "./img/info-img.png";
import successImg from "./img/success-img.png";

function Alert(props) {
  let bgColor = null;
  let statusImg = null;
  if (props.status === "error") {
    bgColor = "#F9C8C8";
    statusImg = errorImg;
  } else if (props.status === "warning") {
    bgColor = "#F9D9C8";
    statusImg = warningImg;
  } else if (props.status === "info") {
    bgColor = "#F9EBC8";
    statusImg = infoImg;
  } else if (props.status === "success") {
    bgColor = "#CEF7CD";
    statusImg = successImg;
  }
  return (
    <div
      className="alert-box"
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: ${bgColor};
        color: #444444;
        font-size: 20px;
        font-weight: 700;
        width: 650px;
        height: 76px;
        border-radius: 10px;
        gap: 15px;
      `}
    >
      <div
        css={css`
          padding-left: 15px;
          padding-top: 5px;
        `}
      >
        <img src={statusImg} />
      </div>
      <div className="text">{props.text}</div>
    </div>
  );
}

export default Alert;
