// ���� ����
var sliderWrapper = document.getElementsByClassName('main-container'), // Ŭ������ main-container
    slideContainer = document.getElementsByClassName('slider-container'), // Ŭ������ slider-container
    slides = document.getElementsByClassName('slide'), // Ŭ������ slide
    slideCount = slides.length, // �����̵� ����
    currentIndex = 0,
    topHeight = 0, // �����̵帶�� ���̰� �ٸ� ��� �ִ� ���̸� �������� �θ� ����ش�.
    navPrev = document.getElementById('prev'), //���̵� prev
    navNext = document.getElementById('next'); //���̵� next

//�����̵��� ���� Ȯ���Ͽ� �θ��� ���̷� �����ϱ�
function calculateTallestSlide() {
    for (var i = 0; i < slideCount; i++) {
        if (slides[i].offsetHeight > topHeight) {
            topHeight = slides[i].offsetHeight;
        }
    }
    sliderWrapper[0].style.height = topHeight + 'px';
    slideContainer[0].style.height = topHeight + 'px';
}

calculateTallestSlide(); // �����̵�� �� ���� ���� ũ��� ��� �����̵��� ���̸� �����..

// �����̵尡 ������ ���η� �迭�ϱ�
for (var i = 0; i<slideCount; i++){
    slides[i].style.left =  i*100 + '%';
}

// �����̵� �̵� �Լ�
function goToSlide(idx){
    slideContainer[0].style.left = idx * -100 + '%';
    slideContainer[0].classList.add('animated');
    currentIndex = idx;
}

// ��ư��� ������Ʈ �Լ�


// ��ư�� Ŭ���ϸ� �����̵� �̵���Ű��
navPrev.addEventListener('click', function (event) {
    event.preventDefault();
    if (currentIndex <= 0){
        goToSlide(4);
    }
    else {
        goToSlide(currentIndex-1);
    }

}); // ���� ��ư Ŭ�� �� �� ��

navNext.addEventListener('click', function (event) {
    event.preventDefault();
    if (currentIndex >= 4){
        goToSlide(0);
    }
    goToSlide(currentIndex+1);
}); // ���� ��ư Ŭ�� �� �� ��


// ù��° �����̵� ���� ���̵��� �ϱ�





