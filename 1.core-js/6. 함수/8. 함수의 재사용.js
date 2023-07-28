let foods = ['김치찌개', '순대', '감자'];

function myIndexOf(array, searchElement){
    for(let i = 0; i<array.length; i++){
        if(searchElement===array[i]) return i;
    }
    return NOT_FOUND;   

}


// 배열에서 특정 요소가 존재하는지 유무 확인
let index = myIndexOf(foods, '김치찌개');
console.log(`찾은 인덱스: ${index}`);
let isPresent = myIncludes(foods, `김치찌개`);
console.log(`존재 유무: ${isPresent}`);