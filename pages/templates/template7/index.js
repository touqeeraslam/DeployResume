import Name from "@/components/name";
import Contact from "@/components/contact";
import Paragraph from "@/components/paragraph";
import Skill from "@/components/skillwithOneBorder";
import Work from "@/components/WorkwithOneborder";
import Education from "@/components/educationwithOneborder";
import styles from './template7.module.scss'
const template4=()=>{
    return(
        <>
        <div className='font-georgia'>
            <Name />
             <Contact />    
             <Paragraph />
             <Skill />
             <Work />
             <Education />
            
        </div>
        </>
    )
}
export default template4;