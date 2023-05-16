import Image from "next/image"
const professionalTemplates5 = () => {
  return (
    <>
         <div className="container-fluid cv-bg2 py-5">
        <div className="row d-flex  ">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 " >
            <Image className="w-100 he-auto"  src='/template6.png' height='326' width='544'></Image>
          </div>
          <div className="align-self-center col-xl-6 col-lg-5 col-md-5 col-sm-12 col-12 text-center" > 
            <h4 className="my-5">Primo Template</h4>
            <p className="my-5 fw-bold text-center">This template has a modern, upbeat look in the style of an infographic timeline.</p>
            <p className="my-4">You can add, remove, or rearrange its sections and icons to your liking. Primo uses a side column to help you save space and tiny icons to draw recruiters' attention</p>
            <span className="line my-4"></span>
            <p className="font-16 my-4"> Template chosen by</p>
            <p className="font-21 fw-bolder my-4">400,000+ users</p>
            <button className="button  my-5 mx-4 p-3 px-5 ">USE THIS RESUME TEMPLATE</button>
          </div>
       
        </div>
        </div>    
    </>
  )
}

export default professionalTemplates5
