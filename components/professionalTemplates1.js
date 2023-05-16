import Image from "next/image"
const ProfessionalTemplates = () => {
  return (
    <>
     <div className="container-fluid">
     <h2 class="text-center mb-5">Why is Zety the best website to build your resume online?</h2>
        <div className="row d-flex ">
          <div className="align-self-center px-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 "> 
            <h3 className="pt-4 mx-3">Professional Templates</h3>
            <p className="mt-3 text-center">Choose professional, elegant, creative, or modern resume templates. Zety's resume maker offers 18 templates. You can easily change colors and adapt the layout to any resume format you choose: functional, reverse-chronological, or combination.</p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 " >
            <Image className="w-100 he-auto"  src='/template1.png' height='326' width='544'></Image>
          </div>
        </div>
        </div>      
    </>
  )
}

export default ProfessionalTemplates
