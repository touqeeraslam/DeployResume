import Name from "@/components/name";
import Paragraph from "@/components/paragraph";
import Contact2 from "@/components/contact2";
import Work from "@/components/WorkwithOneborder";
import Skill from "@/components/skillOneborderNOmargin";
import Education from "@/components/educationwithOneborder";
const template5 = () => {
  return (
    <>
    <div className="container font-century">
    <Name />
      <Paragraph />
      <div className="d-flex">
        <div>
          <Contact2 />
           <Skill />
        </div>
        <div>
            <Work />
            <Education />
        </div>
      </div>
    </div>
    
    </>
  );
};
export default template5;
