import React from "react";
import useDarkMode from '@fisch0920/use-dark-mode';

const Image = ({ className, src, srcDark, srcSet, srcSetDark, alt }) => {
  const [isDarkMode] = useDarkMode(false);

  return (
    <img
      className={className}
      srcSet={isDarkMode ? srcSetDark : srcSet}
      src={isDarkMode ? srcDark : src}
      alt={alt}
    />
  );
};

export default Image;
