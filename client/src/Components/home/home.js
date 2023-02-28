import React from 'react';

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'


const features = [
    {
        name: 'For Everyone',
        description:
            'For each and every person. Just sign up and start looking for posts and jobs. find work from all possible domains.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Secure',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: LockClosedIcon,
    },
    {
        name: 'For Every Professional',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Trustworthy',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: FingerPrintIcon,
    },
]


export function Home() {
    return (
        <>
            <div className="isolate ">
                <main>
                    <div className="relative sm:px-6 lg:px-8">
                        <div className="mx-auto max-h-screen max-w-2xl py-32 sm:py-48 lg:py-56">
                            <div className="text-center">
                                <h1 className="lg:text-8xl font-bold tracking-tight text-gray-900 text-7xl">
                                    GO SOLO!!!
                                </h1>
                                <p className="mt-6 pl-4 pr-4 text-lg font-semibold leading-8 text-gray-600">
                                    A freelancer portal which is created by the freelancers, to the freelancers and for the freelancers. A platform for all!!!
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <a href="/" className="rounded-md bg-tertiary px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >Get started
                                    </a>
                                    <a href="#feature" className="text-base font-semibold leading-7 text-gray-900">
                                        Learn more <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                            <svg
                                className="relative left-[calc(40%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                                viewBox="0 0 1155 678"
                            >
                                <path
                                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                                    fillOpacity=".3"
                                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                                />
                                <defs>
                                    <linearGradient
                                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                        x1="1155.49"
                                        x2="-78.208"
                                        y1=".177"
                                        y2="474.645"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9089FC" />
                                        <stop offset={1} stopColor="#FF80B5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </main>
            </div>
            <div className="bg-white py-20 sm:py-32">
                <div id='feature' className="mx-auto max-w-7xl pt-5 px-6 lg:max-h-screen lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-2xl font-semibold leading-8 tracking-tight text-secondary  ">Features</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Everything you need to know
                        </p>
                        <p className="mt-6 text-lg font-semibold leading-8 text-gray-600">
                            All you need to know before using this platform. A platform which provides various functionalities to users. A platform for all your needs.
                        </p>
                    </div>
                    <div className="mx-auto mt-12 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-xl font-semibold leading-7 text-gray-900">
                                        <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base font-semibold leading-7 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>


    )
}
export default Home;