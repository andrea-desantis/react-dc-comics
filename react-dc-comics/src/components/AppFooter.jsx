import digCom from '../assets/img/buy-comics-digital-comics.png';
import dcMerch  from '../assets/img/buy-comics-merchandise.png';
import sub  from '../assets/img/buy-comics-shop-locator.png';
import comShop  from '../assets/img/buy-comics-subscriptions.png';
import dcPower  from '../assets/img/buy-dc-power-visa.svg';

import './AppFooter.css';

function AppFooter() {
    return (
        <footer>
            <div>

                {/* lista blu */}
                <div className='bg-blue white flex '>
                    <ul>
                        <li className=''>
                            <a href="">
                                <img src={digCom} alt="" />
                                DIGITAL COMICS
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={dcMerch} alt="" />
                                DC MERCHANDISE
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={sub} alt="" />
                                SUBSCRIPTION
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={comShop} alt="" />
                                COMIC SHOP LOCATOR
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={dcPower} alt="" />
                                DC POWER VISA
                            </a>
                        </li>
                    </ul>
                </div>
                {/* fine lista blu */}



                {/* link */}
                <div>
                    <div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
                {/* fine link */}



                {/* sign-up & social */}
                <div>
                    <a href=""></a>
                </div>
                <div>
                    <div></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                {/* fine sign-up & social */}
            </div>


        </footer>
    );
}

export default AppFooter;