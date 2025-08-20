// import React from 'react'
// import MainSection from './components/MainSection'
// import Slidder from './components/Slidder'
// import ExplorAllSection from './components/ExplorAllSection'
// import LeftTextRightImage from './components/LeftTextRightImage'
// import Video from './components/Video'
// import Button from './components/Button'
// import Heading from './components/Heading'
// import LeftContentRightCard from './components/LeftContentRightCard'
// import BigCard from './components/BigCard'
// import ImgSection from './components/ImgSection'
// import BlogCard from './components/BlogCard'
// import LastSection from './components/LastSection'
// import FadeUp from './components/FadeUp'
// import Stats from './components/Stats'
// import LeftTextRightImageWithName from './components/LeftContentRightImageWithName'

// const page = () => {


//  const aboutKeyPoints = [
//    {
//      title: "Expert eCommerce Store Development",
//      icon: "/assets/icon.png",
//    },
//    {
//      title: "SEO & Paid Ads That Convert",
//      icon: "/assets/icon.png",
//    },
//    {
//      title: "Creative Branding & Graphic Design",
//      icon: "/assets/icon.png",
//    },
//    {
//      title: "Results-Focused Digital Strategy",
//      icon: "/assets/icon.png",
//    },
//  ];
//  const chooseusKeyPoints = [
//    {
//      title: "High-Converting eCommerce Stores",
//      icon: "/assets/icon.png",
//    },
//    {
//      title: " Result-Driven SEO & Ad Campaigns",
//      icon: "/assets/icon.png",
//    },
//    {
//      title: "Impactful Branding & Design",
//      icon: "/assets/icon.png",
//    },
//    {
//      title: "Strategic, Data-Led Growth Plans",
//      icon: "/assets/icon.png",
//    },
//  ];


 
//  return (
//    <>
//      <FadeUp>
//        <MainSection />
//      </FadeUp>
//      <div className="max-w-6xl mx-auto px-5">
//        <FadeUp>
//          <Slidder />
//        </FadeUp>
//        <FadeUp>
//          <ExplorAllSection />
//        </FadeUp>
//        <FadeUp>
//          <LeftTextRightImage
//            buttonText="About Us"
//            headingTitle="Your Trusted Global eCommerce"
//            headingHighlight="Partner"
//            paragraph="We help brands grow faster and smarter across Shopify, eBay, TikTok Shop, and more. With years of experience in digital marketing, SEO, design, and web development, our team delivers real results for businesses in the UK, USA, Europe, and Australia."
//            imageSrc="/assets/image1.jpg"
//            imageClassName="w-full h-full"
//            keyPoints={aboutKeyPoints}
//          />
//        </FadeUp>
//        <FadeUp>
//          <div className="text-center">
//            <Button text="Innovative Services" />
//            <Heading
//              title="Smart Solutions for Modern"
//              highlight="eCommerce"
//              className="text-[35px] lg:text-[48px] max-w-[65%] md:max-w-[55%] lg:max-w-[45%] my-3"
//            />
//            <div className="flex justify-center">
//              <p className="text-[16px] md:text-[18px] text-[#71717A] max-w-[65%] md:max-w-[55%] lg:max-w-[45%]">
//                We build stores, design brands, boost visibility, and drive sales
//                across Shopify, TikTok Shop, eBay, and more—powered by SEO, Ads,
//                and stunning design.
//              </p>
//            </div>
//          </div>
//        </FadeUp>
//        <FadeUp>
//          <LeftTextRightImageWithName
//            buttonText="Why Choose Us"
//            headingTitle="Where Strategy Meets"
//            headingHighlight="Execution"
//            paragraph="We’re not just another agency—we're your growth partner. From setting up high-converting stores to driving traffic and building brands, we deliver real results."
//            imageSrc="/assets/muneeb.jpg"
//            keyPoints={chooseusKeyPoints}
//          />
//        </FadeUp>
//        <FadeUp>
//          <Stats />
//        </FadeUp>
//        <FadeUp>
//          <LeftContentRightCard />
//        </FadeUp>
//        <FadeUp>
//          <BigCard />
//        </FadeUp>
//        <FadeUp>
//          <ImgSection />
//        </FadeUp>
//        <FadeUp>
//          <BlogCard />
//        </FadeUp>
//        <FadeUp>
//          <LastSection />
//        </FadeUp>
//      </div>
//    </>
//  );
// }

// export default page

import React from 'react'
import CompleteHomePage from './components/CompleteHomePage'

const page = () => {
  return (
    <div><CompleteHomePage /></div>
  )
}

export default page