const projects = [
    {
        category: "game",
        title: "Throught The Night",
        date: "Dec 2024",
        techStack: ["unity", "csharp"],
        description: "2D Unity game, individually developed. Most of the characters' assets were made by me.",
        image: "images/sc_unity_1.png",
        githubLink: "https://yoonyohan6.itch.io/through-the-night"
    },
    {
        category: "game",
        title: "Wizard's Last Standing",
        date: "Apr 2025",
        techStack: ["unity", "csharp"],
        description: "3D Topdown Unity game, individually developed.",
        image: "images/sc_unity_2.png",
        githubLink: "https://devyohan.itch.io/wizards-last-standing",
        youtubeId: "LIWnXXp5OBg"
    },
    {
        category: "game",
        title: "Survive and Find Star",
        date: "Nov 2025",
        techStack: ["unity", "csharp"],
        description: "3D FPS Game developed for school project.",
        image: "images/sc_unity_3.png",
        githubLink: "https://devyohan.itch.io/survive-and-find-star",
        youtubeId: "TeyYheX0-3I"
    },
    {
        category: "app",
        title: "Focus Pomodoro",
        date: "Sep 2025",
        techStack: ["swift", "xcode"], 
        description: "Helpful iOS app for studying using Pomodoro Technique.",
        image: "images/sc_pomodoro_1.png", 
        githubLink: "https://github.com/Yohan678/StudyApp.git",
        youtubeId: "iUMBT2s9pY0"
    },
    {
        category: "app",
        title: "LOL Profile Finder",
        date: "current", //1/28/26
        techStack: ["flutter", "dart"],
        description: "A simple mobile app to find League of Legends player profiles and states from the Riot Games API.",
        image: "images/2_12_26_v3.png",
        githubLink: "https://github.com/Yohan678/LOLFinder.git"
    },
    {
        category: "devlog",
        title: "Devlog #1",
        date: "Feb 2026",
        techStack: ["unrealengine"],
        description: "First Devlog",
        image: "images/devlog1_img.png",
        localVideo: "",
        githubLink: "pdfs/GEP_DevLog1.pdf"
    },
    {
        category: "devlog",
        title: "Devlog #2",
        date: "Mar 2026",
        techStack: ["unrealengine"],
        description: "2nd Devlog",
        image: "images/devlog2_img.png",
        localVideo: "videos/devlog_2.mp4",
        githubLink: "pdfs/GEP_DevLog2.pdf"
    },
    {
        category: "devlog",
        title: "Devlog #3",
        date: "Apr 2026",
        techStack: ["unrealengine"],
        description: "3rd Devlog",
        image: "images/devlog3_img.png",
        localVideo: "videos/devlog_3.mp4",
        githubLink: "pdfs/GEP_DevLog3.pdf"
    }
];

function renderProjects() {
    // 3가지 섹션의 위치를 찾습니다.
    const gameContainer = document.getElementById('game-projects');
    const appContainer = document.getElementById('app-projects');
    const devlogContainer = document.getElementById('devlog-projects');

    // 중복 방지를 위해 기존 내용을 비워줍니다.
    if(gameContainer) gameContainer.innerHTML = '';
    if(appContainer) appContainer.innerHTML = '';
    if(devlogContainer) devlogContainer.innerHTML = '';

    projects.forEach(project => {
        // ① 기술 스택 아이콘 생성
        const techIcons = project.techStack.map(tech =>
            `<i class="devicon-${tech}-plain colored"></i>`
        ).join('');

        // ② 카테고리에 따른 버튼 텍스트/아이콘 설정
        let buttonText = "View on Github";
        let buttonIcon = "💻";

        if (project.category === 'game') {
            buttonText = "Play on itch.io";
            buttonIcon = "🎮";
        } else if (project.category === 'devlog'){
            buttonText = "View Document";
            buttonIcon = "📄"
        }

        // ③ 비디오 HTML 생성 (로컬 MP4, 비메오, 유튜브 모두 지원)
        let videoHTML = "";
        
        if (project.localVideo) {
            // 용량 최적화(preload="metadata")가 적용된 로컬 비디오
            videoHTML = `
                <div class="video-container">
                    <video controls preload="metadata" width="100%" height="100%" style="position: absolute; top: 0; left: 0; object-fit: cover;">
                        <source src="${project.localVideo}" type="video/mp4">
                        브라우저가 비디오 태그를 지원하지 않습니다.
                    </video>
                </div>
            `;
        } else if (project.vimeoId) {
            videoHTML = `
                <div class="video-container">
                    <iframe src="https://player.vimeo.com/video/${project.vimeoId}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                </div>
            `;
        } else if (project.youtubeId) {
            videoHTML = `
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/${project.youtubeId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                </div>
            `;
        }

        // 혹시 이미지가 비어있을 경우를 대비한 처리 (에러 방지)
        const imageUrl = project.image ? project.image : 'icons/default_image.png';

        // ④ 최종 카드 HTML 조립
        const cardHTML = `
            <div class="project-card ${project.category === 'app' ? 'app-card-style' : ''}">
                <div class="card-image-wrapper">
                    <img src="${imageUrl}" alt="${project.title}">
                </div>
                <div class="card-info">
                    <div class="card-header">
                        <h3>${project.title}</h3>
                        <span class="project-date">${project.date}</span>
                    </div>
                    <div class="tech-stack-icons">${techIcons}</div>
                    <p class="description">${project.description}</p>
                    
                    ${videoHTML}

                    <a href="${project.githubLink}" target="_blank" class="github-btn">
                        ${buttonIcon} ${buttonText} <span>→</span>
                    </a>
                </div>
            </div>
        `;

        // ⑤ 알맞은 구역에 카드 넣기
        if (project.category === 'game' && gameContainer) {
            gameContainer.innerHTML += cardHTML;
        } else if (project.category === 'app' && appContainer) {
            appContainer.innerHTML += cardHTML;
        } else if (project.category === 'devlog' && devlogContainer) {
            devlogContainer.innerHTML += cardHTML;
        }
    });
}


// ==========================================
// 2. 웹페이지가 열리면 자동으로 실행될 기능들
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // ① 부드러운 스크롤 (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            // href가 "#" 하나만 있는 경우는 무시
            if (targetId && targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ② 네비게이션 바(메뉴) 불러오기
    fetch('nav.html')
        .then(response => {
            if (!response.ok) throw new Error("네비게이션 바를 불러오지 못했습니다.");
            return response.text();
        })
        .then(data => {
            const navPlaceholder = document.getElementById('navbar-placeholder');
            if (navPlaceholder) {
                navPlaceholder.innerHTML = data;
            }
        })
        .catch(error => console.error("Error loading nav.html:", error));

    // ③ 프로젝트 데이터가 존재하면 카드 그리기 실행
    if (typeof projects !== 'undefined') {
        renderProjects();
    }
});