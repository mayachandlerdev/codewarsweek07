//CODE WARS AREA OF A SQ KYU 8
//Write the function squareArea ( or square_area ) that finds the area of the red square when you have the length of the circular arc A.
//SOLUTION
function squareArea(A){
  var circum = 4 * A;
  var radius = circum / (2 * Math.PI);
  var area = Math.pow (radius, 2);
  return Math.round (area * 100) / 100
}
