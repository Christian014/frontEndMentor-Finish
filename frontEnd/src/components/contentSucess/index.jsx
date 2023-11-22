import { Container } from "./style"
import  IconSucess  from "../../../../assets/images/icon-success.svg";
export function Sucess(){
    return(
        <Container>
            <tbody>
                <div>
                    <img src={IconSucess} alt="" />
                    <h1>Thanks for Subscribing!</h1>
                    <p>A confirmation email has been sent to <br /> <span>ash@loremcompany.com</span> 
                    Please open it and click <br />
                    the button inside to confirm your subscription

                    </p>
                    <button>Dismiss message</button>
                </div>
            </tbody>
        </Container>
    )
}