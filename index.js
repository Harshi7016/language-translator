let buttonTranslateBritish = document.querySelector(
  '#button-translate-british'
);
let inputDivBritish = document.querySelector('#input-div-british');
let outputDivBritish = document.querySelector('#output-div-british');

let buttonTranslateGerman = document.querySelector('#button-translate-german');
let inputDivGerman = document.querySelector('#input-div-german');
let outputDivGerman = document.querySelector('#output-div-german');

let britishAccentSelect = document.querySelector('#britishAccentSelect');
let germanAccentSelect = document.querySelector('#germanAccentSelect');

var convertToBritishUrl =
  'https://api.funtranslations.com/translate/us2uk.json';

var convertToGermanUrl =
  'https://api.funtranslations.com/translate/german-accent.json';

var britishAccentDiv = document.querySelector('#british');
var germanAccentDiv = document.querySelector('#german');
/* 
 Activating div based on link click
*/
const britishDivActive = () => {
  console.log('click');
  germanAccentDiv.style.display = 'none';
  britishAccentDiv.style.display = 'block';
  document.body.style.backgroundImage =
    'url(`https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png`)';
};
const germanDivActive = () => {
  console.log('click');
  germanAccentDiv.style.display = 'block';
  britishAccentDiv.style.display = 'none';
};

britishAccentSelect.addEventListener('click', britishDivActive);
germanAccentSelect.addEventListener('click', germanDivActive);
const getTranslationalUrl = (input) => {
  return convertToBritishUrl + '?' + 'text=' + input;
};

const convertToBritish = () => {
  let inputText = inputDivBritish.value;
  fetch(getTranslationalUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputDivBritish.innerText = translatedText;
    });
};

buttonTranslateBritish.addEventListener('click', convertToBritish);

/* German Translation */

const getTranslationalUrlGerman = (input) => {
  return convertToGermanUrl + '?' + 'text=' + input;
};

const convertToGerman = () => {
  let inputText = inputDivGerman.value;
  fetch(getTranslationalUrlGerman(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputDivGerman.innerText = translatedText;
    });
};

buttonTranslateGerman.addEventListener('click', convertToGerman);
