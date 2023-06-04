import Jumbotron from "@/components/jumbotronWithImage"
import Media from "@/components/media"
import Professional from "@/components/professionalTemplates1"
import Professional2 from "@/components/professionalTemplates2"
import Professional3 from "@/components/professionalTemplates3"
import Professional4 from "@/components/professionalTemplates4"
import ChooseResume from "@/components/ChooseResume"
import Professional5 from "@/components/professionalTemplates5"
import Professional6 from "@/components/professionalTemplates6"
import Quote from "@/components/quote"
import Qoute2 from "@/components/qoute2"
import Head from "next/head"
import Navbar from "@/components/navbar"
import Benefits from "@/components/benifits"
import Jumbotron2 from "@/components/jumbotron2"
import Card from "@/components/card"
import Slider from "@/components/slider"
import Footer from "@/components/footer"
import Footer2 from "@/components/footerSocialMEdia"
import Footer3 from "@/components/footerLast"
import Navbar2 from "@/components/navbar2"


const index = () => {
  
  return (
    <>
    <Head>
      <title>Official Resume Builder</title>
    </Head>
    
    <div className="font-hanken ">
      {/* <Navbar /> */}
         <Navbar2 />
        <Jumbotron /> 
        <div className="mt-4 py-4 bottom-border">
        
        <Media />
      <div className="my-3 mx-3">
        <div className="container sliders">
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 slider1">
      <Card />

          </div>
          <div className="col-9 slider2" >
        <Slider />

          </div>
        </div>
        </div>
      </div>
        <Benefits />
       
          </div> 
          <div>
          <Quote /> 
          </div>
          <div className="my-5 py-4 bottom-border">
          
             <Professional />
             
            
          </div>
          <div className="bottom-border py-5 my-3">
            <Professional2 />
          </div>
          <div className="bottom-border py-5 my-3">
            <Professional3 />
           </div> 
          <div className=" py-5 my-3">
            <Professional4 />
          </div>
          <div>
            <ChooseResume />
            <Professional5 />
          <Professional6 />
          <Qoute2 />
          <Jumbotron2 />
          </div>
            
    </div>
    <div className="bottom-border py-3 bg-footer">

          <Footer />
          <Footer2 />
    </div>
    <div className="bottom-border font-hanken py-1 bg-footer ">
    <Footer3 />
    </div>
    </>
  )
}

export default index
