import Image from "next/image"
const professionalTemplates2 = () => {
  return (
    <>
         <div className="container-fluid">
        <div className="row d-flex  ">
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 " >
            <Image className="w-100 he-auto"  src='/template2.png' height='326' width='544'></Image>
          </div>
          <div className="align-self-center col-xl-4 col-lg-5 col-md-5 col-sm-12 col-12 px-3" > 
            <h3 className="pt-4 mx-3">Tips From Recruiters</h3>
            <p className="mt-3 text-center">You no longer have to worry about how to create documents for your job application. Our builder will guide you through the process, step-by-step. Every writing tip comes from Certified Career Experts experienced in helping someone like you get more job offers.</p>
          </div>
       
        </div>
        </div>    
    </>
  )
}

export default professionalTemplates2
