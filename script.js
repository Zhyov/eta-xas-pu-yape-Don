function customAlphabeticalSort(a, b) {
    const customAlphabet = ["a", "a'", "p", "b", "B", "V", "e", "e'", "s", "s'", "S", "z", "z'", "Z", "t", "t'", "T", "O", "d", "d'", "D", "f", "v", "h", "x", "i", "i'", "j", "j'", "k", "g", "y", "l", "y'", "m", "m'", "n", "n'", "N", "o", "r", "r'", "R", "u", "w", "O'", "-"];
    const indexA = customAlphabet.indexOf(a.getAttribute("data-sortkey"));
    const indexB = customAlphabet.indexOf(b.getAttribute("data-sortkey"));
    return indexA - indexB;
}

function sortItems() {
    const sortableDiv = document.getElementById("searchResults");
    const items = Array.from(sortableDiv.children);

    items.sort(customAlphabeticalSort);

    sortableDiv.innerHTML = "";

    items.forEach(item => sortableDiv.appendChild(item));
}

function toggleVisibility(clickedButton) {
    var targetElement = document.getElementById("infoShow");
    targetElement.classList.remove("hide");
    
    var nameSpan = targetElement.querySelector(".name");
    var wspellSpan = targetElement.querySelector(".wspell");
    var definitionSpan = targetElement.querySelector(".definition");
    var originSpan = targetElement.querySelector(".origin");

    var newNameSpan = clickedButton.querySelector(".word");
    var newWordSpellSpan = clickedButton.querySelector(".spell");
    var newWordDefinitionSpan = clickedButton.querySelector(".def");
    var newComesFromSpan = clickedButton.querySelector(".cf");

    nameSpan.textContent = newNameSpan.textContent;
    wspellSpan.textContent = newWordSpellSpan.textContent;
    definitionSpan.textContent = newWordDefinitionSpan.textContent;
    originSpan.textContent = newComesFromSpan.textContent;
}

function closeElement() {
    var targetElement = document.getElementById("infoShow");

    if (targetElement) {
      targetElement.classList.add("hide");
    }
}

function countItems(changer) {
    var target1 = document.getElementById("container");
    var amount1 = target1.childElementCount - 5;
    var target2 = document.getElementById("searchResults");
    var amount2 = target2.childElementCount - 5 + changer;
    var toChange1 = document.getElementById('wca1');
    var toChange2 = document.getElementById('wca2');
    var toChange3 = document.getElementById('wca3');
    var toChange4 = document.getElementById('wca4');
    toChange1.textContent = amount2;
    toChange2.textContent = amount1;
    toChange3.textContent = amount2;
    toChange4.textContent = amount1;
}

function starterBox() {
    var container = document.getElementById("container");
    var items = container.getElementsByTagName("button")
    var resultsContainer = document.getElementById("searchResults");
    for (var i = 0; i < items.length; i++) {
        var wordElement = items[i].querySelector(".word");
        var defElement = items[i].querySelector(".def");
        resultsContainer.appendChild(items[i].cloneNode(true));
    }
}

document.getElementById("searchBar").addEventListener("input", function() {
    var searchTerm = this.value.trim().toLowerCase();
    var container = document.getElementById("container");
    var items = container.getElementsByTagName("button")
    var resultsContainer = document.getElementById("searchResults");

    resultsContainer.innerHTML = "";

    for (var i = 0; i < items.length; i++) {
      var wordElement = items[i].querySelector(".word");
      var defElement = items[i].querySelector(".def");

      if (wordElement.textContent.toLowerCase().includes(searchTerm) ||
          defElement.textContent.toLowerCase().includes(searchTerm)) {

        resultsContainer.appendChild(items[i].cloneNode(true));
      }
    }

    if (searchTerm.length > 0) {
        countItems(5);
    } else {
        countItems(0);
    }

    sortItems();
});

starterBox();
countItems(0);
sortItems();
