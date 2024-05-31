const answer1 = document.getElementById('correct');
const incanswer2 = document.getElementById('incorrect')
const incanswer3 = document.getElementById('incorrect2')

const answer4 = document.getElementById('correct2');
const incanswer5 = document.getElementById('incorrect3')
const incanswer6 = document.getElementById('incorrect4')

const answer7 = document.getElementById('correct5');
const incanswer8 = document.getElementById('incorrect11')
const incanswer9 = document.getElementById('incorrect10')

const answer10 = document.getElementById('correct13');
const incanswer11 = document.getElementById('incorrect6')
const incanswer12 = document.getElementById('incorrect5')

const answer13 = document.getElementById('correct8');
const incanswer14 = document.getElementById('incorrect20')
const incanswer15 = document.getElementById('incorrect21')


let scoring = 0;
const scoreDisplay = document.getElementById('score-display')

function updateScore() {
    scoreDisplay.textContent = `Score: 5 /  ${scoring}`;
}

// first question
incanswer2.addEventListener('click', () => {
   if(incanswer2.style.backgroundColor = "red") {
        answer1.style.backgroundColor = "green"
   }
})

incanswer3.addEventListener('click', () => {
    if(incanswer3.style.backgroundColor = "red") {
         answer1.style.backgroundColor = "green"
    }
 })

 answer1.addEventListener('click', () => {
    answer1.style.backgroundColor = "green"
    scoring = scoring + 1
    updateScore()
 } )
//  end of the first question


// second question
 incanswer5.addEventListener('click', () => {
    if(incanswer5.style.backgroundColor = "red") {
         answer4.style.backgroundColor = "green"
    }
 })
 
 incanswer6.addEventListener('click', () => {
     if(incanswer6.style.backgroundColor = "red") {
          answer4.style.backgroundColor = "green"
     }
  })
 
  answer4.addEventListener('click', () => {
     answer4.style.backgroundColor = "green"
     scoring = scoring + 1
     updateScore()
  } )

// end of the second question   

// // third question
incanswer8.addEventListener('click', () => {
   if(incanswer8.style.backgroundColor = "red") {
        answer7.style.backgroundColor = "green"
   }
})

incanswer9.addEventListener('click', () => {
    if(incanswer9.style.backgroundColor = "red") {
         answer7.style.backgroundColor = "green"
    }
 })

 answer7.addEventListener('click', () => {
    answer7.style.backgroundColor = "green"
    scoring = scoring + 1
    updateScore()
 } )
// // end of the third question   

// fourth question
incanswer11.addEventListener('click', () => {
    if(incanswer11.style.backgroundColor = "red") {
         answer10.style.backgroundColor = "green"
    }
 })
 
 incanswer12.addEventListener('click', () => {
     if(incanswer12.style.backgroundColor = "red") {
          answer10.style.backgroundColor = "green"
     }
  })
 
  answer10.addEventListener('click', () => {
     answer10.style.backgroundColor = "green"
     scoring = scoring + 1
     updateScore()
  } )

// // end of the fourth question   

// fifth question
incanswer15.addEventListener('click', () => {
    if(incanswer15.style.backgroundColor = "red") {
         answer13.style.backgroundColor = "green"
    }
 })
 
 incanswer14.addEventListener('click', () => {
     if(incanswer14.style.backgroundColor = "red") {
          answer13.style.backgroundColor = "green"
     }
  })
 
  answer13.addEventListener('click', () => {
     answer13.style.backgroundColor = "green"
     scoring = scoring + 1
     updateScore()
  } )

// // end of the fifth question   



