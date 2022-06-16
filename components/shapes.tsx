import styles from "../styles/shapes.module.css";
import DesignLines from "./svgs/designLine";

const shapes = () => (
  <div>
    <DesignLines />

    <img
      alt="animated shape"
      width={41}
      height={43}
      src="/assets/images/shapes/shape-1.png"
      className={styles.element1}
    />
    <img
      alt="animated shape"
      width={41}
      height={43}
      src="/assets/images/shapes/shape-2.png"
      className={styles.element2}
    />
    <img
      alt="animated shape"
      width={41}
      height={43}
      src="/assets/images/shapes/shape-3.png"
      className={styles.element3}
    />

    <img
      alt="animated shape"
      width={41}
      height={43}
      src="/assets/images/shapes/shape-4.png"
      className={styles.element4}
    />
    <img
      alt="animated shape"
      width={41}
      height={43}
      src="/assets/images/shapes/shape-5.png"
      className={styles.element5}
    />
  </div>
);

export default shapes;
