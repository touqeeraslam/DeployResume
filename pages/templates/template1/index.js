import Name from '@/components/name';
import Contact from '@/components/contact';
import Paragraph from '@/components/paragraph';
import Skills from '@/components/skills';
import WorkHistory from '@/components/workhistory';
import Education from '@/components/education';
const templates = () =>{
    return(
        <>
        <div className='font-century'>
        <Name />
      <Contact />
      <Paragraph />
       <Skills />
       <WorkHistory />
      <Education />   
        </div>
   
        </>
    )
}
export default templates;                                                                                               