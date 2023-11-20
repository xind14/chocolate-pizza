'use strict';

const separators = document.getElementsByClassName('separator-top');
const numberOfCopies = 200;

for (let j = 0; j < separators.length; j++) {
  const separator = separators[j];

  for (let line = 0; line < 3; line++) { // Fix the loop condition
    const lineContainer = document.createElement('div'); // Container for each line

    for (let i = 0; i < numberOfCopies; i++) {
      const dividerImg = document.createElement('img');
      dividerImg.src = 'images/hr-img.png';
      lineContainer.appendChild(dividerImg);
    }

    separator.appendChild(lineContainer);
  }
}


