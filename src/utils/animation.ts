function getElemPosition(element: HTMLElement) {
  const { top, left, width, height } = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}

export function getDistanceBetweenElements(a: HTMLElement, b: HTMLElement): number {
  const aPosition = getElemPosition(a);
  const bPosition = getElemPosition(b);

  return Math.sqrt((aPosition.x - bPosition.x) ** 2 + (aPosition.y - bPosition.y) ** 2);
}

export function animation(car: HTMLElement, distance: number, animationTime: number) {
  let start: number | null = null;
  const state: {
    id: number;
  } = { id: 1 };

  function nextStep(timestamp: number) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const passed = Math.round(time * (distance / animationTime));

    car.style.transform = `translateX(${Math.min(passed, distance)}px)`;

    if (passed < distance) {
      state.id = window.requestAnimationFrame(nextStep);
    }
  }

  state.id = window.requestAnimationFrame(nextStep);

  return state;
}
