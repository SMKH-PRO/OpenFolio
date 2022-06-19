import { experienceSection } from "../../config";
import TimelineItem from "./timelineItem";

const { experiences } = experienceSection;
const Timeline = () => (
  <div className="container">
    <div
      id="timeline"
      className="
   

       my-30
       mx-auto 
       relative  
       px-[10px] 
       transition-all 
       duration-400 
       ease

       after:content-['']
       after:clear-both
       after:table
       after:w-full

       before:content-['']
       before:w-[3px]
       before:h-full
       before:bg-primary-500
       
       before:top-0
       before:absolute

       sm:m-[30px]
       sm:p-0
       sm:w-[90%]

       sm:before:left-0
       md:before:left-1/2

       "
    >
      {experiences.map((options, i) => (
        <TimelineItem
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...options}
          key={`${options.title}_${i}`}
          right={i % 2 !== 0}
        />
      ))}
    </div>
  </div>
);

export default Timeline;
