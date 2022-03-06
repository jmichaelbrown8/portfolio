const workContainer = document.querySelector("#work");

const projects = [
  {
    name: "Agility Help",
    subtitle: "A blog site for helpful agile software development tips.",
    id: "work-agility-help",
    class: "hero",
    liveURL: "https://agility-help.herokuapp.com",
    codeURL: "https://github.com/jmichaelbrown8/agility-help",
  },
  {
    name: "Tutor Tea",
    subtitle:
      "Rate and review your tutor to help others in bootcamp to get paired up.",
    id: "work-tutor-tea",
    liveURL: "https://tutor-tea.herokuapp.com",
    codeURL: "https://github.com/jmichaelbrown8/tutortea",
  },
  {
    name: "Grill: Food and Friends",
    subtitle:
      "Search for recipes to grill while grilling your friends with trivia!",
    id: "work-grill",
    liveURL: "https://grill-n.herokuapp.com/",
    codeURL: "https://github.com/jmichaelbrown8/grill",
  },
  {
    name: "Wedding Site",
    subtitle: "A live information site I created for my wedding.",
    id: "work-wedding",
    liveURL: "https://jmichaelbrown8.github.io/weddingsite/",
    codeURL: "https://github.com/jmichaelbrown8/weddingsite",
  },
  {
    name: "Interest Calc",
    subtitle: "A simple javascript calculator for compounding interest.",
    id: "work-interest",
    liveURL: "https://jmichaelbrown8.github.io/compoundinterest/",
    codeURL: "https://github.com/jmichaelbrown8/compoundinterest",
  },
  {
    name: "Scrum Game",
    subtitle: "Test your Scrum framework knowledge.",
    id: "work-scrumgame",
    liveURL: "https://agility.help/scrumgame/",
    codeURL: "https://github.com/jmichaelbrown8/scrum-game",
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
