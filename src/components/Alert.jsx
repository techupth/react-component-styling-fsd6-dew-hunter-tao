// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import alert1 from "../../image/frown.png"
import alert2 from "../../image/alert-triangle.png"
import alert3 from "../../image/alert-circle.png"
import alert4 from "../../image/check-circle.png"
function Alert(props) {
  if (props.rank === "first") {
    return (
      <div
        css={css`
          background-color: #F9C8C8;
          padding:30px 120px;
          border-radius:10px;
          margin:20px;
          font: Kanit;
          font-weight:700;
        `}
      ><img src={alert1} alt="error" />
        This is error alert box
      </div>
    );
  }else if(props.rank ==="second"){
    return(
        <div css={css`background-color: #F9D9C8;
        padding:30px 120px;
        border-radius:10px;
        margin:20px;
        width:500px;
        font-weight:700;`}><img src={alert2} alt="warning" />This is warning alert box</div>
    )
  }else if(props.rank==="third"){
    return(
        <div css={css`background-color: #F9EBC8;
        padding:30px 120px;
        border-radius:10px;
        font-weight:700;
        margin:20px;`}><img src={alert3} alt="info" />This is info alert box</div>
    )
  }else if(props.rank==="fourth"){
    return(<div css={css`background-color: #CEF7CD;
    padding:30px 120px;
    border-radius:10px;
    font-weight:700;
    margin:20px;`}><img src={alert4} alt="success" />This is success alert box</div>

    )
  }
}

export default Alert;
