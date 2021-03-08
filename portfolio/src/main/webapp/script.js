// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random fun fact to the page.
 */
function addRandomFunFact() {
  const funfacts =
      ['I love food!', 'I love cooking/baking shows.', 'When they go low, we go high.', 'Winter is coming!', 'My hidden talent is napping.'];

  // Pick a random fun fact.
  const funfact = funfacts[Math.floor(Math.random() * funfacts.length)];

  // Add it to the page.
  const funfactContainer = document.getElementById('funfact-container');
  funfactContainer.innerText = funfact;
}

/** 
 * Adds Contact info to page 
 */
function addRandomContact() {
  const contactinfo =
      ['Email: chanteparker100@gmail.com', 'LinkedIn: linkedin.com/in/chante-parker-a44402198', 'GitHub: CParker-dotcom'];

  // Pick a random fun fact.
  const contact = contactinfo[Math.floor(Math.random() * contactinfo.length)];

  // Add it to the page.
  const contactContainer = document.getElementById('contact-container');
  contactContainer.innerText = contact;
}

/**
* Adds the tab to page. 
*/
function openTab(evt, tabName) {
  // Setting all the variables 
  var tab, tabcontent, tablinks;

  // This hides all the content of the tabs. 
  tabcontent = document.getElementsByClassName("tabcontent");
  for (tab = 0; tab < tabcontent.length; tab++) {
    tabcontent[tab].style.display = "none";
  }

  // This removes the class 'active'
  tablinks = document.getElementsByClassName("tablinks");
  for (tab = 0; tab < tablinks.length; tab++) {
    tablinks[tab].className = tablinks[tab].className.replace(" active", "");
  }

  // This shows what is the current tab that is open. 
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// This opens the Home page automatically. 
document.getElementById("OpenOnDefault").click();

