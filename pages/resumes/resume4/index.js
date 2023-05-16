import Contactcircle from "@/components/Contactcircleicon"
import Skill1 from "@/components/skill1"
import Namewithicon from "@/components/namewithicon"
import Paragraph from "@/components/paragraph1"
import WorkHistory from "@/components/workhistory1"
import Education from "@/components/education1"
export default function Index (){
    return(
        <>
        <div className="main d-flex">
        <div className="w-25">
            <Contactcircle />
            <Skill1 />    
        </div>
        <div className="w-75">
            <Namewithicon />
            <Paragraph />
            <WorkHistory />
            <Education />



        </div>
        </div>
        
        </>
    )
}