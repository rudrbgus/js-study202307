
let age = 19;


// js는 정수 , 실수 구분하지 않고 모두 실수처리
let num = 2;
console.log(typeof num);
console.log(5/2);

// 문자 타입
let s1  = 'str';
let s2 = "str2";
let s3 = `str3`; //backtick

let tag=`<ul>
    <li>
        <a href="#">link2</a>
    <li>
</ul>`;
console.log(tag);

let userName = '뽀로로';
let userAge = 5;

let message = '제 이름은 ' + userName + '이구요 나이는 '+userAge+'살이에요!';

console.log(message);

let message1 = `제 이름은 ${userName}이구요~ 나이는 ${userAge}살이에요!`;
console.log(message1);

// True는 안돼 1도 안돼
let flat = true;

// undefined타입과 null타입
// undefined : 변수만들고 값 안넣어놓은 상태 (실수)
// null : 의도적으로 값이 없다는 표현을 하는 상태 (고의)


let address = '충남 청양군 읍내리';
address = null;
console.log(address);

