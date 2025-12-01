import './FasciaAzzurra.css';
import digCom from '../assets/img/buy-comics-digital-comics.png';
import dcMerch  from '../assets/img/buy-comics-merchandise.png';
import sub  from '../assets/img/buy-comics-shop-locator.png';
import comShop  from '../assets/img/buy-comics-subscriptions.png';
import dcPower  from '../assets/img/buy-dc-power-visa.svg';


function FasciaAzzurra() {
    return(

        <div className='bg-blue white flex bluSection jc-center'>
                    <ul className='flex marginBluSection between'>
                        <li className='flex f-grow-1'>
                            <a href="" className='flex center gap-10'>
                                <img src={digCom} alt="" />
                                DIGITAL COMICS
                            </a>
                        </li>
                        <li className='flex f-grow-1'>
                            <a href="" className='flex center gap-10'>
                                <img src={dcMerch} alt="" />
                                DC MERCHANDISE
                            </a>
                        </li>
                        <li className='flex f-grow-1'>
                            <a href="" className='flex center gap-10'>
                                <img src={sub} alt="" />
                                SUBSCRIPTION
                            </a>
                        </li>
                        <li className='flex f-grow-1'>
                            <a href="" className='flex center gap-10'>
                                <img src={comShop} alt="" />
                                COMIC SHOP LOCATOR
                            </a>
                        </li>
                        <li  className='flex f-grow-1'>
                            <a href="" className='flex center gap-10'>
                                <img src={dcPower} alt="" />
                                DC POWER VISA
                            </a>
                        </li>
                    </ul>
                </div>

    );
}

export default FasciaAzzurra