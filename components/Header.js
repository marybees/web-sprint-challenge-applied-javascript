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
    const newspaperDate = document.createElement('span');
    const newspaperTitle = document.createElement('h1');
    const newspaperTemp = document.createElement('span');

    //Add Classes to Elements
    header.classList.add('header');
    newspaperDate.classList.add('date');
    newspaperTemp.classList.add('temp');

    //Text Content
    newspaperDate.textContent = 'MARCH 28, 2020';
    newspaperTitle.textContent = 'Lambda Times';
    newspaperTemp.textContent = '98°';

    //Select Header Container Element
    const headerContainer = document.querySelector('.header-container');

    //Append Elements
    header.append(newspaperDate);
    header.append(newspaperTitle);
    header.append(newspaperTemp);
    headerContainer.append(header);

return header;

}

Header();


