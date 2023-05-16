import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faEnvelope, faLocationDot, faPhone, faPuzzlePiece} from '@fortawesome/free-solid-svg-icons'
const skill = <FontAwesomeIcon icon={faPuzzlePiece} size='2xl' />
const skillwithicon = () =>{
    return  (
        <>
     <div className='px-4 font-century'>
           <div className=" skillicon text-light"><span className="workicon mt-1">{skill}</span></div> <h4 className='heading-color font-centuary mx-5  fw-bold border-bottom'>Skills</h4>
            <ul className='color-cv font-16 ml-120'>
                <li>Store opening and closing</li>
                <li>Sales experience</li>
                <li>Store Merchandising</li>
                <li>Accurate Money Handling</li>
            </ul>
        </div>
    
    </>
        )
}
export default skillwithicon;