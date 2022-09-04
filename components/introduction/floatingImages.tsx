import Image from "../Image";
import styles from "../../styles/header.module.css";

const styledBox = `
absolute
z-10
sm:w-[60px] 
sm:h-[60px] 
md:w-[70px] 
md:h-[70px]  
lg:w-[90px] 
lg:h-[90px]
rounded-lg 
pointer-events-none  
bg-white 
shadow-[0_5px_30px_rgba(0,0,0,0.2)]
`;
const FloatingImages = () => (
  <span>
    <div
      title="React.JS"
      className={`
      ${styledBox}
      top-[160px] 
      left-10 
      pt-3 p-2 
      px-3 
      ${styles?.floating_item || ""}`}
    >
      <Image
        loading="lazy"
        alt="React.JS"
        src="/assets/images/icons/react.png"
        width={80}
        height={80}
        className="pointer-events-none"
        objectFit="contain"
      />
    </div>

    <div
      title="Node.JS"
      className={`
      ${styledBox}
      top-[160px] 
      right-[60px] 
      pt-3
      p-2 
      px-3 
    
      ${styles?.floating_item || ""}
      `}
    >
      <Image
        loading="lazy"
        alt="Node.JS"
        src="/assets/images/icons/nodejs.png"
        width={80}
        height={80}
        className="pointer-events-none"
        objectFit="contain"
      />
    </div>

    <div
      title="MongoDB"
      className={`
       ${styledBox}
       bottom-[80px] 
       right-[60px] 
       pt-3 
       p-1 
       px-3
      ${styles?.floating_item || ""}
      `}
    >
      <Image
        loading="lazy"
        alt="MongoDB"
        src="/assets/images/icons/mongoDB.png"
        width={80}
        height={80}
        layout="responsive"
        className="pointer-events-none"
        objectFit="contain"
      />
    </div>
    <div
      title="MongoDB"
      className={`
      absolute 
      z-10 
      bg-white  
      bottom-[80px] 
      flex 
      items-center 
      justify-center 
      left-10 
      shadow-[0_5px_30px_rgba(0,0,0,0.2)] 
      rounded-2xl
       py-2  
       px-3 
       pointer-events-none 
       ${styles?.floating_item || ""}`}
    >
      <Image
        loading="lazy"
        alt="completed"
        src="/assets/images/icons/complete.png"
        width={70}
        height={70}
        className="pointer-events-none"
        objectFit="contain"
      />
      <div className="px-7 ">
        <p className="font-bold">1500+</p>
        <p>complete project</p>
      </div>
    </div>
  </span>
);

export default FloatingImages;
