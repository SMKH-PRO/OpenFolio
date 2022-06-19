import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ExperienceType } from "../../config.types";

interface Props extends ExperienceType {
  right?: boolean;
}

const timelineItem = ({
  right,
  title,
  toYear,
  fromYear,
  description,
  org,
  orgLink,
  location,
}: Props) => (
  <div
    className="
     timeline-item

     mb-[50px]
     relative

     after:content-['']
     after:block
     after:w-full
     after:clear-both
     
     before:content-['']
     before:block
     before:w-full
     before:clear-both
   
             "
  >
    <div
      className="
  timeline-icon
  bg-primary-500
  w-[50px]
  h-[50px]
  absolute
  top-0
  left-1/2
  overflow-hidden
  ml-[-23px]
  rounded-2xl


   flex 
   justify-center
   items-center
   "
    >
      <FontAwesomeIcon
        className="w-[22px] text-white"
        icon={["fas", "calendar-alt"]}
      />
    </div>
    <div
      className={`
    timeline-content 
    w-[45%]
    
    p-[15px]
    
    pt-0
    rounded-[5px]
    transition-all duration-300 ease-out


   
 

    ${
      right
        ? `
    float-right
   text-left
    `
        : `
        md:text-right
        md:before:border-r-0`
    }
    `}
    >
      <h2
        className="
        text-3xl
        md:text-3xl
        sm:text-2xl
        font-bold
        "
      >
        {title}
      </h2>
      {(org || location) && (
        <h3
          className="
       text-2xl
       md:text-2xl
       sm:text-xl
      text-slate-500
      opacity-90
      josefinSans
       mt-2
       pl-[1px]
       "
        >
          {orgLink ? (
            <Link href={orgLink}>
              <a className="underline hover:text-primary-800">{org || ""}</a>
            </Link>
          ) : (
            org || ""
          )}
          {org && location ? " | " : ""} {location || ""}
        </h3>
      )}

      {toYear && fromYear && (
        <div
          className={`mt-2 flex w-full ${
            right
              ? "justify-start"
              : "md:justify-end lg:justify-end xl:justify-end   sm:justify-start justify-start"
          }`}
        >
          <div className="bg-primary-400 p-1.5 px-4 w-44 font-bold text-white rounded-lg  flex justify-around">
            <p>{fromYear}</p> - <p>{toYear}</p>
          </div>
        </div>
      )}
      {description && (
        <p className="pl-[1px] mt-3 text-slate-500">{description}</p>
      )}
    </div>
  </div>
);

export default timelineItem;
