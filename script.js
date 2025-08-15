const introScreen = document.getElementById('intro-screen');
const planner = document.getElementById('planner');
const changeSkinTypeBtn = document.getElementById('changeSkinType');
const curtain = document.getElementById('curtain');
let currentSkinType = localStorage.getItem('skinType');

// Show intro only if no skin type is stored
if (!currentSkinType) {
    introScreen.style.display = 'flex';
} else {
    applySkinType(currentSkinType);
    introScreen.style.display = 'none';
}

// Skin type selection
document.querySelectorAll('.skin-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        let type = btn.dataset.type;
        localStorage.setItem('skinType', type);
        applySkinType(type);
        introScreen.style.display = 'none';
    });
});

// Change skin type button
changeSkinTypeBtn.addEventListener('click', () => {
    introScreen.style.display = 'flex';
});

// Apply skin type gradient
function applySkinType(type) {
    planner.className = type;
}

// Curtain animation for day change (demo)
document.querySelectorAll('.day').forEach(day => {
    day.addEventListener('click', () => {
        curtain.classList.add('active');
        setTimeout(() => {
            curtain.classList.remove('active');
        }, 800);
    });
});
