import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

export default function ContactInfo() {
  return (
    <ul className="flex flex-col gap-10 lg:order-2 lg:mx-auto">
      <li className="flex items-center gap-6">
        <PhoneIcon className="size-14 shrink-0 rounded-md bg-[#27272c] p-4 text-accent md:size-16" />
        <div>
          <p className="font-light text-white/60">Phone</p>
          <h3 className="text-lg md:text-xl">(+30) 698 372 8273</h3>
        </div>
      </li>
      <li className="flex items-center gap-6">
        <EnvelopeIcon className="size-14 shrink-0 rounded-md bg-[#27272c] p-4 text-accent md:size-16" />
        <div>
          <p className="font-light text-white/60">Email</p>
          <h3 className="text-lg md:text-xl">politisk273@gmail.com</h3>
        </div>
      </li>
      <li className="flex items-center gap-6">
        <MapPinIcon className="size-14 shrink-0 rounded-md bg-[#27272c] p-4 text-accent md:size-16" />
        <div>
          <p className="font-light text-white/60">Address</p>
          <h3 className="text-lg md:text-xl">
            Tsocha 30, <span className="whitespace-nowrap">Athina 115 21</span>
          </h3>
        </div>
      </li>
    </ul>
  );
}
