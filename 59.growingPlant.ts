// Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

function growingPlant(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number
): number {
  let days = Math.floor(desiredHeight / (upSpeed - downSpeed));
  return days;
}

console.log(growingPlant(100, 10, 910));
