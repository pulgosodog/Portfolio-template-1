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

