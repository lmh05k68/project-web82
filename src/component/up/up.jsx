import './up.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
const Up = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    return <>
    <button className="up" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faChevronUp} className="upIcon"></FontAwesomeIcon>
    </button>
    </>
}
export default Up