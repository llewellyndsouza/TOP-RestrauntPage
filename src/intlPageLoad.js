const pageload = function () {
    let element = document.querySelector('#container');

    let childElement = document.createElement('h1');
    childElement.innerText = 'Restaurant Homepage';
    element.appendChild(childElement);

    childElement = document.createElement('p');
    childElement.id = 'about';
    childElement.innerText = 'Yo, listen up\nThis is a very good restaurant. it has a lot of tables and long ones too.';
    element.appendChild(childElement);

    childElement = document.createElement('p');
    childElement.id = 'disclaimer';
    childElement.innerText = 'If youre expecting 13 guests, make sure to book a table for 26 and sit on one side.';
    element.appendChild(childElement);
}

export {pageload}