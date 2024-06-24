const quizData = [
    {
        question: "What level of memory loss is the individual experiencing?",
        a:"No loss of memory or sporadic forgetfulness",
        b:"Consistent forgetfulness and partial recollection of events",
		c:"Moderate memory loss that impacts recent events or daily activities more severely than distant memories",
		d:"Severe memory loss, recollection of recent events limited, long term memories may be retained but incomplete",
		e:"Severe memory loss, almost no recollection of recent events and highly fragmented long-term memory",
        correct: "a",
    },
    {
        question: "What level of time and geographic disorientation is the individual experiencing?",
        a: "No disorientation",
        b:"Minor difficulty with time relationships",
		c:"Moderate difficulty with time relationships and occasional geographic disorientation ( getting lost within an area well-known)",
		d:"Severe difficulty with time relationships; disoriented to time and place on a daily basis",
		e:"Oriented to present moment only or to their present moment",
        correct: "a",
    },
    {
        question: "Is the individual having challenges with judgement and product solving?",
        a:"Shows no diminished ability in handling problems, business and financial affairs",
		b:"Shows minor impairment in judgment and with solving problems relative to past performance on similar tasks",
		c:"Has moderate difficulty in handling problems, may show occasional social judgment issues",
		d:"Has severe difficulty in handling problems and presents persistent social judgment issues",
		e:"Completely unable to make judgments or solve problems",
        correct: "a",
    },
    {
        question: "How does the individual function in their community, outside of their home?",
        a:"They function independently continuing to shop, volunteer and socialize as they have in the past",
		b:"They show slight impairment in shopping and socializing but can do so with minor assistance",
		c:"Unable to function independently outside the home but can appear normal to a casual observer",
		d:"Unable to function independently outside the home but functions well enough to be taken to some functions",
		e:"Cannot be taken outside the home without constant monitoring",
        correct: "a",
    },
	{
        question: "How does the individual function within their home with chores and hobbies? (Do not consider personal hygiene)",
        a:"They continue to complete in-home chores, pursue hobbies and maintain interests as they have always done",
		b:"They continue to perform chores and pursue interests but with some challenges due to cognitive issues",
		c:"They have given up performing more complex chores and interests but still pursue simpler ones",
		d:"They can perform only simple chores and may not do so correctly",
		e:"They have no significant function within the home",
        correct: "a",
    },
	{
        question: "What level of personal hygiene and personal care does the individual maintain?",
        a:"They are fully capable of self-care and do so without prompting",
		b:"They are capable of self-care but may require the occasional prompt and assistance with clothing decisions",
		c:"They require significant assistance with self-care, frequent prompting and have difficulty keeping track of their personal effects",
		d:"They require daily assistance with hygiene, personal care and are frequently incontinent",
        correct: "a",
    },
	
	


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
	e_text.innerText = currentQuizData.e
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>
		   recommended to take SMMSE test</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})