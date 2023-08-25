import "../App.css"


const Feature = ({value:{image, title, year,  dashboard,details}}) => {
  
  return (
    <div>
            <div className="flex gap-[5rem] max-sm:flex-col max-sm:gap-[2rem] mt-[1rem] p-[1rem]">
              <div className="featureImage">
                <img src={image} alt="" className="w-72 rounded-md max-sm:w-[12rem]"/>
              </div>
              <div className="featureDescription">
                <p className="text-[32px] font-bold mb-[1rem]">{title}</p>
                <p className="mb-[1rem] text-[1.4rem]">
                  <span className="bg-[#0f172a] text-white py-[0.2rem] px-[0.5rem] rounded-[50px] ">{year}</span>
                  <span className="text-[#d7e1ee] ml-[1rem] ">{dashboard}</span>
                </p>
                <p className="text-[1.3rem]">
                 {details}
                </p>
              </div>
            </div>

            <div className="w-[100%] h-[0.1rem] bg-[#cbd5e1]"></div>

          </div>
  )
}

export default Feature
