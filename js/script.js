const workContainer = document.querySelector('#work');

const projects = [
    {
        name: 'Grill: Food and Friends',
        subtitle: 'Search for recipes to grill while grilling your friends with trivia!',
        id: 'work-grill',
        class: 'hero',
        liveURL: 'https://jmichaelbrown8.github.io/grill',
        codeURL: 'https://github.com/jmichaelbrown8/grill'
    },
    {
        name: 'Wedding Site',
        subtitle: 'A live information site I created for my wedding.',
        id: 'work-wedding',
        liveURL: 'https://jmichaelbrown8.github.io/weddingsite/',
        codeURL: 'https://github.com/jmichaelbrown8/weddingsite'
    },
    {
        name: 'Interest Calc',
        subtitle: 'A simple javascript calculator for compounding interest.',
        id: 'work-interest',
        liveURL: 'https://jmichaelbrown8.github.io/compoundinterest/',
        codeURL: 'https://github.com/jmichaelbrown8/compoundinterest'
    },
    {
        name: 'Scrum Game',
        subtitle: 'Test your Scrum framework knowledge.',
        id: 'work-scrumgame',
        liveURL: 'https://agility.help/scrumgame/',
        codeURL: 'https://github.com/jmichaelbrown8/scrum-game'
    },
];

function renderWork(workObj) {
    return `
    <div id="${workObj.id}" class="${workObj.class}">
        <div>
            <h2>${workObj.name}</h2>
            <p>${workObj.subtitle}</p>
            <div>
                <a href="${workObj.liveURL}">Site</a>
                <a href="${workObj.codeURL}">Code</a>
            </div>
        </div>
        
    </div>`;
}

for (let i = 0; i < projects.length; i++) {
    let workHTML = renderWork(projects[i]);
    workContainer.innerHTML += workHTML;
}