import Contact1 from "@/components/contact1"
import Education from "@/components/education1"
import Name from "@/components/name1"
import Profession from "@/components/Profession"
import Skill2 from "@/components/Skill2"
import WorkHistory from "@/components/workhistory1"
export default function Index(){
    return (
        <>
        <div className="main  d-flex">
          <div className="border-top-25 w-25">
         
                <Contact1 />
                <Education />
          </div>
            <div className="w-75 border-30">
                <Name />
                <Profession />
                <Skill2 />
                <WorkHistory />
            </div>
        </div>
        
        </>
    )
}