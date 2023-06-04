import HeadingForm from "@/components/headingForm"
import NavbarStepper from "@/components/navbarStepper"
import WhyResume from "@/components/whyResume"
import WorkHistoryInfo from "@/components/workHistoryInfo"
import WorkHistoryInfo2 from "@/components/workHistoryinfo2"
import WorkForm from "@/components/workForm"
import Educationinfo from "@/components/educationInfo"
import EducationForm from "@/components/educationForm"
import Skillsinfo from "@/components/skillsInfo"
import SkillsForm from "@/components/skillsForm"
import SummaryInfo from "@/components/summaryInfo"
const form = () => {
  return (
    <>
    <div className="">
    <NavbarStepper />
      <div className="py-4 font-grotesk " >
        {/* <HeadingForm /> */}
        {/* <WhyResume /> */}
      {/* <WorkHistoryInfo />
      <WorkHistoryInfo2 />
      <WorkForm />
      <Educationinfo />
      <EducationForm />/
      <Skillsinfo /> */}
      <SkillsForm />
      {/* <SummaryInfo /> */}
      </div>
    </div>
   
    </>
  )
}

export default form
