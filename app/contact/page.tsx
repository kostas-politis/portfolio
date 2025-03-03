// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
// import { ChevronDownIcon } from '@heroicons/react/16/solid';

import FormInput from '@/components/FormInput';

export default function Contact() {
  return (
    <div className="[gap-30px] flex flex-col">
      <div className="order-1 xl:order-none xl:h-[54%]">
        <form className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10">
          <h2 className="text-accent">Let&apos;s work together</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
            blanditiis asperiores.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormInput type="text" placeholder="First name" />
            <FormInput type="text" placeholder="Last name" />
            <FormInput type="email" placeholder="Email address" />
            <FormInput type="tel" placeholder="Phone number" />
          </div>
          <textarea
            placeholder="Type your message here."
            className="rounded-md border border-white/10 bg-background p-2.5 text-base font-light outline-none focus:border-accent h-[200px]"
          ></textarea>
          <button
            type="submit"
            className="self-start rounded-md bg-accent px-5 py-2.5 text-center text-sm font-medium text-background focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="order-2 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
        info
      </div>
    </div>
    //     <div className="mb-5">
    //     <input
    //       type="email"
    //       id="email"
    //       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    //       placeholder="Email address"
    //       required
    //     />
    //   </div>
  );
}
