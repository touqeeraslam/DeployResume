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


import Router, { useRouter } from "next/router"
import { useEffect } from "react"
const index = () => {
  const router = useRouter()
  useEffect(()=>{
    var x = localStorage.getItem('loggedIn')
    if(x=='logged'){

    }
    else{
      Router.push('/auth/login')
    }
  })
  return (
    <>
    <Head>
      <title>Official Resume Builder</title>
    </Head>
    
    <div className="font-hanken ">
         <Navbar />
        <Jumbotron /> 
        <div className="mt-4 py-4 bottom-border">
        
        <Media />
      <div className="my-3 mx-3">
        <div className="row">
          <div className="col-3">
      <Card />

          </div>
          <div className="col-9">
        <Slider />

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
