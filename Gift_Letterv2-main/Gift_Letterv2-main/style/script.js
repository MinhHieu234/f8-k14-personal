const envelope = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');
const textContainer = document.getElementById('text');
const photoBackground = document.getElementById('photo-background');
const giftButton = document.getElementById('gift-button');

// ================== CONFIG ==================
const TOTAL_IMAGES = 6;
const TYPING_SPEED = 30;
const WAVE_INTERVAL_TIME = 7000;
// ============================================

const letterText = `
<strong>Dear My Friend,</strong>
<p style="text-indent: 15px; margin-top: 10px;">
    Hôm nay là một ngày rất đặc biệt – ngày bạn chào đời 🎉. Chúc bạn có một sinh nhật thật vui vẻ, nhiều niềm vui, tiếng cười và những khoảnh khắc đáng nhớ bên gia đình, bạn bè.
</p>
<p style="text-indent: 15px; margin-top: 10px;">
    Mong rằng trong tuổi mới, bạn sẽ luôn mạnh khỏe, gặp nhiều may mắn và đạt được những điều mình mong muốn. Cảm ơn bạn vì đã luôn là một người bạn tuyệt vời, mang lại năng lượng tích cực và những kỷ niệm đẹp.
</p>
<p style="text-indent: 15px; margin-top: 10px;">
    Chúc cho mọi dự định sắp tới của bạn đều suôn sẻ, học tập và công việc ngày càng thuận lợi. Hy vọng năm mới của bạn sẽ thật trọn vẹn và ý nghĩa.
</p>
<p class="love" style="text-align: center; font-weight: bold; margin-block: 15px;">
    HAPPY BIRTHDAY 🎂🎉
</p>
`;

let typingStarted = false;
let waveInterval = null;

// ================== PHOTO WAVE ==================
function spawnWave() {
    // Clear ảnh cũ
    document.querySelectorAll('.random-photo').forEach(img => {
        img.classList.remove('show');
        setTimeout(() => img.remove(), 1200);
    });

    const isMobile = window.innerWidth <= 600;
    const rows = isMobile ? 3 : 2;
    const cols = isMobile ? 2 : 3;

    let positions = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            positions.push({ row: r, col: c });
        }
    }
    positions.sort(() => Math.random() - 0.5);

    for (let i = 0; i < TOTAL_IMAGES; i++) {
        const img = document.createElement('img');
        img.src = `./style/img/Anh (${i + 1}).jpg`;
        img.className = 'random-photo';

        const pos = positions[i];
        const cellW = 100 / cols;
        const cellH = 100 / rows;

        const jitterX = (Math.random() - 0.5) * cellW * 0.6;
        const jitterY = (Math.random() - 0.5) * cellH * 0.6;

        img.style.left = `${pos.col * cellW + cellW / 2 + jitterX}%`;
        img.style.top = `${pos.row * cellH + cellH / 2 + jitterY}%`;
        img.style.setProperty('--rotation', `${(Math.random() - 0.5) * 30}deg`);
        img.style.transitionDelay = `${Math.random()}s`;

        photoBackground.appendChild(img);
        setTimeout(() => img.classList.add('show'), 100);
    }
}

// ================== ENVELOPE CLICK ==================
heart.addEventListener('click', () => {
    envelope.classList.toggle('flap');
    envelope.classList.toggle('open');

    if (envelope.classList.contains('open')) {
        const music = document.getElementById('bg-music');
        music?.play().catch(() => {});

        spawnWave();
        waveInterval = setInterval(spawnWave, WAVE_INTERVAL_TIME);

        if (!typingStarted) {
            typingStarted = true;
            setTimeout(startTyping, 2000);
        }
    } else {
        clearInterval(waveInterval);
        document.querySelectorAll('.random-photo').forEach(img => {
            img.classList.remove('show');
            setTimeout(() => img.remove(), 1200);
        });
    }
});

// ================== TYPEWRITER ==================
function startTyping() {
    let i = 0;
    textContainer.innerHTML = '';

    function type() {
        if (i < letterText.length) {
            if (letterText[i] === '<') {
                const tagEnd = letterText.indexOf('>', i);
                textContainer.innerHTML += letterText.slice(i, tagEnd + 1);
                i = tagEnd + 1;
            } else {
                textContainer.innerHTML += letterText[i++];
            }

            const letter = document.querySelector('.letter');
            letter.scrollTop = letter.scrollHeight;

            setTimeout(type, TYPING_SPEED);
        } else {
            document.body.classList.add('typing-done');
            setTimeout(() => {
                giftButton.classList.add('show');
            }, 500);
        }
    }

    type();
}

// ================== GIFT BUTTON ==================
giftButton.addEventListener('click', () => {
    if (typeof window.initUniverse === 'function') {
        window.initUniverse();
    }
});
