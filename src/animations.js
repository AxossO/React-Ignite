export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.75 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, delay: 0.4 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};

// export const popsGame = {
//   hidden: {
//     opacity: 0,
//     scale: 0.5,

//     width: "0%",
//   },
//   show: {
//     opacity: 1,
//     scale: 1,
//     width: "100%",
//     transition: { duration: 0.75 },
//   },
//   exit: {
//     opacity: 0,
//     transition: { duration: 0.75 },
//   },
// };

export const popsGame = {
  hidden: {
    opacity: 0,
    y: -400,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};
