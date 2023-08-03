// 모달 엘리먼트
const $addMovieModal = document.getElementById("add-modal");
const $deleteMovieModal = document.getElementById('delete-modal');

// 영화 추가 버튼
const $addMovieButton = document.querySelector("header button");
const $backdrop = document.getElementById("backdrop");

// 영화 추가 모달안에 있는 확인, 취소 버튼
const $cancelAddMovieButton = $addMovieModal.querySelector(".btn--passive");
const $confirmAddMovieButton = $cancelAddMovieButton.nextElementSibling;

// 영화 추가 모달 안에 있는 입력 엘리먼트들
const $userInputs = [
  ...$addMovieModal.querySelectorAll("input"),
];

const [$titleInput, $imgUrlInput, $ratingInput] = $userInputs;
const $entryTextSection = document.getElementById('entry-text');

const CLASS_VISIBLE = 'visible'
// ===== 이벤트 핸들러 및 이벤트 바인딩 ====== //

// 영화 추가 모달창을 띄우는 핸들러
const showMovieModalHandler = e =>{
    $addMovieModal.classList.add(CLASS_VISIBLE);
    $backdrop.classList.add(CLASS_VISIBLE);
};

const closeAddModal = () =>{
    $backdrop.classList.remove(CLASS_VISIBLE);
    $addMovieModal.classList.remove(CLASS_VISIBLE);
};

// backDrop 영역을 클릭하면 모달이 닫히는 핸들러
const backDropHanlder = e =>{
    closeAddModal();
};

// 영화 추가 모달창의 추소버튼을 누르면 모달이 닫히는 핸들러
const closeMovieModalHandler = e =>{
    closeAddModal();
}


// Add Moive버튼 클릭이벤트
$addMovieButton.addEventListener('click', showMovieModalHandler);

// backdrop 영역 클릭이벤트
$backdrop.addEventListener('click', backDropHanlder);

// Add Movie Modal 취소버튼 클릭이벤트
$cancelAddMovieButton.addEventListener('click', closeMovieModalHandler);








