document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.fadeImage');
    setTimeout(function(){
        image.style.opacity = 1;
    }, 400)
  });

// section02 
document.addEventListener('DOMContentLoaded', function() {
    const section02 = document.querySelector('#section02');
    const section02Image = document.querySelector('.section02-image');

    // Intersection Observer 설정
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1 // 0~1 사이의 값, 요소가 50% 이상 보일 때 콜백 함수 실행
    };

    // Intersection Observer 콜백 함수
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // section02에 진입하면 효과 적용
            if (entry.isIntersecting) {
                section02Image.style.opacity = 1;
                section02Image.style.transform = 'translateY(0)';
                // 한 번만 콜백 함수 실행하도록 관찰을 멈춥니다.
                observer.unobserve(entry.target);
            }
        });
    };

    // Intersection Observer 인스턴스 생성
    const observer = new IntersectionObserver(callback, options);

    // section02를 관찰 대상으로 등록
    observer.observe(section02);
});

// section03
document.addEventListener('DOMContentLoaded', function() {
    const section03 = document.querySelector('#section03');
    const section03text01 = document.querySelector('.section03-text01');
    const section03text02 = document.querySelector('.section03-text02');
    const section03text03 = document.querySelector('.section03-text03');
    const section03text04 = document.querySelector('.section03-text04');
    const section03Image = document.querySelector('.section03-image');

    // Intersection Observer 설정
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1 // 0~1 사이의 값, 요소가 50% 이상 보일 때 콜백 함수 실행
    };

    // Intersection Observer 콜백 함수
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // section03에 진입하면 효과 적용
            if (entry.isIntersecting) {
                section03Image.style.opacity = 1;
                section03Image.style.transform = 'translateY(0)';
                section03text01.style.opacity = 1;
                section03text01.style.transform = 'translateY(0)';
                section03text02.style.opacity = 1;
                section03text02.style.transform = 'translateY(0)';
                section03text03.style.opacity = 1;
                section03text03.style.transform = 'translateY(0)';
                section03text04.style.opacity = 1;
                section03text04.style.transform = 'translateY(0)';
                // 한 번만 콜백 함수 실행하도록 관찰을 멈춥니다.
                observer.unobserve(entry.target);
            }
        });
    };

    // Intersection Observer 인스턴스 생성
    const observer = new IntersectionObserver(callback, options);

    // section03를 관찰 대상으로 등록
    observer.observe(section03);
});
