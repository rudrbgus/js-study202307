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
  ...$addMovieModal.querySelectorAll("input")
];

const [$titleInput, $imgUrlInput, $ratingInput] = $userInputs;
const $entryTextSection = document.getElementById('entry-text');

// 영화목록 ul태그
const $movieList = document.getElementById('movie-list');


const CLASS_VISIBLE = 'visible'

// 영화 정보 목록 배열
const movies = [];

// ============ 유틸함수, 일반함수 정의============= //

// 모든 인풋을 리셋하는 함수
const clearMovieModalInput = () =>{
    $userInputs.forEach($input => $input.value = '');
};

// 영화 추가 모달을 닫는 함수
const closeAddModal = () =>{
    $backdrop.classList.remove(CLASS_VISIBLE);
    $addMovieModal.classList.remove(CLASS_VISIBLE);
    clearMovieModalInput();
};

//화면에 새로운 영화정보를 랜더링하는 함수
const renderNewMovie = newMovie => {
    const $newMovie = document.createElement('li');
    $newMovie.classList.add('mvoie-element');

    $newMovie.innerHTML = `
    <div class="movie-element__image">
      <img src="${newMovie.image}" alt="${newMovie.title}">
    </div>
    <div class="movie-element__info">
      <h2>${newMovie.title}</h2>
      <p>${newMovie.rating} / 5</p>
    </div>
  `;


    $movieList.appendChild($newMovie);
};
// ===== 이벤트 핸들러 및 이벤트 바인딩 ====== //

// 영화 추가버튼 기능을 수행하는 핸들러
const addMovieHandler = e =>{
    const titleValue = $titleInput.value; // 제목 입력란 값
    const imgUrlValue = $imgUrlInput.value; // 이미지 경로
    const ratingValue = $ratingInput.value; // 평점입력값

    //객체로 묶기
    const newMovie = {
        title : titleValue,
        image : imgUrlValue,
        rating : ratingValue
    };
    movies.push(newMovie);
    console.log(movies);    
    // 모달 닫기
    closeAddModal();
    // 화면에 입력한 영화정보 렌더링하기
    renderNewMovie(newMovie);
};


// 영화 추가 모달창을 띄우는 핸들러
const showMovieModalHandler = e =>{
    $addMovieModal.classList.add(CLASS_VISIBLE);
    $backdrop.classList.add(CLASS_VISIBLE);
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

// Add Movie Modal 추가버튼 클릭이벤트
$confirmAddMovieButton.addEventListener('click', addMovieHandler);








