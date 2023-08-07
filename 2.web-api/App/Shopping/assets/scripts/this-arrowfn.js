

// 화살표함수와 this 
// 화살표함수에서 this 는 상위 this를 가져옴
const dog = {
    name: '뽀삐',
    regularFn: function(){
        console.log('regular: ', this); // 자기자신 객체
    },
    arrowFn: ()=>{        
        console.log('arrow: ', this); // window 객체
    },
}

dog.regularFn();
dog.arrowFn();

console.log(`=================`);

const cat = {
    name: '나비',
    introduce: function(){
        console.log(`intro this`, this);
        setTimeout(()=>{
            console.log(`intro this`, this);
            console.log(`안녕 제 이름은 ${this.name}이에요`);   
        },2000);
    }
};

cat.introduce();