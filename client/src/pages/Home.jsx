'use client';

import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import {
  MinusSmallIcon,
  PlusSmallIcon,
  XMarkIcon,
  PencilSquareIcon,
  CurrencyDollarIcon,
  TicketIcon,
} from '@heroicons/react/24/outline';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'When will the winner be drawn?',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Can I buy more than one ticket?',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'How do refunds work?',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

const features = [
  {
    name: 'Sign Up with Email and Name',
    description:
      'Visit the official contest website and locate the registration section. Fill out the required fields, including your email address and full name. Make sure to provide accurate information, as this will be used to contact you if you win. After completing the sign-up form, click the "Submit" button.',
    href: '#',
    icon: PencilSquareIcon,
  },
  {
    name: 'Make a Payment',
    description:
      'Upon submitting your registration, you will be directed to the payment page. Here, you will find secure payment options to process your entry fee of $100. You can use various payment methods, such as credit or debit cards, or other available options. Follow the instructions on the payment page to complete the transaction.',
    href: '#',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Wait and Win',
    description: `You're officially part of the contest! All eligible entries will be collected and, at the end of the contest period, a random drawing will be conducted to select the lucky winner. If you're selected as the winner, you will be contacted using the email you provided during registration.`,
    href: '#',
    icon: TicketIcon,
  },
];

const galleryPhotos = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1627822607476-d807c28ba78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1894&q=80',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1627822607476-d807c28ba78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1894&q=80',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1627822607476-d807c28ba78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1894&q=80',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1627822607476-d807c28ba78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1894&q=80',
  },
  // More people...
];

const navigation = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-gray-900'>
      <div className='flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1'>
        <p className='text-sm leading-6 text-white bubble-font'>
          <a href='#form' className='text-xl'>
            <strong className='font-semibold'>LSGiveaways</strong>
            <svg
              viewBox='0 0 2 2'
              className='mx-2 inline h-0.5 w-0.5 fill-current'
              aria-hidden='true'
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <Countdown date={new Date('September 18 2023')} />
            <svg
              viewBox='0 0 2 2'
              className='mx-2 inline h-0.5 w-0.5 fill-current'
              aria-hidden='true'
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            Enter Now <span aria-hidden='true'>&rarr;</span>
          </a>
        </p>
        <div className='flex flex-1 justify-end'>
          <button
            type='button'
            className='-m-3 p-3 focus-visible:outline-offset-[-4px]'
          >
            <span className='sr-only'>Dismiss</span>
            <XMarkIcon className='h-5 w-5 text-white' aria-hidden='true' />
          </button>
        </div>
      </div>
      {/* Header */}
      <header className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>
        <div className='relative flex flex-col items-center z-30 p-5 text-2xl text-white bg-opacity-50 rounded-xl'>
          <h1 className={`text-6xl text-white uppercase bubble-font`}>
            Win a new 2023 Ford Bronco
          </h1>
          <span className='mt-2 bubble-font'>Presented By LSGiveAways</span>
          <button
            className={`bg-black text-white rounded-lg py-3 px-6 text-lg mt-2 bubble-font uppercase`}
          >
            Enter Contest
          </button>
        </div>
        <video
          autoPlay
          loop
          muted
          className='absolute z-10 w-auto min-w-full min-h-full max-w-none'
        >
          <source
            src='https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </header>
      <main>
        {/* {Steps Sections} */}
        <div className='bg-gray-900 py-6 sm:py-8'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-5xl bubble-font uppercase'>
                Big Time Giveaway
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300 bubble-font'>
                Get ready for the journey of a lifetime with a chance to win a
                brand-new Ford Bronco in our exciting giveaway event. The Ford
                Bronco, an iconic symbol of rugged exploration and off-road
                prowess, is ready to take you on unforgettable escapades.
              </p>
            </div>

            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
              <h2 className='font-bold tracking-tight text-white sm:text-3xl bubble-font uppercase mb-6'>
                How to enter
              </h2>
              <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
                {features.map((feature) => (
                  <div key={feature.name} className='flex flex-col'>
                    <dt className='text-base font-semibold leading-7 text-white uppercase bubble-font'>
                      <div className='mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500'>
                        <feature.icon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className='mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300'>
                      <p className='flex-auto'>{feature.description}</p>
                      <p className='mt-6'></p>
                    </dd>
                  </div>
                ))}
              </dl>
              <form id='form'>
                <div class='mb-6'>
                  <label
                    for='password'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Your Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required
                  />
                </div>

                <div class='mb-6'>
                  <label
                    for='email'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    id='email'
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@flowbite.com'
                    required
                  />
                </div>

                <button
                  type='submit'
                  class='text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                >
                  Proceed To Payment
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Gallery section */}
        <div className='bg-gray-900 py-6 sm:py-8'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase bubble-font'>
                Showcase
              </h2>
            </div>
            <ul
              role='list'
              className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4'
            >
              {galleryPhotos.map((person) => (
                <li key={person.name}>
                  <img
                    className='aspect-[14/13] w-full rounded-2xl object-cover'
                    src={person.imageUrl}
                    alt=''
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ section */}
        <div className='bg-gray-900'>
          <div className='mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-10'>
            <div className='mx-auto max-w-4xl divide-y divide-white/10'>
              <h2 className='text-2xl font-bold leading-10 tracking-tight text-white uppercase bubble-font'>
                Frequently asked questions
              </h2>
              <dl className='mt-10 space-y-6 divide-y divide-white/10'>
                {faqs.map((faq) => (
                  <Disclosure as='div' key={faq.question} className='pt-6'>
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className='flex w-full items-start justify-between text-left text-white'>
                            <span className='text-base font-semibold leading-7 bubble-font'>
                              {faq.question}
                            </span>
                            <span className='ml-6 flex h-7 items-center'>
                              {open ? (
                                <MinusSmallIcon
                                  className='h-6 w-6'
                                  aria-hidden='true'
                                />
                              ) : (
                                <PlusSmallIcon
                                  className='h-6 w-6'
                                  aria-hidden='true'
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                          <p className='text-base leading-7 text-gray-300'>
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Sponser section */}
        <div className='bg-gray-900 py-8 sm:py-12'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <h2 className='text-center text-lg font-semibold leading-8 text-white uppercase bubble-font'>
              Sponsored by the world’s most innovative automotive groups
            </h2>
            <div className='mx-auto flex items-center mt-10 justify-center'>
              <img
                className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg'
                alt='SavvyCal'
                width={158}
                height={48}
              />
              <img
                className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg'
                alt='Statamic'
                width={158}
                height={48}
              />
            </div>
            <p className='text-center text-xs leading-5 text-gray-500 mt-6'>
              The information provided is intended for general informational
              purposes only and should not be considered as professional advice.
              We do not guarantee the accuracy, completeness, or reliability of
              any information presented. Any reliance you place on such
              information is strictly at your own risk. Always consult with
              qualified professionals for specific advice tailored to your
              situation. We strive to provide accurate and up-to-date content,
              but we cannot be held responsible for any errors, omissions, or
              losses that may result from your use of this information.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-gray-900'>
        <div className='mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
          <div className='flex justify-center space-x-6 md:order-2'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-gray-400 hover:text-gray-500'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon className='h-6 w-6' aria-hidden='true' />
              </a>
            ))}
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-gray-500'>
              &copy; 2023 Jashan Khela Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
