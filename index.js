const myArr = [[6], [5], [3], [2], [7]];

for (let i in myArr){
  if (myArr[i][0] % 2 === 0){
    console.log(`${myArr[i][0]} is even!`);
  }else{
    console.log(`${myArr[i][0]} is odd!`);
  }
}