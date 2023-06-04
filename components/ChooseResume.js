import Image from "next/image";
const ChooseResume = () => {
  return (
    <>
      <div className="bg-choose padding-5">
        <div className="text-center ">
          <h3 className="fw-bold pt-5">Write your professional resume here</h3>
          <p className="font-16 color-cv py-3 ">Download with a single click. Land that dream job.</p>
        </div>
        <div className="Image">
        <Image className="w-100 he-auto img-fluid"  alt="Template" src='/template5.jpg' height='578' width='1140'></Image>
        <button class="choosePosition button my-2 mx-4 p-3 px-5" href="#!" role="button">Choose A  Resume Template</button>
        </div>
      

        
      </div>
    </>
  )
}

export default ChooseResume;
