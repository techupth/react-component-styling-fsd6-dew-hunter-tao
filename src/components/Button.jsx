/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  let bgColor = null;
  if (props.color === "primary") {
    bgColor = "#074ee8";
  } else if (props.color === "secondary") {
    bgColor = "#07a4e8";
  }
  return (
    <button
      css={css`
        background-color: ${bgColor};
        color: white;
        font-size: 16px;
        width: 171.19px;
        height: 50px;
        border-radius: 4px;
      `}
    >
      {props.text}
    </button>
  );
}

export default Button;