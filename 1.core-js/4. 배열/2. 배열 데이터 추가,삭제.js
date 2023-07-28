// let pets = ['멍멍이', '야옹이', '춘식이'];

// console.log(pets);

// 배열 맨 끝에 데이터 추가
// pets.push('라이언');

// console.log(pets);

let numArray = [];
let summery = 0;
let num = 0;
while(true){
    num = prompt('숫자를 입력하세요 멈추려면: 그만');
    console.log();
    if(String(num) === '그만'){
        break;
    }
    numArray.push(num); 
}

numArray.forEach((f) => {
    summery += Number(f);
})


alert(`입력한 숫자 목록 ${numArray}\n입력한 숫자 총합: ${summery}`);
