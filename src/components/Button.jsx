// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props) {
    if(props.type === "primary"){
        return (
            <>
            <button css={css`background-color: #074EE8;
        padding:20px 80px`}>Large
            </button>
            </>
        )
    }else if(props.type ==="secondary"){
        return(
            <>
            <button css={css`background-color: #07A4E8;
        padding:20px 80px`}>Large
            </button>
            </>
        )
    }
}

export default Button