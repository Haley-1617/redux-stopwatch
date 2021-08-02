export const increment = () => {
  return {
    type: "INC",
  };
};

export const decrement = () => {
  return {
    type: "DEC",
  };
};

export const start = () => {
  return {
    type: "START",
    now: Date.now(),
  };
};

export const tick = (now) => {
  return {
    type: "TICK",
    startTime: now,
  };
};

export const stop = () => {
  return {
    type: "STOP",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
