document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.fadeImage');
    setTimeout(function(){
        image.style.opacity = 1;
    }, 300)
  });

// main.js
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
