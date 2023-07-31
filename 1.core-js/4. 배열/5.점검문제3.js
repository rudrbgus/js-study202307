/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 수정할 멤버 이름과 새로운 이름을 입력받고 
  해당 멤버를 수정한 뒤 수정 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 
   다시 수정할 이름을 입력할 수 있도록 하세요.
4. 한 명의 멤버를 정확하게 수정할때까지 프로그램은 계속되어야 합니다.
*/


let memberArray = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while(true){
  // 삭제하고 싶은 멤버의 이름을 가져오기
  let changeMember = prompt(`${memberArray}\n수정하고 싶은 멤버의 이름을 알려주세요(그만하고 싶으면: '그만')`);
  if(changeMember === '그만')break;
  if(!memberArray.includes(changeMember)){
    alert(`${changeMember}는 잘못된 이름입니다.`);
    continue;
  }
  //기존 멤버의 인덱스 번호를 가져옴
  let changeMemberIndex = memberArray.indexOf(changeMember);
  // 바꿀 멤버의 이름
  let exchangeMember = prompt('새로운 이름을 입력해주세요');
  // 기존멤버를 지우고 새로운 멤버를 넣기
  memberArray.splice(changeMemberIndex, 1, exchangeMember);
  // 수정된 멤버 알려주기
  alert(`수정 완료 ${memberArray}`);
}