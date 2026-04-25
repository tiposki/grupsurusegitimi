/* ===== CORE APP LOGIC ===== */
const clickSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YVoGAACAgICAgICAgICAgICAgICAgICAgICAgICAf3+AgYGBgICAgoKBf3+Af4CAgH9/gIGBgoGAgYCBgH9+f3+AgIGCgoKBgYCAgH9+fn+AgoODg4KBgH9+fn5/gIGDg4OCgYB/fn5+f4CBgoODgoGAf35+fn+AgYKDg4KBgH9+fn5/gIGCg4OCgYB/fn5+f4CBgoODgoGAf35+fn+AgIGCgoKBgIB/fn5/f4CBgoKCgYGAf39+fn+AgIGCgoKBgIB/f35/f4CBgoKCgYCAf39+fn+AgIGBgoGBgIB/f39/f4CAgYGBgYCAgH9/f39/gICBgYGBgICAgH9/f3+AgICBgYGAgICAgH9/f4CAgICBgYGAgICAgH9/f4CAgICAgYCAgICAgICAgICAgICAgICAgICAgA==');
clickSound.volume = 0.3;

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
}

function closeWelcomeModal() {
    playClick();
    document.getElementById('welcomeModal').classList.remove('active');
}

function toggleTheme() {
    playClick();
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.getElementById('sunIcon').style.display = isDark ? 'block' : 'none';
    document.getElementById('moonIcon').style.display = isDark ? 'none' : 'block';
    localStorage.setItem('izmok-theme', isDark ? 'light' : 'dark');
}

function showSection(section) {
    playClick();
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(section === 'education' ? 'navEducation' : 'navExam').classList.add('active');
    document.getElementById('educationSection').style.display = section === 'education' ? '' : 'none';
    document.getElementById('examSection').style.display = section === 'exam' ? '' : 'none';
}

function showModulesGrid() {
    playClick();
    document.getElementById('modulesGrid').style.display = '';
    document.getElementById('moduleContent').style.display = 'none';
}

function openModule(idx) {
    playClick();
    document.getElementById('modulesGrid').style.display = 'none';
    document.getElementById('moduleContent').style.display = '';
    renderModule(idx);
}

function startExam() {
    playClick();
    document.getElementById('examIntro').style.display = 'none';
    document.getElementById('examContent').style.display = '';
    renderExam();
}

function submitExam() {
    playClick();
    gradeExam();
}

function retryExam() {
    playClick();
    document.getElementById('examResults').style.display = 'none';
    document.getElementById('examIntro').style.display = '';
    document.getElementById('examContent').style.display = 'none';
}

// Theme init
(function() {
    const saved = localStorage.getItem('izmok-theme');
    if (saved === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('sunIcon').style.display = 'none';
        document.getElementById('moonIcon').style.display = 'block';
    }
})();
