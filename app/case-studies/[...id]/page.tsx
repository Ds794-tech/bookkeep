"use client";


import React from "react";
import { caseStudy } from "../../utils/index"; // your JSON file
import { useParams } from "next/navigation";
import Layout from "@/app/layout/Layout";

export default function CaseStudyDetail() {
    const { id } = useParams();
    const study = caseStudy.caseStudies.find((item) => item.id === Number(id));

    if (!study) {
        return (
            <div className="py-20 text-center text-xl font-semibold text-gray-700">
                Case Study Not Found
            </div>
        );
    }

    return (
        <Layout>
            <div className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4">

                    {/* Title Section */}
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {study.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10">
                        {study.subtitle}
                    </p>

                    {/* Section Card */}
                    <div className="space-y-10">

                        {/* Client Overview */}
                        <section className="bg-white shadow-md p-6 rounded-xl">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                Client Overview
                            </h2>
                            <p className="text-gray-700">{study.clientOverview}</p>
                        </section>

                        {/* Challenges */}
                        <section className="bg-white shadow-md p-6 rounded-xl">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                Challenges
                            </h2>
                            <p className="text-gray-700 mb-4">{study.challengesIntro}</p>
                            <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                {study.challenges?.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Solutions */}
                        <section className="bg-white shadow-md p-6 rounded-xl">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                Solutions
                            </h2>
                            <p className="text-gray-700 mb-4">{study.solutionsIntro}</p>
                            <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                {study.solutions?.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Team (Only for Case Study 4) */}
                        {study.team && (
                            <section className="bg-white shadow-md p-6 rounded-xl">
                                <h2 className="text-xl font-semibold mb-3 text-gray-900">Team</h2>
                                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                    {study.team.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Deliverables (Case study 4) */}
                        {study.deliverables && (
                            <section className="bg-white shadow-md p-6 rounded-xl">
                                <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                    {study.deliverablesIntro}
                                </h2>
                                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                    {study.deliverables.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Systems (Case study 4) */}
                        {study.systems && (
                            <section className="bg-white shadow-md p-6 rounded-xl">
                                <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                    {study.systemsIntro}
                                </h2>
                                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                    {study.systems.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Results */}
                        <section className="bg-white shadow-md p-6 rounded-xl">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                {study.resultsIntro || "Results"}
                            </h2>
                            <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                {study.results?.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Testimonial */}
                        <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                            <p className="italic text-gray-800 text-lg mb-3">
                                “{study.testimonial.quote}”
                            </p>
                            <p className="font-semibold text-gray-700">
                                — {study.testimonial.author}
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
