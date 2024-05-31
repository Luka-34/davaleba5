// შექმენი <button> და <div> ელემენტები და
// მიანიჭეთ საკუთარი უნიკალური id
// ● <div> - ში ჩაწერე პატარა random ტექსტი
// ● ღილაკზე დაჭერის შემთხვევაში დამალე
// <div> ელემენტი


let newDiv = document.createElement('div');
let newBtn = document.createElement('button'); 
newDiv.setAttribute = ('id', "container");
newBtn.setAttribute = ('id', "btn");
let randomText = document.createTextNode('Lorem ipsum dolor sit amet consectetur, adipisicing Suscipit consequatur eligendi.');
let btnclick = document.createTextNode('Click');

newBtn.appendChild(btnclick);
newDiv.appendChild(randomText);
document.body.appendChild(newDiv);
document.body.appendChild(newBtn);

newBtn.addEventListener('click', () => {
    if (newDiv.style.display === 'none') {
        return newDiv.style.display = 'block'
    }else {
        return newDiv.style.display = 'none'
    }
})


// შექმენი შემდეგი სტრუქტურა JS -ის
// გამოყენებით და დაამატე DOM-ში:
// <div id=”card”>
// <h2>Gandalf</h2>
// <a href=”#”>Go to profile</a>
// </div>

let card = document.createElement('div');
card.setAttribute('id', "card");
let heading = document.createElement('h2');
let anchor = document.createElement('a')
anchor.setAttribute('href', "#")

card.appendChild(heading)
card.appendChild(anchor)
let text1 = document.createTextNode('Gandalf');
heading.appendChild(text1)
let text2 = document.createTextNode('Go to profile');
anchor.appendChild(text2)

document.body.appendChild(card)