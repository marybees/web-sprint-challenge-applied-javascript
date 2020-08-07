import axios from "axios";

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get("https://lambda-times-api.herokuapp.com/topics")
.then((response) => {
    const newspaperTabs = response.data.topics;
    newspaperTabs.forEach((tab) => {
    console.log(tab);
    createTab(tab);
    });
})
.catch((error) => {
    console.log("The data was not returned. ", error);
});

//    <div class="tab">topic here</div>

function createTab(tab) {

//Create Element
const tabs = document.createElement("div");

//Add Class to Element
tabs.classList.add("tab");

//Text Content
tabs.textContent = tab;

//Select Header Container Element
const tabsContainer = document.querySelector(".topics");

//Append Elements
tabsContainer.appendChild(tabs);

return tabs;

}
