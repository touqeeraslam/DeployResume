import Image from "next/image"
const professionalTemplates4 = () => {
  return (
    <>
         <div className="container-fluid">
        <div className="row d-flex  ">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 " >
            <Image className="w-100 he-auto"  src='/template4.png' height='326' width='544'></Image>
          </div>
          <div className="align-self-center col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 px-3" > 
            <h3 className="pt-4 mx-3">Cover Letter and Resume Builder</h3>
            <p className="mt-3 text-center">Create your professional cover letter in just a few simple steps. Use the same template for your cover letter and resume. Convince hiring managers to set up an interview with you.</p>
          </div>
       
        </div>
        </div>    
    </>
  )
}

export default professionalTemplates4
