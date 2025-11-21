import Layout from "../layout/Layout";
import { caseStudy } from "../utils";
import Image from 'next/image'
import Link from 'next/link'

export default function CaseStudies() {
    return (
        <Layout>
            <div className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">

                <h1 className="text-4xl md:text-4xl font-extrabold title-main py-20  text-center mb-16 
                                text-gray-900 tracking-tight">
                    Accuvibe Advisor — Case Studies
                </h1>
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                            {caseStudy.caseStudies.map((c, i) => (
                                <CaseStudyCard key={i} {...c} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

function CaseStudyCard({ ...rest }) {
    return (
        <article className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden">
            <Link href={`/case-studies/${rest.id}`} className="block">
                <div className="relative w-full h-52 sm:h-40 md:h-44 lg:h-56">
                    {/* Use next/image for optimized images. If using external URLs, make sure the domain is allowed in next.config.js */}
                    <Image
                        src={"/images/manager_working.jpg"}
                        alt={rest.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={rest.priority}
                    />
                </div>


                <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-2">{rest.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">{rest.description}</p>


                    <div className="mt-4">
                        <span className="inline-flex items-center text-sm font-medium text-indigo-600 group-hover:underline">
                            Read case study
                            <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    )
}