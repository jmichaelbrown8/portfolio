const workContainer = document.querySelector("#work");

const projects = [
  {
    title: "Elevator Pitch",
    subtitle: "A space to pitch ideas and look for collaborators.",
    id: "work-elevator-pitch",
    imgUrl: "./media/elevatorpitch.space.png",
    class: "hero",
    siteUrl: "https://elevatorpitch.space",
    codeUrl: "https://github.com/jmichaelbrown8/elevator-pitch",
  },
  {
    title: "Grill: Food and Friends",
    subtitle:
      "Search for recipes to grill while grilling your friends with trivia!",
    id: "work-grill",
    imgUrl: "./media/grill.png",
    siteUrl: "https://grill-n.herokuapp.com/",
    codeUrl: "https://github.com/jmichaelbrown8/grill",
  },
  {
    title: "Tutor Tea",
    subtitle:
      "Rate and review your tutor to help others in bootcamp to get paired up.",
    imgUrl: "./media/tutortea.png",
    id: "work-tutor-tea",
    siteUrl: "https://tutortea.com",
    codeUrl: "https://github.com/jmichaelbrown8/tutortea",
  },
  {
    title: "Agility Help",
    subtitle: "A blog site for helpful agile software development tips.",
    id: "work-agility-help",
    imgUrl: "./media/agility-help.png",
    siteUrl: "https://agility-help.herokuapp.com",
    codeUrl: "https://github.com/jmichaelbrown8/agility-help",
  },
  {
    title: "Scrum Game",
    subtitle: "Test your Scrum framework knowledge.",
    imgUrl: "./media/scrumgame.jpg",
    id: "work-scrumgame",
    siteUrl: "https://agility.help/scrumgame/",
    codeUrl: "https://github.com/jmichaelbrown8/scrum-game",
  },
];

const makePolaroid = (obj) => {
  const { imgUrl, title, subtitle, siteUrl, codeUrl } = obj;
  return `
    <div class="target">
      <div class="frame">
        <div class="image" style="background-image: url(${imgUrl}); background-position: center; background-size: cover;"></div>
        <div class="label">
          <h3>${title}</h3>
          <p>
            ${subtitle}
          </p>
          <div class="links">
            <a href="${siteUrl}" target="_blank">site</a>
            <a href="${codeUrl}" target="_blank">code</a>
          </div>
        </div>
      </div>
    </div>
    `;
};

for (let i = 0; i < projects.length; i++) {
  let workHTML = makePolaroid(projects[i]);
  workContainer.innerHTML += workHTML;
}
