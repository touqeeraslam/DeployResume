import Title from "@/components/title";
import Contactinfo from "@/components/c-info";
import Skill from "@/components/skill";
import Paragraph from "@/components/paragraph";
import Workhistory from "@/components/work-history";
const Index = ()=>{
    return(
        <>
        <div className=" d-flex">

         <div className='bg w-25 vh-100' >
        <Title />
        <Contactinfo />
        <Skill />

        </div>
        <div className=" w-75 vh-100">
            <Paragraph />
            <Workhistory />
            

        </div>
        </div>
        
        </>
    )
}
export default Index;