//  Find the area of a polygon for a given n

function shapeArea(n: number): number {
  let area = 1;

  for (let i = 1; i < n; i++) {
    area += 4 * i;
  }
  return area;
}

console.log(shapeArea(2));
console.log(shapeArea(3));
console.log(shapeArea(4));
console.log(shapeArea(5));
