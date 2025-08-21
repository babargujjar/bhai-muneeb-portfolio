"use client"; 
import React, { use } from "react";
import { Check, ArrowRight } from "lucide-react";
import allServicesData from "@/data/services"; 
import FadeUp from "@/app/components/FadeUp";

const ServiceDetail = ({ params }) => {
  console.log('allServicesData', allServicesData)
 const { slug } = use(params);
  const service = allServicesData.find((s) => s.slug === slug);

  if (!service || !service.detailPageData) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold text-xl">
        Service not found
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900 font-inter leading-relaxed">
      {/* Hero Section */}
      <FadeUp>
        <section className="py-16 text-center">
          <div className="container max-w-6xl mx-auto px-4">
            <span className="bg-yellow-400 text-black font-extrabold rounded-full px-3 py-1 text-sm mb-3 inline-block">
              {service.kicker}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
              {service.detailPageData.hero.title}
            </h1>
            <p className="text-gray-600 text-md md:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              {service.detailPageData.hero.description}
            </p>
            <a
              href="#contact"
              className="btn bg-yellow-400 text-black font-extrabold px-5 py-3 rounded-full border-2 border-transparent hover:border-yellow-400 transition-all"
            >
              Get Started
            </a>
          </div>
        </section>
      </FadeUp>

      {/* Core Features Sections */}
      <FadeUp>
        {service.detailPageData.sections && (
          <section className="py-16 bg-gray-50">
            <div className="container max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.detailPageData.sections.map((section, index) => (
                  <div
                    key={index}
                    className="card bg-white border border-gray-200 rounded-2xl p-6 shadow-md"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      {section.icon && (
                        <section.icon className="w-8 h-8 text-yellow-400" />
                      )}
                      <h3 className="text-2xl font-bold">{section.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{section.description}</p>
                    {section.points && (
                      <ul className="list-none p-0 space-y-2 text-gray-700">
                        {section.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-2"
                          >
                            {point.icon && (
                              <point.icon className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                            )}
                            <span>{point.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </FadeUp>

      {/* Why Choose Us Section */}
      <FadeUp>
        {service.detailPageData.whyChoose && (
          <section className="py-16">
            <div className="container max-w-6xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">
                {service.detailPageData.whyChoose.title}
              </h2>
              <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-6"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.detailPageData.whyChoose.points.map((point, index) => (
                  <div
                    key={index}
                    className="card bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md"
                  >
                    <h4 className="text-lg font-bold flex items-center gap-2 mb-2">
                      {point.icon && (
                        <point.icon className="w-6 h-6 text-yellow-400" />
                      )}
                      {point.text}
                    </h4>
                    <p className="text-gray-700">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </FadeUp>

      {/* Real-World Example Section */}
      <FadeUp>
        {service.detailPageData.example && (
          <section className="py-16 bg-gray-50">
            <div className="container max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                {service.detailPageData.example.title}
              </h2>
              <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-700 text-lg">
                {service.detailPageData.example.content}
              </p>
            </div>
          </section>
        )}
      </FadeUp>

      {/* Our Process Section */}
      <FadeUp>
        {service.detailPageData.process && (
          <section className="py-16">
            <div className="container max-w-4xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                {service.detailPageData.process.title}
              </h2>
              <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
              <ol className="list-decimal list-inside p-0 space-y-4 text-gray-700 text-lg">
                {service.detailPageData.process.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="font-bold flex-shrink-0">
                      {step.text}:
                    </span>
                    <span>{step.description}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}
      </FadeUp>

      {/* Outcome & Final Word */}
      <FadeUp>
        {(service.detailPageData.outcome ||
          service.detailPageData.finalWord) && (
          <section className="py-16 bg-gray-50">
            <div className="container max-w-4xl mx-auto px-4 text-center">
              {service.detailPageData.outcome && (
                <>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                    {service.detailPageData.outcome.title}
                  </h2>
                  <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-6"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.detailPageData.outcome.points.map(
                      (point, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 text-left"
                        >
                          <Check className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                          <p className="text-gray-700 text-lg">{point}</p>
                        </div>
                      )
                    )}
                  </div>
                </>
              )}

              {service.detailPageData.finalWord && (
                <div className="mt-16">
                  <p className="text-gray-700 text-lg mb-6">
                    {service.detailPageData.finalWord.content}
                  </p>
                  <a
                    href="#"
                    className="btn bg-yellow-400 text-black font-extrabold px-5 py-3 rounded-full border-2 border-transparent hover:border-yellow-400 transition-all"
                  >
                    {service.detailPageData.finalWord.buttonText}
                    <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                  </a>
                </div>
              )}
            </div>
          </section>
        )}
      </FadeUp>
    </div>
  );
};

export default ServiceDetail;
