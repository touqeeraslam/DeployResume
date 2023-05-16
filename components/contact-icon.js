import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'
const address = <FontAwesomeIcon icon={faLocationDot} size='lg' />
const phone = <FontAwesomeIcon icon={faPhone} size='lg' />
const email = <FontAwesomeIcon icon={faEnvelope} size='lg' />

const Contactwithicon =()=>{
    return(
        <>
        <div className="mx-5 text-color">
        <div className="icon text-light align-center mx-2">
            <span className="cinfoicon">
            {address}
            </span>
        </div >
            <p className="pl">  Pakistan, Multan New Multan </p>
            <div className="icon text-light mx-2"><span className="cinfoicon">{phone}</span></div> 
            <p className="pl">    +92-310-6584557 </p>
            <div className="icon mx-2 text-light"><span className="cinfoicon">{email}</span></div > 
             <p className="pl">  anierobin91@gmail.com </p>
        </div>
        
        </>
    )
}
export default Contactwithicon;