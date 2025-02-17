document.addEventListener("DOMContentLoaded", function () {
    const mainBar = document.querySelector(".mainBar");
    const navItems = document.querySelectorAll(".nav-item");
    const store = document.querySelector(".store");
    const searchIcon = document.querySelector(".search-icon");
    const backIcon = document.querySelector(".back");
    const searchInput = document.getElementById("searchInput"); // searchInput 요소
    let activeDropdown = null; // 현재 열려 있는 dropdown
    let isFirstOpen = true; // 처음 열릴 때 애니메이션 적용 여부

    // store 요소가 display: none이 아닌 경우에만 dropdown을 보여주는 함수
    function isStoreVisible() {
        return window.getComputedStyle(store).display !== "none";
    }

    // 모든 nav-item에 대해 드롭다운을 클릭 시만 보이도록 설정
    navItems.forEach((item) => {
        const dropdown = item.querySelector(".dropdown");

        item.addEventListener("mouseenter", function () {
            // 해당 nav-item에 마우스가 들어왔을 때 드롭다운을 보여줌
            if (isStoreVisible()) {
                dropdown.classList.add("open");
                dropdown.classList.add("with-animation");
                activeDropdown = dropdown;
                mainBar.style.backgroundColor = "rgb(22, 22, 22)"; // 배경색 변경
            }
        });

        item.addEventListener("mouseleave", function () {
            // nav-item을 벗어났을 때 드롭다운을 숨김
            dropdown.classList.remove("open", "with-animation");
            activeDropdown = null;
            mainBar.style.backgroundColor = ""; // 배경색 원래대로 복구
        });
    });

    // search-icon과 back 아이콘 클릭 시 dropdown만 보이도록 설정
    [searchIcon, backIcon].forEach((icon) => {
        const dropdown = icon.closest('.nav-item').querySelector(".dropdown");

        icon.addEventListener("click", function () {
            if (dropdown.classList.contains("open")) {
                dropdown.classList.remove("open", "with-animation");
                mainBar.style.backgroundColor = ""; // 배경색 원래대로 복구
                searchInput.value = ""; // searchInput 초기화
            } else {
                dropdown.classList.add("open");
                dropdown.classList.add("with-animation");
                mainBar.style.backgroundColor = "rgb(22, 22, 22)"; // 배경색 변경
            }
        });

        dropdown.addEventListener("mouseleave", function () {
            dropdown.classList.remove("open", "with-animation");
            mainBar.style.backgroundColor = ""; // 배경색 원래대로 복구
            searchInput.value = ""; // searchInput 초기화
        });
    });

    // 드롭다운 애니메이션과 관련된 CSS 클래스를 추가
    mainBar.addEventListener("mouseleave", function (event) {
        if (!event.relatedTarget || !mainBar.contains(event.relatedTarget)) {
            if (activeDropdown) {
                activeDropdown.classList.remove("open", "with-animation");
                activeDropdown = null;
                mainBar.style.backgroundColor = ""; // 배경색 원래대로 복구
                searchInput.value = ""; // searchInput 초기화
            }
        }
    });
});

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

// section03 efect
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

//section04-Text

const section04text01 = document.querySelector('.section04-text01');
const section04text02 = document.querySelector('.section04-text02');

const observerText = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
        }
    });
},{threshold: 0.5});

observerText.observe(section04text01);
observerText.observe(section04text02);

//section04-video
const video = document.querySelector('.section04-video');

// 이미 재생된 동영상인지 확인하는 변수
let hasPlayed = false;

// 동영상의 loop 속성 제거
video.loop = false;

// IntersectionObserver 콜백 함수 정의
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasPlayed) {
            // 동영상이 화면에 보이고 아직 재생되지 않았다면 재생 시작
            entry.target.play();
            entry.target.playbackRate =  2; // 재생 속도
            hasPlayed = true;  // 동영상이 재생되었음을 표시
        }
        
        // 동영상이 화면에 보이면 서서히 나타나게 함
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1; // 화면에 보이면 opacity를 1로 변경
        } else {
            entry.target.style.opacity = 0; // 화면에서 벗어나면 opacity를 0으로 변경
        }
    });
}, {
    threshold: 0.5 // 화면에 50% 이상 보일 때 동작 시작
});

// 동영상 요소를 옵저버에 등록합니다.
observer.observe(video);
