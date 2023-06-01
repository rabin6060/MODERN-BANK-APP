import { quotes } from "../assets"

const FeedbackCard = ({content,name,img,title}) => {
  return (
    <div className='flex flex-col flex-wrap justify-between px-10 py-12
                   rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0
                   my-5 feedback-card'>
                   
                    <img src={quotes} alt="img" className="w-[42px] h-[42px] object-contain"/>
                    <p className="font-poppins font-normal text-[18px] text-white leading-[32px] my-10">{content}</p>

                    <div className="flex justify-center items-center">
                      <img src={img} alt="img" className="w-[48px] h-[48px] object-contain
                                           rounded-full"/>
                      <div className="flex flex-col ml-4" >
                        <h2 className="text-white font-poppins font-[400px]
                                       text-[20px] leading-[32px]">{name}</h2>
                        <p className="text-white font-poppins font-[400px]
                                       text-[16pxpx] leading-[24px]">{title}</p>
                      </div>
                    </div>

    </div>
  )
}

export default FeedbackCard