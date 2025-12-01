

import './AppFooter.css';

import FasciaAzzurra from './FasciaAzzurra.jsx'
import LinkDc from './LinkDc.jsx';
import SignUp from './SignUp.jsx';
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
                <SignUp />
                {/* fine sign-up & social */}
            </div>


        </footer>
    );
}

export default AppFooter;