import Image, { ImageProps } from "next/image";
import styles from "../styles/shapes.module.css";
import DesignLines from "./svgs/designLine";

interface Shapes extends ImageProps {
  src: string;
  className: string;
}

const shapesArr: Shapes[] = [
  {
    src: "/assets/images/shapes/shape-1.png",
    className: styles.element1,
  },
  {
    src: "/assets/images/shapes/shape-2.png",
    className: styles.element2,
  },
  {
    src: "/assets/images/shapes/shape-3.png",
    className: styles.element3,
  },
  {
    src: "/assets/images/shapes/shape-4.png",
    className: styles.element4,
  },
  {
    src: "/assets/images/shapes/shape-5.png",
    className: styles.element5,
  },
];

type Props = {
  noLine?: boolean;
};
const shapes = ({ noLine }: Props) => (
  <div>
    {!noLine && <DesignLines className="mt-20 left-[-66px] top-0" />}
    {shapesArr.map((shape) => (
      <span key={shape.src} className={shape.className}>
        <Image
          loading="lazy"
          alt="shape"
          width={41}
          height={43}
          src={shape.src}
        />
      </span>
    ))}
  </div>
);

export default shapes;
