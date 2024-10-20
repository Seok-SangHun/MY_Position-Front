const personTab = document.querySelector(".btn-tab.t-per");
const companyTab = document.querySelector(".btn-tab.t-com");
const personLogin = document.querySelector(".area-intergranted-login.person");
const companyLogin = document.querySelector(".area-intergranted-login.company");
const loginRater = document.querySelector(".link-rater");
const autologinCheckBox = document.querySelector(
    '[name="autologin-check-box"]'
);

personTab.addEventListener("click", () => toggleTabs(true));
companyTab.addEventListener("click", () => toggleTabs(false));

const toggleTabs = (isPerson) => {
    personTab.classList.toggle("active", isPerson);
    companyTab.classList.toggle("active", !isPerson);

    personTab.setAttribute("aria-selected", isPerson ? "true" : "false");
    companyTab.setAttribute("aria-selected", isPerson ? "false" : "true");

    personTab.setAttribute("tabindex", isPerson ? "0" : "-1");
    companyTab.setAttribute("tabindex", isPerson ? "-1" : "0");

    personLogin.style.display = isPerson ? "block" : "none";
    companyLogin.style.display = isPerson ? "none" : "block";

    loginRater.style.display = isPerson ? "none" : "block";

    autologinCheckBox.style.display = isPerson ? "block" : "none";
};
