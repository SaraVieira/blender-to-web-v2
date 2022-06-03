

export const wobble = (state) =>
  Math.sin(1000 + state.clock.elapsedTime) * Math.PI;
