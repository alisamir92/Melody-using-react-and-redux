

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faTwitter} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return(
        <footer className="footer">
        <p className="footer-links">
            <span><a href="#">FAQ/Help</a></span>  <span><a href="#">Jobs</a></span> <span><a href="#">Terms of Use</a></span> <span><a href="#">Privacy Policy</a></span> <span><a href="#">Copyright</a></span> <span><a href="#">Closed Captioing</a></span>
        </p>
        <p className="social-media">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        </p>
        <p className="copyright">
            &copy; 2021 Melody Entertainment. All Rights Reserved. Melody Entertainment and all related titles and logos are trademarks of Lorum lpsum Dolor
        </p>
    </footer>
    )
}



export default Footer;