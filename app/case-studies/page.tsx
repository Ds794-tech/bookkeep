import Layout from "../layout/Layout";
import { caseStudy } from "../utils";

export default function CaseStudies() {
    return (
        <Layout>
            <div className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">

                <h1 className="text-4xl md:text-5xl font-extrabold title-main py-10 text-center mb-16 
                               text-gray-900 tracking-tight">
                    Accuvibe Advisor — Case Studies
                </h1>

                <div className="space-y-20">
                    {caseStudy.caseStudies.map((cs, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                                        border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]
                                        transition-all duration-500"
                        >
                            {/* Title */}
                            <h2 className="text-3xl pb-4 font-extrabold text-blue-700 tracking-tight">
                                {cs.title}
                            </h2>
                            <p className="text-gray-700 text-lg mt-2">
                                {cs.subtitle}
                            </p>

                            {/* Divider */}
                            <div className="h-[2px] w-24 bg-blue-700/40 mt-4 rounded"></div>

                            {/* Client Overview */}
                            <div className="mt-10">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Client Overview
                                </h3>
                                <p className="text-gray-600 mt-3 leading-relaxed">
                                    {cs.clientOverview}
                                </p>
                            </div>

                            {/* Challenges */}
                            <div className="mt-10">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Challenges
                                </h3>
                                <p className="text-gray-600 mt-2 leading-relaxed">
                                    {cs.challengesIntro}
                                </p>

                                <ul className="list-disc ml-8 space-y-2 text-gray-700 mt-4 leading-relaxed">
                                    {cs.challenges.map((c, i) => (
                                        <li key={i}>{c}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Solutions */}
                            <div className="mt-10">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Solutions Implemented
                                </h3>
                                <p className="text-gray-600 mt-2 leading-relaxed">
                                    {cs.solutionsIntro}
                                </p>

                                {cs.team && (
                                    <ul className="list-disc ml-8 space-y-2 text-gray-700 mt-3 leading-relaxed">
                                        {cs.team.map((t, i) => (
                                            <li key={i}>{t}</li>
                                        ))}
                                    </ul>
                                )}

                                <ul className="list-disc ml-8 space-y-2 text-gray-700 mt-4 leading-relaxed">
                                    {cs.solutions?.map((s, i) => (
                                        <li key={i}>{s}</li>
                                    ))}
                                </ul>

                                {cs.deliverables && (
                                    <>
                                        <h4 className="mt-6 font-semibold text-lg text-gray-900">
                                            {cs.deliverablesIntro}
                                        </h4>
                                        <ul className="list-disc ml-8 space-y-2 text-gray-700 mt-3">
                                            {cs.deliverables.map((d, i) => (
                                                <li key={i}>{d}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                {cs.systems && (
                                    <>
                                        <h4 className="mt-6 font-semibold text-lg text-gray-900">
                                            {cs.systemsIntro}
                                        </h4>
                                        <ul className="list-disc ml-8 space-y-2 text-gray-700 mt-3">
                                            {cs.systems.map((s, i) => (
                                                <li key={i}>{s}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>

                            {/* Results */}
                            <div className="mt-10">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Results Achieved
                                </h3>
                                <p className="text-gray-600 mt-2 leading-relaxed">
                                    {cs.resultsIntro}
                                </p>

                                <ul className="list-disc ml-8 space-y-2 text-gray-700 mt-4">
                                    {cs.results.map((r, i) => (
                                        <li key={i}>{r}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Testimonial Box */}
                            <div className="mt-12 border-l-4 border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 
                                            p-6 rounded-xl shadow-inner">
                                <p className="italic text-gray-800 text-lg leading-relaxed">
                                    “{cs.testimonial.quote}”
                                </p>
                                <p className="font-semibold mt-3 text-blue-900">
                                    — {cs.testimonial.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
