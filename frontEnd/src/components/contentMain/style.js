import styled from "styled-components";

export const Container = styled.div `




    
    @media (max-width: 400px){
        background-color:white;

        > .element-dad{

            display: flex;
            flex-direction: column-reverse;
            overflow-x: overlay;
            
            > .div-image img{
                width:100%;
                margin:0;
                padding:0;
            }
    
             .div-image{
                width:100%;
            }

            >div:first-child{
                width:100%;
            }
        }

    }

    width: 100%;
    
    height: 100vh;
    display:flex;
    align-items: center;
    justify-content:center;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    

    .element-dad{
        width:800px;
    }
     div {
            
            height: 510px;
            width:420px;
            padding:2px;
            margin: 0 auto;
            display:flex;
            
            background-color: white;
            border-radius: 30px;

            > h1{
                color: #1A1832;
                font-size: 40px;
                margin-top:50px;
                margin-left: -35px;
                padding-bottom:20px;
            }

            > span{
                font-size:12px;
                margin-bottom:25px;
                margin-left: -15px;
            }

            li{
                text-align: center;
                display: flex;
                margin-left: -15px;
                padding:5px;
                font-size:12px;
                
            }

            > ul {
                text-decoration:none;
                list-style:none;
                margin-bottom:25px;

                 img{
                    width:15px;
                    margin-right: 10px;
                }
            }

            > div:first-child{
                height:500px;
                display:flex;
                flex-direction: column;
                align-items:center;

                > .informations{
                    margin:15px;

                    > label{
                        font-size:10px;
                        font-weight:bold;
                        margin-left:-200px;
                        align-self:start;
                        margin-left:65px;
                        margin-bottom:3px;
                    }

                    > p{
                        color:red;
                        font-size:10px;
                        font-weight:bold;
                        align-self:end;
                        margin-bottom: -12px;
                        margin-right: 70px;
                        visibility: hidden;
                    }

                    > input{
                        width:280px;
                        border-radius:6px;
                        border: 1px solid black;
                        padding-left:15px;
                        height:45px;
                        margin-bottom:15px;
                    }

                     .placeholderError{
                        visibility:hidden;
                        border: 1px solid red;
                    }
                     .placeholderError::placeholder{
                        color:red;

                    }

                    > button{
                        width:280px;
                        border-radius:6px;
                        border: none;
                        color:white;
                        font-weight:bold;
                        background-color:#222743;
                        padding-left:15px;
                        height:45px;
                        cursor:pointer;
                    }

                    >button:hover{
                        background-color:#222733;
                    }
                }
            }

             .div-image{
                height:500px;
                width:370px;
                display: flex;
                justify-content: center;

                > img {
                    margin-top: 10px;
                    margin-bottom: 10px;
                    margin-right: 10px;
                    margin-left: 25px;                    
                }
            }
        };





`;