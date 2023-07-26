let rnNum = Math.floor(Math.random() * 100) + 1;
let min = 1;
let max = 100;

let level = +prompt('난이도를 골라주세요: 1.상(기회 3번) | 2.중(기회 5번) | 3.하(기회 10번)');
let chance = 0;
if(level ===1){
    chance = 3;
}
if(level ===2){
    chance = 5;
}
if(level===3){
    chance = 10;
}

alert(`${min} ~ ${max} 사이의 무작위 숫자를 ${chance}번 안에 맞춰보세요!!!`);
let selNum = 0;
let rePlay = chance;

for(let i =0; i < rePlay; i++){    
    selNum = +prompt('숫자를 골라보세요');
    if(selNum>100 || selNum<0){
        alert('범위 밖이야 1~100사이로 해봐');
        i--;
        continue;            
    }
    if(selNum > rnNum){
        alert('Down');
        chance--;
        if(chance ===0){
            alert(`땡 정답은 ${rnNum}입니다`);   
            break;
        }
        max = selNum;
        alert(`${min} ~ ${max} 사이의 무작위 숫자를 ${chance}번 안에 맞춰보세요!!!`);

    }else if(selNum <rnNum){
        alert('UP');
        chance--;
        if(chance ===0){
            alert(`땡 정답은 ${rnNum}입니다`);   
            break;
        }
        min = selNum;
        alert(`${min} ~ ${max} 사이의 무작위 숫자를 ${chance}번 안에 맞춰보세요!!!`);
    }else{
        alert(`정답입니다 ${rePlay - chance}번 만에 맞추셨습니다`);
        break;
    }    
}


