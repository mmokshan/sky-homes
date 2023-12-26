import { useEffect, useState, useCallback } from "react";
import { useSpring, config } from "react-spring";

export const ShowRightAnimation = (ref) => {
  const [isVisible, setIsVisible] = useState(true);

  const { opacity, transform } = useSpring({
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateX(0)" : "translateX(-20px)",
    },
    config: config.slow,
    delay: 400, // Adjust the delay time as needed
  });

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  }, [ref]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { opacity, transform };
};




export const ShowRightAnimationOnce = (ref) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const { opacity, transform } = useSpring({
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: {
      opacity: hasAnimated ? 1 : 0,
      transform: hasAnimated ? "translateX(0)" : "translateX(-20px)",
    },
    config: config.slow,
    delay: 500, // Adjust the delay time as needed
  });

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (!hasAnimated && rect.top <= window.innerHeight && rect.bottom >= 0) {
        setHasAnimated(true);
      }
    }
  }, [hasAnimated, ref]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { opacity, transform };
};
