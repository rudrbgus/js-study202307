// 1 ~ 10까지의 총합
let x = +prompt('첫번째 숫자를 입력!');
let y = +prompt('두번째 숫자를 입력!');

if (x > y) {
  let t = x;
  x = y;
  y = t;
}

let total = 0; // 총합저장
for (let n = x; n <= y; n++) {
  total += n; // 0 + 1 = 1
}
alert(`${x} ~ ${y}까지의 총합: ${total}`);
