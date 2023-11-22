import styled from "styled-components";

export const Container = styled.div `
width: 100%;
    
height: 100vh;
display:flex;
align-items: center;
justfy-content:center;
padding: 0;
margin: 0;
box-sizing: border-box;

tbody{
    width:350px;
    height:370px;
    background-color: white;
    border-radius:25px;
    padding:10px;
    margin: 0 auto;

    >div {
        padding:20px;
        display:flex;
        gap:10px;
        flex-direction:column;

        h1{
            color: #343540;
            font-size:35px;
            letter-spacing: 1px;
        }

        p{
            font-size:13px;
            line-height: 20px;
            color: #1A1832;
        }
        span{
            font-weight:bold;
        }

        >img{
            width:35px;
            height:35px;
            margin-bottom:10px;
        }
    }
}

button {
        width:280px;
        border-radius:6px;
        border: none;
        color:white;
        font-weight:bold;
        background-color:#222743;
        padding-left:15px;
        height:45px;
        cursor:pointer;
        margin-top: 25px;
    }

button:hover{
        background-color:#222733;
    }

`;