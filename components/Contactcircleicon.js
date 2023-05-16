import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'
const address = <FontAwesomeIcon icon={faLocationDot} size='lg' />
const phone = <FontAwesomeIcon icon={faPhone} size='lg' />
const email = <FontAwesomeIcon icon={faEnvelope} size='lg' />

const Contactcircle =()=>{
    return(
        <>
        <div className="mx-5 text-color">
        <div className="iconcircle  text-light align-center mx-2">
            <span className="cinfoicon">
            {address}
            </span>
        </div >
            <span className="pl">  Pakistan, Multan New Multan </span>
            <div className="iconcircle text-light mx-2"><span className="cinfoicon">{phone}</span></div> 
            <span className="pl">    +92-310-6584557 </span>
            <div className="iconcircle mx-2 text-light"><span className="cinfoicon">{email}</span></div > 
             <span className="pl">  anierobin91@gmail.com </span>
        </div>
        
        </>
    )
}
export default Contactcircle;