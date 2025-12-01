

import './AppFooter.css';

import FasciaAzzurra from './FasciaAzzurra.jsx'
import LinkDc from './LinkDc.jsx';
function AppFooter() {
    return (
        <footer>
            <div>

                {/* lista blu */}
                <FasciaAzzurra />
                {/* fine lista blu */}



                {/* link */}
                <LinkDc />
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