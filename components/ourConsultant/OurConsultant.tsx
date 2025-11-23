import React from 'react';

export default function OurConsultant() {
    return (
        <div className='mt-6 relative container mx-auto'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#061835] z-1 opacity-[.9]'></div>
            <div className='bg-fixed bg-[url(/images/cheer_person_meeting.jpg)] bg-cover h-[500px] px-3 md:pt-20 flex flex-col justify-center items-center space-y-6'>
                <div>
                    <h2 className='text-2xl md:text-4xl z-2 relative font-bold text-white text-center mb-4'>Still Have Questions About Our Services? Let’s Talk!</h2>
                </div>
                <div>
                    <p className='text-white z-2 relative text-center max-w-5xl mx-auto'>Confused about where to start or which accounting solution fits your business best? Our experts are here to guide you. Schedule a free consultation and discover how Accuvibe Advisor can simplify your accounting, streamline operations, and boost financial efficiency.</p>
                </div>
                <div className='mt-4'>
                    <a href='/contact'>
                        <button className='bg-teal-500 z-2 cursor-pointer relative hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-sm shadow'>Contact Us</button>
                    </a>
                </div>
            </div>

        </div>
    )
}