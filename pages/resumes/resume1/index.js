import Title from "@/components/title";
import Contactinfo from "@/components/c-info";
import Skill from "@/components/skill0";
import Paragraph from "@/components/paragraph1";
import WorkHistory from "@/components/workhistory1";
import Education from "@/components/education1";
import style from './index1.module.scss'
const Index = ()=>{
    return(
        <>
        <div className=" container-fluid d-flex">

         <div className='bg w-25 vh-100' >
        <Title />
        <Contactinfo />
        <Skill />

        </div>
        <div className=" w-75 vh-100">
            <Paragraph />
            <WorkHistory />
            <Education />
            
            

        </div>
        </div>
        
        </>
    )
}
export default Index;