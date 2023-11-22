import { Container } from "./style";
import imgDesktop from "../../../../assets/images/imgDesktop.svg";
import iconList  from "../../../../assets/images/icon-list.svg"
import { SubscribeNewlestter } from "../../scripts/script";

export function ContentMain(){
    return (
        <Container>
             <div className="element-dad">
                <div>
                    <div className="informations">
                        <h1>Stay updated!</h1>
                        <span>  Join 60,000+ product managers receiving monthly <br /      >updates on:</span>

                        <ul>
                            <li>
                                <img src={iconList} alt="" />Product discovery and building what matters
                            </li>

                            <li>
                                <img src={iconList} alt="" /> Measuring to ensure updates are a success
                            </li>

                            <li>
                                <img src={iconList} alt="" />And much more!
                            </li>
                        </ul>
                        <p id="validEmailRequired">Valid Email Required</p>
                        <label htmlFor="input-email">Email adress</label>
                        <input id="input-email"
                        type="text"
                        placeholder= "email@company.com"/>

                        <button id="buttonSubscibe" onClick={SubscribeNewlestter}>Subscribe to monthly newsletter</button>
                    </div>

                </div>

                <div className="div-image">
                    <img src={imgDesktop} alt="" />
                </div>
            </div>
        </Container>
    )
}