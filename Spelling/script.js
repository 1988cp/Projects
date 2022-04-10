let spelling = ['accident', 'accidentally', 'actual', 'actually', 'address', 'answer', 'appear', 'arrive', 'believe', 'bicycle', 'breath', 'breathe', 'build', 'busy', 'business', 'calendar', 'caught', 'center', 'century', 'certain', 'circle', 'complete', 'consider', 'continue', 'decide', 'describe', 'different', 'difficult', 'disappear', 'early', 'earth', 'eight', 'eighth', 'enough', 'exercise', 'experience'];

const y56 = ['accommodate', 'soldier', 'accompany', 'according', 'achieve', '', 'frequently', 'stomach', 'system', 'physical', 'muscle', 'determined', 'curiosity', 'definite', 'bargain', 'bruise', 'interrupt', 'forty', 'harass', 'programme', 'leisure', 'individual', 'relevant', 'rhyme', 'vehicle', 'persuade', 'occupy', 'queue', 'recognise']

const y34 = ['accident', 'accidentally', 'actual', 'address', 'answer', 'arrive', 'believe', 'bicycle', 'breath', 'breathe', 'build', 'busy', 'business', 'calendar', 'caught', 'center', 'century', 'certain', 'circle', 'complete', 'consider', 'continue', 'decide', 'describe', 'different', 'difficult', 'disappear', 'early', 'earth', 'eight', 'eighth', 'enough', 'exercise', 'experience'];

const newWordBtn = document.querySelector('.newWordBtn');

const showBtn = document.querySelector('.showBtn');

const again = document.querySelector('.again');

const answer = document.querySelector('.answer');

const newWord = document.querySelector('.newWord');

const fiveSix = document.querySelector('.fiveSix');

const threeFour = document.querySelector('.threeFour');

const result = document.querySelector('.result')

let speak = function () {
    let msg = new SpeechSynthesisUtterance();
    msg.text = spelling[randomIndex];
    window.speechSynthesis.speak(msg);
}

let randomIndex

newWordBtn.addEventListener('click', function () {
    randomIndex = Math.floor(Math.random() * spelling.length);
    newWord.textContent = spelling[randomIndex];
    newWord.classList.add('hidden');
    speak();
    answer.value = ''
    newWord.classList.remove('correct')
    result.textContent = 'Good luck!'
})

showBtn.addEventListener('pointerdown', function () {
    newWord.classList.remove('hidden');
})

showBtn.addEventListener('mouseup', function () {
    newWord.classList.add('hidden');
})

showBtn.addEventListener('focusout', function () {
    newWord.classList.add('hidden');
})

showBtn.addEventListener('mouseleave', function () {
    newWord.classList.add('hidden');
})

again.addEventListener('click', function () {
    if (randomIndex !== undefined) {
        speak()
    }
})

answer.addEventListener('input', function () {
    if (answer.value === spelling[randomIndex]) {
        document.querySelector('.result').textContent = 'Well done!';
        newWord.classList.remove('hidden');
        newWord.classList.add('correct');

    } else {
        if (answer.value.length > spelling[randomIndex].length - 2) {
        document.querySelector('.result').textContent = 'Not quite - keep trying!';
        } else {
            document.querySelector('.result').textContent = 'Good luck!'
        }
    }
})

fiveSix.addEventListener('click', function () {
    spelling.length = 0
    spelling.push.apply(spelling, y56)
    fiveSix.classList.remove('solidButton')
    fiveSix.classList.add('emptyButton')
    threeFour.classList.remove('emptyButton')
    threeFour.classList.add('solidButton')
})

threeFour.addEventListener('click', function () {
    spelling.length = 0
    spelling.push.apply(spelling, y34)
    threeFour.classList.remove('solidButton')
    threeFour.classList.add('emptyButton')
    fiveSix.classList.remove('emptyButton')
    fiveSix.classList.add('solidButton')
})

newWordBtn.addEventListener('mousedown', function () {
    newWordBtn.classList.add('pressed');
})

newWordBtn.addEventListener('mouseup', function () {
    newWordBtn.classList.remove('pressed');
})

showBtn.addEventListener('mousedown', function () {
    showBtn.classList.add('pressed');
})

showBtn.addEventListener('mouseup', function () {
    showBtn.classList.remove('pressed');
})

again.addEventListener('mousedown', function () {
    again.classList.add('pressed');
})

again.addEventListener('mouseup', function () {
    again.classList.remove('pressed');
})