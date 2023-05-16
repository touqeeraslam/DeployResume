import Image from "next/image"

const media = () => {
  return (
    <>
           <div className="text-center">
        <p className="fw-bold font-21">As seen in:</p>
      </div>
      <div className="mx-5 text-center">
        <div className="row">
        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12" >
            <Image src='/theguardian.png' width='94' height='16' alt="The Guardian"></Image>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12">
            <Image src='/ihuff.png' width='141' height='16' alt="Ihuffposti"></Image>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12  ">
            <Image src='/lifehacker.png' width='66' height='16' alt="Ihuffposti"></Image>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12">
            <Image src='/business.png' width='110' height='16' alt="Ihuffposti"></Image>
        </div>
        <div className=" col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12 ">
            <Image src='/financial.png' width='183' height='15' alt="Ihuffposti"></Image>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4  col-12">
            <Image src='/forbes.png' width='63' height='16' alt="Ihuffposti"></Image>
        </div>
        </div>
      </div>
    </>
  )
}

export default media
