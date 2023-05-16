import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faEnvelope, faGraduationCap, faLocationDot, faPhone, faPuzzlePiece} from '@fortawesome/free-solid-svg-icons'
const education = <FontAwesomeIcon icon={faGraduationCap} size='2xl' />
const educationwithicon = () =>{
    return(
        <>
         <div className='font-century px-4 '>
            <div className="skillicon text-light">
                <span className="workicon">{education}</span>
            </div>
        <h3 className=' mx-5 fw-bold border-bottom heading-color'>Education</h3>
        <div className='ml-120 color-cv'>
        <span className='font-16  fw-bolder'>

        <span>Diploma :</span> <span>Accounting Technology</span></span>
        <p className='font-16 '>International Institute of Technology and Management</p>
        
        </div>
       </div>
        </>
    )
}
export default educationwithicon;