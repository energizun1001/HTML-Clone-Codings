// 변수 지정
var sliderWrapper = document.getElementsByClassName('main-container'), // 클래스명 main-container
    slideContainer = document.getElementsByClassName('slider-container'), // 클래스명 slider-container
    slides = document.getElementsByClassName('slide'), // 클래스명 slide
    slideCount = slides.length, // 슬라이드 개수
    currentIndex = 0,
    topHeight = 0, // 슬라이드마다 높이가 다를 경우 최대 높이를 기준으로 부모를 잡아준다.
    navPrev = document.getElementById('prev'), //아이디 prev
    navNext = document.getElementById('next'); //아이디 next

//슬라이드의 높이 확인하여 부모의 높이로 지정하기
function calculateTallestSlide() {
    for (var i = 0; i < slideCount; i++) {
        if (slides[i].offsetHeight > topHeight) {
            topHeight = slides[i].offsetHeight;
        }
    }
    sliderWrapper[0].style.height = topHeight + 'px';
    slideContainer[0].style.height = topHeight + 'px';
}

calculateTallestSlide(); // 슬라이드들 중 제일 높은 크기로 모든 슬라이드의 높이를 맞춘다..

// 슬라이드가 있으면 가로로 배열하기
for (var i = 0; i<slideCount; i++){
    slides[i].style.left =  i*100 + '%';
}

// 슬라이드 이동 함수
function goToSlide(idx){
    slideContainer[0].style.left = idx * -100 + '%';
    slideContainer[0].classList.add('animated');
    currentIndex = idx;
}

// 버튼기능 업데이트 함수


// 버튼을 클릭하면 슬라이드 이동시키기
navPrev.addEventListener('click', function (event) {
    event.preventDefault();
    if (currentIndex <= 0){
        goToSlide(4);
    }
    else {
        goToSlide(currentIndex-1);
    }

}); // 이전 버튼 클릭 시 할 일

navNext.addEventListener('click', function (event) {
    event.preventDefault();
    if (currentIndex >= 4){
        goToSlide(0);
    }
    goToSlide(currentIndex+1);
}); // 다음 버튼 클릭 시 할 일


// 첫번째 슬라이드 먼저 보이도록 하기





