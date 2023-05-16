import Name from "@/components/name";
import Contact from "@/components/contact";
import Paragraph from "@/components/paragraph";
import Skill from "@/components/skillwithOneBorder";
import Work from "@/components/WorkwithOneborder";
import Education from "@/components/educationwithOneborder";
const template4=()=>{
    return(
        <>
        <div className="font-century">
        <div className="cv-bg  py-4">
            <Name />
             <Contact />    
        </div>
        <div>
             <Paragraph />
             <Skill />
             <Work />
             <Education />
            
        </div>
        </div>
        </>
    )
}
export default template4;