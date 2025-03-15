import { workExperience } from '@/components/Timeline/work';
import TimelineContainer from './TimelineEntry';

export default function Timeline() {
  return (
    <div className="relative mx-auto w-full max-w-5xl py-[20px]">
      {/* Vertical line */}
      <div
        className={`absolute left-[19px] top-0 -z-10 h-full w-[2px] bg-foreground lg:left-1/2`}
      ></div>
      {workExperience.map((item, index) => {
        return (
          <TimelineContainer
            key={index}
            item={item}
            reverse={index % 2 === 0}
          />
        );
      })}
    </div>
  );
}
