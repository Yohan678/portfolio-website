const projects = [
    {
        category: "game",
        title: "Example 1",
        date: "Dec 2025",
        techStack: ["unity", "csharp"],
        description: "This is example description.  This is example description. This is example description.",
        image: "icons/unity_white.png",
        githubLink: "#"
    },
    {
        category: "game",
        title: "Example 2",
        date: "Dec 2026",
        techStack: ["unity", "csharp"],
        description: "This is example description.  This is example description. This is example description.",
        image: "icons/unity_white.png",
        githubLink: "#"
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
        title: "Tarot AI",
        date: "Aug 2025",
        techStack: ["flutter", "dart"], 
        description: "This is example description.This is example description.",
        image: "images/app_screenshot_2.png", 
        githubLink: "#"
    }
];

function renderProjects() {
    const gameContainer = document.getElementById('game-projects');
    const appContainer = document.getElementById('app-projects');

    if(gameContainer) gameContainer.innerHTML = '';
    if(appContainer) appContainer.innerHTML = '';

    projects.forEach(project => {
        const techIcons = project.techStack.map(tech =>
            `<i class="devicon-${tech}-plain colored"></i>`
        ).join('');

        let buttonText = "";
        let buttonIcon = "";

        if (project.category === 'game') {
            buttonText = "Play on itch.io";
            buttonIcon = "🎮";
            
        } else {
            buttonText = "View on Github";
            buttonIcon = "💻";
        }

        let videoHTML = "";
        if (project.youtubeId) {
            videoHTML = `
                <div class="video-container ${project.category === 'app' ? 'vertical-video' : ''}">
                    <iframe 
                        src="https://www.youtube.com/embed/${project.youtubeId}" 
                        title="${project.title} video" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        loading="lazy">
                    </iframe>
                </div>
            `;
        }

        const cardHTML = `
            <div class="project-card ${project.category === 'app' ? 'app-card-style' : ''}">
                <div class="card-image-wrapper">
                    <img src="${project.image}" alt="${project.title}">
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

        if (project.category === 'game') {
            gameContainer.innerHTML += cardHTML;
        } else if (project.category === 'app') {
            appContainer.innerHTML += cardHTML;
        }
    });
}

document.addEventListener('DOMContentLoaded', renderProjects)