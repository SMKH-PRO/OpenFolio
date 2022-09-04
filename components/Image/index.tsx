/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @next/next/no-img-element */

/** USE HTML IMAGE COMPONENT */
import type { ImageProps } from "next/image";

export default ({ alt, src, style, width, height }: ImageProps) => (
  <img
    width={width}
    height={height}
    alt={alt}
    src={src as string}
    style={style}

    // you can add more props here as you like.
    // dont spread all the props because we're using next image's type.
  />
);

/** USE NEXT/IMAGE COMPONENT */

// import Image from "next/image";

// export type { ImageProps };
// export default Image;
export type { ImageProps };
