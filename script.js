function customAlphabeticalSort(a, b) {
    const customAlphabet = ["a", "a'", "p", "b", "B", "V", "e", "e'", "s", "S", "c", "z", "z'", "Z", "t", "O", "T", "t'", "d", "d'", "D", "f", "v", "h", "x", "i", "i'", "j", "J", "k", "g", "y", "l", "y'", "m", "m'", "n", "N", "n'", "o", "r", "r'", "R", "u", "O'", "-"];
    const indexA = customAlphabet.indexOf(a.getAttribute("data-sortkey"));
    const indexB = customAlphabet.indexOf(b.getAttribute("data-sortkey"));
    return indexA - indexB;
};

function sortItems() {
    const sortableDiv = document.getElementById("container");
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

function countItems() {
    var target = document.getElementById("container");
    var amount = target.childElementCount - 4
    var toChange1 = document.getElementById('wca1');
    var toChange2 = document.getElementById('wca2');
    toChange1.textContent = amount;
    toChange2.textContent = amount;
}

countItems();
sortItems();
