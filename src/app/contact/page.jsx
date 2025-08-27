import React from "react";
import FadeUp from "../components/FadeUp";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Us | Betelbee",
  description:
    "Get in touch with Betelbee. We’re here to answer your questions, provide support, and discuss opportunities.",
};

const page = () => {


  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto px-5">
      <div className="text-black flex flex-col items-center">
        <div className="pt-5 w-full grid md:grid-cols-2 gap-8">
          {/* Left Side - Company Info */}
          <FadeUp>
          <div className="text-black sm:p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              Get in Touch
            </h2>
            <p className="mb-6 text-gray-500">
              At Betelbee, we’re always open to new opportunities,
              collaborations, and conversations. Whether you’re looking for
              innovative solutions, creative insights, or just want to say hello
              we’re here for you 24/7.
            </p>

            {/* Pakistan Head Office */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-400">
                HEAD OFFICE (Pakistan)
              </h3>
              <p>13-C, Peoples Colony No 1, Faisalabad, Pakistan, 38000</p>
              <p>Phone: +92 3030768989</p>
              <p>Email: betelbee.official@gmail.com</p>
            </div>

            {/* UK Virtual Office */}
            <div>
              <h3 className="text-xl font-semibold text-yellow-400">
                REGIONAL HUB (UK)
              </h3>
              <p>31, Duddingston, Park South, Edinburgh, EH15 3NZ</p>
              <p>Phone: +44 7411272710</p>
              <p>Email: betelbee.official@gmail.com</p>
            </div>
          </div>
          </FadeUp>

          {/* Right Side - Contact Form */}
          <FadeUp>
          <ContactForm />
          </FadeUp>
        </div>
        <FadeUp>
          <div className="p-8 flex md:flex-row flex-col gap-5 bg-black justify-between rounded-md border-gray-200 items-center w-full border mt-10">
            <div className="flex flex-col text-white gap-10 justify-between">
              <div className="w-full">
                <h2 className="text-3xl pb-2 w-full text-yellow-400">
                  Got a Project in Mind? Let’s <br /> Make It Happen.
                </h2>
                <p className="text-md">
                  Partner with Betelbee to get your digital <br /> marketing
                  done right with strategy, <br /> creativity, and results.
                </p>
              </div>
              <div className="text-md flex gap-4">
                <h2>
                  <span className="font-bold text-lg">2021</span> <br /> Founded
                  in
                </h2>
                <h2>
                  <span className="font-bold text-lg">3k+</span> <br />{" "}
                  eCommerce Stores <br /> Lounched
                </h2>
                <h2>
                  <span className="font-bold text-lg">20+</span> <br /> Offered
                  services
                </h2>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex justify-center items-center">
              <img
                className=" h-[200px] rounded-lg"
                src={"/assets/contactimg.jpeg"}
                alt=""
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
};

export default page;
