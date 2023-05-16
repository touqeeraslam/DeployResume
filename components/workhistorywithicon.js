import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faBriefcase, faEnvelope, faLocationDot, faPhone, faPuzzlePiece} from '@fortawesome/free-solid-svg-icons'
const work = <FontAwesomeIcon icon={faBriefcase} size='2xl' />
const workHistorywithicon = () =>{
    return(
        <>
        
        <div className='px-4 font-century'>
       <div className="skillicon text-light"> <span className="workicon">{work}</span></div> <h3 className=' heading-color border-bottom  fw-bold mx-5 '>Work History</h3>
     <div className='color-cv d-flex flex-row'>
       <span className=' width-130 '>May 2016 <span>-</span> <span>Current</span></span>
       <div > <h4 className=' font-16 fw-bolder'>Retails Sales Associates </h4>
       <h5 className='font-16 fw-light'>H&M, Cebu City, Phillipines</h5>
        <ul className='font-16 fw-lighter '>
            <li>Effectively upsold products by introducing accessories and other add-ons, adding ₱150,000 to average monthly sales.</li>
            <li>Generated brand awareness and positive product impressions to increase sales 22%.</li>
            <li>Used consultative sales approach to understand customer needs and recommend relevant offerings.</li>
        </ul>
       </div> 
      
      
     </div> 
     <div className='color-cv d-flex flex-row'>
       <span className=' width-130 '>January 2015 <span>-</span> <span>March 2016</span></span>
       <div > <h4 className=' font-16 fw-bolder'>Barista </h4>
       <h5 className='font-16 fw-light'>Starbucks, Cebu City</h5>
        <ul className='font-16 fw-lighter '>
            <li>Effectively upsold products by introducing accessories and other add-ons, adding ₱150,000 to average monthly sales.</li>
            <li>Generated brand awareness and positive product impressions to increase sales 22%.</li>
            <li>Used consultative sales approach to understand customer needs and recommend relevant offerings.</li>
        </ul>
       </div> 
      
      
     </div> 
       </div>
        
        </>
    )
}
export default workHistorywithicon;