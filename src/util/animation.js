export const fadeUp = {
    hidden: { opacity: 0, y: 30},
    show: {
        opacity: 1,
        y: 12,
        transition: { duration: 1.5, ease: "easeOut" }
    },
    exit: {
        opacity: 0,
        y: 40,
    },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};
