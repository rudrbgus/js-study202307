let foodList = ['닭꼬치' , '볶음밥', '짜장면', '족발'];

let findTarget = '짜장면';

// indexOf:배열의 특정 요소가 몇번 인덱스에 있는지 탐색
let index = foodList.indexOf(findTarget);
console.log(`찾은 인덱스: ${index}`);

//include() : 배열의 특정 요소가 존재하는 논리여부 확인
let isPresent = foodList.includes('족발');
console.log(`존재 여부: ${isPresent}`);

//slice() : 배열을 일정부분 잘라내어, 복사본 배열을 반환
console.log('====================================');

foodList.push('오뎅', '국밥');

// 앞에서 3개만 추출
let sliceFoodList = foodList.slice(0, 3);
console.log(sliceFoodList);

// 3번부터 끝까지
let sliced2 = foodList.slice(3);
console.log(sliced2);

//원본배열을 그대로 복사
let copyArr = foodList.slice();
log(copyArr);

//역순은 reverse();

// concat() : 배열을 2개를 결합, 결합한 사본을 리턴

let concated = arr1.concat(arr2);
log(concated);

// splice() : 배열의 특정요소 제거, 삽입

// clear() : 배열 전체 삭제
foodList = [];