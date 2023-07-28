/* 
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고 
약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
 나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
*/

// 호출부
function calcDivisor(p){
    let count = 0;
    let divisor = [];
    for(let i =1; i<=20;i++){
        if(p%i===0){
            count++;
            divisor.push(i);
        }
    }
    console.log(`${p}의 약수: ${divisor}`);
    return count;
}


let divCount = calcDivisor(20);
console.log(`약수의 개수: ${divCount}개`);

//---------------------------------------------------------------------------------- 

/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/
console.log(`-----------------------------------------------------------`);
function calcNumbersTotalAndAverage(...numbers){
    let plus=0;
    let avg1 = 0;

    for(let i =0; i<numbers.length;i++){
        plus += numbers[i];        
    }
    avg1 = plus/numbers.length;
    return{
        // Key 와 Value 가 값이 같으면 Key값만 써두됨.
        total: plus,
        avg: avg1,
    }
}
let result = calcNumbersTotalAndAverage(90, 80, 180, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);

/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
2. bmi지수를 계산하여 반환함과 동시에 
3. bmi가 25.0이상이면 "당신은 과체중입니다." 
 18.5이하면 "당신은 저체중입니다." 
 나머지는 "당신은 정상체중입니다."를 출력하는 
 CalcBMI라는 함수를 정의하고 호출하세요. 
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
# 출력 예시: 
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"
*/
console.log(`--------------------------------------`);
function calcBMI(h1, w2){
    let bmi = w2 / (h1 * h1)*10000;    

    if(bmi>25.0) console.log('당신은 과체중입니다.');
    else if(bmi>18.5) console.log(`당신은 정상체중입니다.`);
    else console.log(`당신은 저체중입니다.`);

    return bmi;
}
function round(bmi, num){    
    let a = Math.floor(bmi*(10**num));    
    return a/(10**num); 
}

let h = 173.4, w = 75.2;
let myBmi = calcBMI(h, w);
console.log(myBmi);
console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi, 2)}입니다.`);