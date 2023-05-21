import Image from "next/image"
const professionalTemplates5 = () => {
  return (
    <>
         <div className="container-fluid py-5">
        <div className="row d-flex justify-content-center  ">
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 " >
            <Image className="w-100 he-auto"  src='/template5.png' height='326' width='544'></Image>
          </div>
          <div className="align-self-center col-xl-4 col-lg-5 col-md-5 col-sm-12 col-12 text-center" > 
            <h4 className="my-5">Cascade Template</h4>
            <p className="my-5 fw-bold text-center">Cascade uses a nifty bar graph for your skills and language sections and a sidebar with subtle shading differences.</p>
            <p className="my-4">You can add, remove, and rearrange the sections and further customize your resume, picking from dozens of color combinations...</p>
            <span className="line my-4"></span>
            <p className="font-16 my-4"> Template chosen by</p>
            <p className="font-21 fw-bolder my-4">1,500,000+ users</p>
            <button className="btn btn-outline-success rounded-5 my-5 mx-4 p-3 px-5 ">USE THIS RESUME TEMPLATE</button>
          </div>
       
        </div>
        </div>    
    </>
  )
}

export default professionalTemplates5
