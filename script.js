let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.onclick = function() {
    if (inputField.value.trim() !== "") {  // Vérifier que le champ n'est pas vide
        let paragraph = document.createElement('p'); 
        paragraph.innerText = inputField.value;
        paragraph.classList.add('paragraphe_style');

        toDoContainer.appendChild(paragraph);
        inputField.value = ""; 

        paragraph.addEventListener('click', function() {
            paragraph.classList.add('paragraph_click'); 
        });

        paragraph.addEventListener('dblclick', function() {
            let newText = prompt("Modifier la tâche :", paragraph.innerText);
            if (newText !== null && newText.trim() !== "") {
                paragraph.innerText = newText;
            }
        });
        
    } else {
        alert("Veuillez entrer une tâche !");
    }
};
