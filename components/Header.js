// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    
    //Create Elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    //Select Header Container Element
    const headerContainer = document.querySelector('.header-container');

    //Text Content
    date.textContent = date;
    title.textContent = 'Lambda Times';
    temp.textContent = temp;

    //Add Classes to Elements
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //Append Elements
    header.append(date);
    header.append(title);
    header.append(temp);
    headerContainer.append(header);

return header;

}
