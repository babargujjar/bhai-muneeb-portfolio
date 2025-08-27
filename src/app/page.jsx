import React from 'react'
import CompleteHomePage from './components/CompleteHomePage'


export const metadata = {
  title: "Home | Betelbee",
  description:
    "Welcome to Betelbee – delivering top-quality products, private label solutions, and expert services to grow your business.",
  openGraph: {
    title: "Home | Betelbee",
    description:
      "Top-quality products, private label solutions, and services designed for your success.",
    url: "https://betelbee.com",
    siteName: "Betelbee",
    locale: "en_US",
    type: "website",
  },
};
const page = () => {
  return (
    <div><CompleteHomePage /></div>
  )
}

export default page