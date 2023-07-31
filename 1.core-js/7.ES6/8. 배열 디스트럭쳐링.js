
const userNames = ['김철수', '강감찬', '박영희'];

// suerNames 에서 각각의 요소들을 다시 변수로 저장시키고 싶다.
// const kim = userNames[0];
// const kang = userNames[1];
// const park = userNames[2];

const [a, b, c] = userNames;

console.log(`a: ${a}, b: ${b}, c: ${c}`);


//변수값 교환하기
let first = 10;
let second = 20;

[second, first] = [first, second];
console.log(`first: ${first}, second: ${second}`); 

// 맨 앞 2개는 각각의 변수에 저장하고
// 나머지는 묶어서 다시 배열로 만들고 싶다.
const [one, three, ...rest] = [1,3,5,7,9,11];
console.log(rest);

console.log(`=====================================`);

const foods = ['감자튀김', '햄버거', '콜라'];
