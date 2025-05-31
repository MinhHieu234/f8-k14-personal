import { questions } from "./const.js";
import { questionRef } from "./referances.js";

let curIndex = 0;
let interval;

let usedHelps = {
    fifty: false,
    audience: false,
    phone: false,
    expert: false
};



const restartGame = () => {
    curIndex = 0;
    usedHelps = {
        fifty: false,
        audience: false,
        phone: false,
        expert: false
    };
    questions.forEach(q => {
        delete q.userAns;
        delete q.isCorrect;
    });
    resetTimer();
    onShowQuestion();
};


const onShowQuestion = () => {
    const curQuestion = questions[curIndex];

    const titleRef = questionRef.querySelector('.question-title');
    titleRef.innerText = curQuestion.question;

    for (const key of ['a', 'b', 'c', 'd']) {
        const optionRef = questionRef.querySelector(`.question-option[value="${key}"]`);
        optionRef.innerText = `${key.toUpperCase()}: ${curQuestion[key]}`;
        optionRef.style.visibility = 'visible';
    }

    resetBackground();
    resetTimer();
    const rewardItems = document.querySelectorAll('#reward-list li');
    rewardItems.forEach(item => item.classList.remove('active'));


    const rewardIndex = 14 - curIndex;
    if (rewardItems[rewardIndex]) {
        rewardItems[rewardIndex].classList.add('active');
    }
};


const resetBackground = () => {
    questionRef.querySelectorAll('.question-option').forEach(ref => {
        ref.style.backgroundColor = '#fff';
    });
};


const addEvent = () => {

    for (const key of ['a', 'b', 'c', 'd']) {
        const answerRef = questionRef.querySelector(`.question-option[value="${key}"]`);
        answerRef.addEventListener('click', () => {
            const curQuestion = questions[curIndex];
            curQuestion.userAns = key;
            curQuestion.isCorrect = key === curQuestion.correctAns;

            resetBackground();
            answerRef.style.backgroundColor = 'red';
        });
    }


    document.querySelector('.check-btn').addEventListener('click', () => {
        const curQuestion = questions[curIndex];
        resetBackground();

        if (curQuestion.userAns && !curQuestion.isCorrect) {
            const wrongRef = questionRef.querySelector(`.question-option[value="${curQuestion.userAns}"]`);
            wrongRef.style.backgroundColor = 'red';

            const correctRef = questionRef.querySelector(`.question-option[value="${curQuestion.correctAns}"]`);
            correctRef.style.backgroundColor = 'lightgreen';

            setTimeout(() => {
                alert("❌ Bạn đã chọn sai! Trò chơi sẽ bắt đầu lại.");
                restartGame();
            }, 1000);

            return;
        }

        const correctRef = questionRef.querySelector(`.question-option[value="${curQuestion.correctAns}"]`);
        correctRef.style.backgroundColor = 'lightgreen';
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        curIndex++;
        if (curIndex < questions.length) {
            onShowQuestion();
        } else {
            alert('✅ Bạn đã hoàn thành tất cả câu hỏi!');
            clearInterval(interval);
        }
    });

    document.querySelector('.fifty-btn').addEventListener('click', () => {
        if (curIndex < 5 || usedHelps.fifty) return alert("❗Bạn không thể dùng 50-50 lúc này.");
        usedHelps.fifty = true;

        const curQuestion = questions[curIndex];
        const wrong = ['a', 'b', 'c', 'd'].filter(k => k !== curQuestion.correctAns);
        const toHide = wrong.sort(() => 0.5 - Math.random()).slice(0, 2);
        toHide.forEach(k => {
            const ref = questionRef.querySelector(`.question-option[value="${k}"]`);
            ref.style.visibility = 'hidden';
        });
    });


    document.querySelector('.audience-btn').addEventListener('click', () => {
        if (curIndex < 5 || usedHelps.audience) return alert("❗Bạn không thể hỏi khán giả lúc này.");
        usedHelps.audience = true;

        const curQuestion = questions[curIndex];
        const result = {};
        const options = ['a', 'b', 'c', 'd'];

        let remaining = 100;
        const correctPercent = Math.floor(Math.random() * 21) + 40; // 40–60%
        result[curQuestion.correctAns] = correctPercent;
        remaining -= correctPercent;

        const others = options.filter(k => k !== curQuestion.correctAns);
        for (let i = 0; i < others.length; i++) {
            if (i === others.length - 1) {
                result[others[i]] = remaining;
            } else {
                const val = Math.floor(Math.random() * (remaining + 1));
                result[others[i]] = val;
                remaining -= val;
            }
        }

        alert("📊 Khán giả chọn:\n" + options.map(k => `${k.toUpperCase()}: ${result[k]}%`).join("\n"));
    });


    document.querySelector('.phone-btn').addEventListener('click', () => {
        if (curIndex < 5 || usedHelps.phone) return alert("❗Không thể gọi điện lúc này.");
        usedHelps.phone = true;

        const curQuestion = questions[curIndex];
        const rand = Math.random();
        const guess = rand < 0.8
            ? curQuestion.correctAns
            : ['a', 'b', 'c', 'd'].filter(k => k !== curQuestion.correctAns)[Math.floor(Math.random() * 3)];

        alert(`📞 Người thân nghĩ là đáp án: ${guess.toUpperCase()}`);
    });

    document.querySelector('.expert-btn').addEventListener('click', () => {
        if (curIndex < 5 || usedHelps.expert) return alert("❗Không thể tư vấn lúc này.");
        usedHelps.expert = true;

        const guess = ['a', 'b', 'c', 'd'][Math.floor(Math.random() * 4)];
        alert(`🧠 Chuyên gia gợi ý: ${guess.toUpperCase()}`);
    });
};

addEvent();
onShowQuestion();
