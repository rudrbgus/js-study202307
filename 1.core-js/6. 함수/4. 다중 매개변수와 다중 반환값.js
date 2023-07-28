// multi parameter: 매개변수의 개수가 n개일 경우
// n개를 하나의 박스(배열, 객체)에 담아서 전달하자!

// 정수 n개의 총합 (ES5)
function addAll(numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}

// 정수 n개의 총합 (ES6) - 스프레드
function addAllEs6(...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}

let r1 = addAll([10, 20, 30, 40]);
console.log(`r1: ${r1}`);

let r2 = addAllEs6(10, 20, 30, 40, 50);
console.log(`r1: ${r2}`);


function operateAll(n1, n2){
    return {
        minus: n1-n2,
        nulti: n1 * n2,
        divide: n1 / n2,
        plus: n1+n2,
    };
}
results = operateAll(10, 20);
console.log(`덧셈결과: ${results.plus}`);