// 구구단 출력
// 2단
// 모든 구구단 출력

for (let level = 2; level <=9; level++) {
    console.log(`==== 구구단 ${level}단 ====`);
    for (let line = 1; line <= 9; line++) {
      console.log(`${level} x ${line} = ${level * line}`);
    }
    console.log('=====================');
  }

  let cnt = 0;
for (let i =0; i<3;i++){
    for(let j = 0; j<2;j++){
        for(let k = 0; k<5;k++){
            // console.log(`${i}, ${j}`);
            cnt++;
        }
    }
}
console.log(`총 반복 횟수: ${cnt}회`);