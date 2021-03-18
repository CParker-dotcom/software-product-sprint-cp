async function addFavoriteThings() {
  const responseFromServer = await fetch('/favoritethings');
  const textFromResponse = await responseFromServer.json();

  const favoritethingscontainer = document.getElementById('favoritethings-container');
  favoritethingscontainer.innerText = '';

  favoritethingscontainer.appendChild(
      createListElement('I love ice cream.' ));
  favoritethingscontainer.appendChild(
      createListElement('I love to watch a good movie and read a good book.'));
  favoritethingscontainert.appendChild(
      createListElement('I love to travel, but rarely get to do so'));
  favoritethingscontainer.appendChild(
      createListElement('Naps are my favorite pasttime'));
} 

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}




