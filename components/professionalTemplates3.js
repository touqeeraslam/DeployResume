import Image from "next/image"
const ProfessionalTemplates3 = () => {
  return (
    <>
     <div className="container-fluid">
        <div className="row d-flex ">
          <div className="align-self-center px-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 "> 
            <h3 className="pt-4 mx-3">Edit Your Resume As You Like</h3>
            <p className="mt-3 text-center">Choose font types, sizes, and spacing. You can bold, italicize, and underline your text. You don't need to use MS Word resume templates: we take care of the formatting, and give you access to the best resume designs you'll ever see.</p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 " >
            <Image className="w-100 he-auto"  src='/template3.png' height='326' width='544'></Image>
          </div>
        </div>
        </div>      
    </>
  )
}

export default ProfessionalTemplates3;
