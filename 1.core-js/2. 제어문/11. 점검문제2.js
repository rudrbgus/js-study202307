let level = +prompt('~~~~~~ 재미있는 사칙연산 게임 ~~~~~~ \n[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]\n=======================================\n~~~~~~ 난이도를 설정합니다 . ~~~~~~\n [1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]')
let rnNum1=0;
let rnNum2=0;
let i = 1;

while(true){
    if(level ===1){
        rnNum1 = Math.floor(Math.random() * 100)+1;
        rnNum2 = Math.floor(Math.random() * 100)+1;
   }else if(level ===2){
        rnNum1 = Math.floor(Math.random() * 50)+1;
        rnNum2 = Math.floor(Math.random() * 50)+1;
   }else{
        rnNum1 = Math.floor(Math.random() * 20)+1;
        rnNum2 = Math.floor(Math.random() * 20)+1;
   }
    
    let operNum = Math.floor(Math.random() * 4)+1;
    let anwser = 0;
    if(operNum ===1){
        anwser = +prompt(`Q${i}. ${rnNum1} + ${rnNum2} = ??`); 
        i++;
        if(anwser === (rnNum1+rnNum2)){
            alert('정답입니다!');
        }else if(anwser===0){
            break;
        }else{
            alert('틀렸어요!~~');
        }
    }
    if(operNum ===2){
        anwser = +prompt(`Q${i}. ${rnNum1} - ${rnNum2} = ??`);        
        i++;
        if(anwser === (rnNum1-rnNum2)){
            alert('정답입니다!');
        }else if(anwser===0){
            break;
        }else{
            alert('틀렸어요!~~');
        }
    }
    if(operNum ===3){
        anwser = +prompt(`Q${i}. ${rnNum1} * ${rnNum2} = ??`);
        i++;
        if(anwser === (rnNum1 * rnNum2)){
            alert('정답입니다!');
        }else if(anwser===0){
            break;
        }else{
            alert('틀렸어요!~~');
        }
    }
    if(operNum ===4){
        anwser = +prompt(`Q${i}. ${rnNum1} / ${rnNum2} = ??`);
        i++;
        if(anwser === (rnNum1 / rnNum2)){
            alert('정답입니다!');
        }else if(anwser===0){
            break;
        }else{
            alert('틀렸어요!~~');
        }
    }
}