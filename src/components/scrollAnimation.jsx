import { motion } from "framer-motion";
import { useInView  } from "react-intersection-observer";

function ScrollAnimation({ children, variant }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;