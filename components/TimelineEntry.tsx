import Image from 'next/image';
import { WorkExperience } from '../app/work';

interface Props {
  item: WorkExperience;
  reverse?: boolean;
}

export default function TimelineContainer({ item, reverse = false }: Props) {
  return (
    <div className="mb-[25px] grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-[25px] last:mb-0 lg:grid-cols-[1fr_auto_1fr] lg:grid-rows-none">
      {/* LOGO */}
      <Image
        src={item.image.path}
        alt={item.image.alt}
        width={40}
        height={40}
        className="mx-auto box-border rounded-full border-[2px] bg-foreground p-[4px] lg:order-2"
      />
      {/* DATE */}
      <div
        className={`self-center text-sm ${reverse ? 'lg:order-3 lg:justify-self-start' : 'lg:order-1 lg:justify-self-end'}`}
      >
        January 2018 - October 2022
      </div>
      {/* CONTENT */}
      <div
        className={`${reverse ? 'lg:order-1' : 'lg:order-3'} col-start-2 rounded-lg border-b-2 border-accent bg-[#27272c] p-7 lg:col-start-auto lg:row-span-2`}
      >
        <h3 className="mb-1">{item.title}</h3>
        <h5 className="mb-4 text-sm font-light text-white/60">
          {item.company}
        </h5>
        <ul className="flex list-disc flex-col gap-3 pl-4">
          {item.bullets.map((bullet, index) => (
            <li key={index} className="text-xs">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}