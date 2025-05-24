import React from 'react'
import MainSection from './components/MainSection'
import Slidder from './components/Slidder'
import ExplorAllSection from './components/ExplorAllSection'
import LeftTextRightImage from './components/LeftTextRightImage'
import Video from './components/Video'
import Button from './components/Button'
import Heading from './components/Heading'
import AchievementHighlights from './components/AchievementHighlights'
import LeftContentRightCard from './components/LeftContentRightCard'
import BigCard from './components/BigCard'
import ImgSection from './components/ImgSection'
import BlogCard from './components/BlogCard'
import LastSection from './components/LastSection'

const page = () => {

 const archievmentDesc = "We ensure the successful completion of projects with precision,efficiency, and a commitment"
  
 
 return (
   <div className="max-w-6xl mx-auto">
     <MainSection />
     <Slidder />
     <ExplorAllSection />
     <LeftTextRightImage
       buttonText="About Us"
       headingTitle="Expert Business Consulting"
       headingHighlight="Agency"
       paragraph="With experience across various economic cycles, our team excels at identifying the best opportunities, whether in times of growth or uncertainty. Our success over the years stems from our ability to seamlessly integrate"
       imageSrc="/assets/image1.jpeg"
       imageClassName="w-full h-full"
     />
     <div className="text-center my-20">
       <Button text="Innovative Services" />
       <Heading
         title="Always Ready for"
         highlight="Challenges"
         className="text-[48px] max-w-[45%] my-3"
       />
       <div className="flex justify-center">
         <p className="text-[18px] text-[#71717A] max-w-[45%]">
           Empowering global business growth with top-tier, innovative features
           designed to enhance efficiency, streamline processes, and drive
           measurable success
         </p>
       </div>
     </div>
     <Video />
     <LeftTextRightImage
       buttonText="Why us"
       headingTitle="Why “our” Consulting"
       headingHighlight="Agency?"
       paragraph="Discover what sets Finsa Business Agency apart—expertise, innovative solutions, and a commitment to driving your business success."
       imageSrc="/assets/image2.svg"
       imageClassName="w-[360px] h-[380px]"
     />
     <div className="flex justify-between items-center gap-20 my-10">
       {[1, 2, 3].map((v, i) => (
         <div className="" key={i}>
           <AchievementHighlights number={300} />
         </div>
       ))}
     </div>
     <LeftContentRightCard />
     <BigCard />
     <ImgSection />
     <BlogCard />
     <LastSection />
   </div>
 );
}

export default page