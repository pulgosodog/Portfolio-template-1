
// Works section projects cards maker

function projectContructor(image, name, company, description, technology) {
    this.image = image;
    this.name = name;
    this.company = company;
    this.description = description;
    this.technology = technology;
}

var tonic = new projectContructor(
    "images/Snapshoot Portfolio desk.png",
    "Tonic",
    {
        name: "CANOPY",
        position: "Back End Dev",
        date: "2015"
    },
    "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    ["HTML", "CSS", "JavaScript"]
)

var multiPostSories = new projectContructor(
    "images/Snapshoot Portfolio desk 1.png",
    "Multi-Post Stories",
    { name: "FACEBOOK", position: "Full Stack Dev", date: "2015" },
    "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    ["HTML", "Ruby on rails", "CSS", "Javascript"]
)

var facebook360 = new projectContructor(
    "images/Snapshoot Portfolio desk 2.png",
    "Facebook 360",
    { name: "FACEBOOK", position: "Full Stack Dev", date: "2015" },
    "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    ["HTML", "Ruby on rails", "CSS", "Javascript"]
)

var uberNavigation = new projectContructor(
    "images/Snapshoot Portfolio desk 3.png",
    "Uber Navigation",
    {
        name: "Uber",
        position: "Lead Developer",
        date: "2018"
    },
    "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    ["HTML", "Ruby on rails", "CSS", "JavaScript"]
)

var projects = [tonic, multiPostSories, facebook360, uberNavigation];

function generateTechnologyList(technologyArray) {
    var technologyList = '';

    for (var i = 0; i < technologyArray.length; i++) {
        technologyList += `<li><p>${technologyArray[i]}</p></li>`;
    }

    return technologyList;
}

var left = true;

function generateProjectCard(project) {

    let htmlTemplate = "";
    if (left === true) {
        htmlTemplate = `
      <div class="card flex-column">
        <img class="card-img card-item" src="${project.image}" alt="">
        <img class="desktop-card-img" src="${project.image}" alt="">
        <div class="card-text">
          <h3 class="card-item">${project.name}</h3>
          <ul class="card-item company flex-row">
            <li class="canopy">
              <h4>${project.company.name}</h4>
            </li>
            <li><img src="images/Counter.png"></li>
            <li>
              <p>${project.company.position}</p>
            </li>
            <li><img src="images/Counter.png"></li>
            <li>
              <p>${project.company.date}</p>
            </li>
          </ul>
          <p class="card-item card-description">${project.description}</p>
          <ul class="categories card-item flex-row">
            ${generateTechnologyList(project.technology)}
          </ul>
          <div class="div-button">
            <button class="card-item flex-row">See project</button>
          </div>
        </div>
      </div>
    `;
        left = false;
    }
    else {
        htmlTemplate = `
        <div class="card flex-column card-left">
            <img class="card-img card-item" src="${project.image}" alt="">
            <div class="card-text">
            <h3 class="card-item">${project.name}</h3>
            <ul class="card-item company flex-row">
              <li class="canopy">
                <h4>${project.company.name}</h4>
              </li>
              <li><img src="images/Counter.png"></li>
              <li>
                <p>${project.company.position}</p>
              </li>
              <li><img src="images/Counter.png"></li>
              <li>
                <p>${project.company.date}</p>
              </li>
            </ul>
            <p class="card-item card-description">${project.description}</p>
            <ul class="categories card-item flex-row">
              ${generateTechnologyList(project.technology)}
            </ul>
            <div class="div-button">
              <button class="card-item flex-row">See project</button>
            </div>
            </div>
            <img class="desktop-card-img-left" src="${project.image}" alt="">
        </div>
      `;
        left = true
    }

    return htmlTemplate;
}


document.addEventListener('DOMContentLoaded', () => {

    var works = document.getElementById('works');

    projects.forEach((n) => {
        works.innerHTML += generateProjectCard(n);
    }
    )

}
);

// Mobile menu pop up

var menuButton = document.getElementById("menu-button");
var menuBackground = document.getElementById("menu-background");
var phoneMenu = document.getElementById("phone-menu");
var phoneMenuLinks = document.querySelectorAll("#phone-menu a");
var menuOpen = false;

menuButton.addEventListener("click", () => {

    if (menuOpen === false) {
        menuBackground.style.height = "100vh";
        menuBackground.style.width = "100vw";
        menuBackground.style.position = "fixed";
        menuBackground.style.top = "0";
        menuBackground.style.left = "0";
        menuBackground.style.backgroundColor = "#6070ff";
        menuBackground.style.mixBlendMode = "multiply";
        menuBackground.style.backdropFilter = "blur(10px)";

        menuButton.style.backgroundImage = "url(images/Icon.png)";
        menuButton.style.position = "absolute";
        menuButton.style.top = "16.27vw";
        menuButton.style.right = "9.87vw";
        menuButton.style.height = "3.73vw";
        menuButton.style.width = "3.73vw";

        phoneMenu.style.position = "fixed";
        phoneMenu.style.top = "28.27vw";
        phoneMenu.style.left = "6.93vw";
        phoneMenu.style.visibility = "visible";
        phoneMenu.style.fontStyle = "normal";
        phoneMenu.style.fontWeight = "600";
        phoneMenu.style.fontSize = "8.53vw";
        phoneMenu.style.lineHeight = "11.73vw";
        phoneMenu.style.flexDirection = "column";
        phoneMenu.style.color = "#fff";
        menuOpen = true;
    }

    else {
        menuBackground.style.height = "";
        menuBackground.style.width = "";
        menuBackground.style.position = "";
        menuBackground.style.top = "";
        menuBackground.style.left = "";
        menuBackground.style.backgroundColor = "";
        menuBackground.style.mixBlendMode = "";
        menuBackground.style.backdropFilter = "";

        menuButton.style.backgroundImage = "";
        menuButton.style.position = "";
        menuButton.style.top = "";
        menuButton.style.right = "";
        menuButton.style.height = "";
        menuButton.style.width = "";

        phoneMenu.style.position = "";
        phoneMenu.style.top = "";
        phoneMenu.style.left = "";
        phoneMenu.style.visibility = "";
        phoneMenu.style.fontStyle = "";
        phoneMenu.style.fontWeight = "";
        phoneMenu.style.fontSize = "";
        phoneMenu.style.lineHeight = "";
        phoneMenu.style.flexDirection = "";
        phoneMenu.style.color = "";
        menuOpen = false;
    }
});

phoneMenuLinks.forEach((u) => {
    u.addEventListener("click", () => {
        menuBackground.style.height = "";
        menuBackground.style.width = "";
        menuBackground.style.position = "";
        menuBackground.style.top = "";
        menuBackground.style.left = "";
        menuBackground.style.backgroundColor = "";
        menuBackground.style.mixBlendMode = "";
        menuBackground.style.backdropFilter = "";

        menuButton.style.backgroundImage = "";
        menuButton.style.position = "";
        menuButton.style.top = "";
        menuButton.style.right = "";
        menuButton.style.height = "";
        menuButton.style.width = "";

        phoneMenu.style.position = "";
        phoneMenu.style.top = "";
        phoneMenu.style.left = "";
        phoneMenu.style.visibility = "";
        phoneMenu.style.fontStyle = "";
        phoneMenu.style.fontWeight = "";
        phoneMenu.style.fontSize = "";
        phoneMenu.style.lineHeight = "";
        phoneMenu.style.flexDirection = "";
        phoneMenu.style.color = "";
        menuOpen = false;
    })
})

