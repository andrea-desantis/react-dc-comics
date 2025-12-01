import './SignUp.css';
import Fb from '../assets/img/footer-facebook.png';
import Tw from '../assets/img/footer-twitter.png';
import Yt from '../assets/img/footer-youtube.png';
import Pnt from '../assets/img/footer-pinterest.png';
import Prs from '../assets/img/footer-periscope.png';
function SignUp() {
    return (

        <div className='bg-gray p-sign-up'>
            <div className='flex between marginX center'>
                <div className='btn-signUp'>
                    <a href="">SIGN-UP NOW!</a>
                </div>
                <div className='flex center gap-10'>
                    <div>
                        <a href="" className='blue'>FOLLOW US</a>
                    </div>
                    <ul className='flex gap-10'>
                        <li><a href="">
                            <img src={Fb} alt="" />
                        </a></li>
                        <li><a href="">
                            <img src={Tw} alt="" />
                        </a></li>
                        <li><a href="">
                            <img src={Yt} alt="" />
                        </a></li>
                        <li><a href="">
                            <img src={Pnt} alt="" />
                        </a></li>
                        <li><a href="">
                            <img src={Prs} alt="" />
                        </a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default SignUp;