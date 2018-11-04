var points = [40, 100, 1, 5, 25, 10];

//ascending
points.sort((a, b) =>  a - b );
console.log('points:', points);
points.sort((a, b) =>  a > b );
console.log('points:', points);

//descending
points.sort((a, b) =>  b - a );
console.log('points:', points);
points.sort((a, b) =>  a < b );
console.log('points:', points);
