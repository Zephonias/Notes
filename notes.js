//initialize buttons and elements
const createNote = document.getElementById("create");
// const notes = document.querySelector(".notes");
// const notesDisplay = document.querySelectorAll(".notes-display");
// const deleteBtn = document.querySelectorAll(".deletebtn");
const mainContainer = document.getElementById("main-container");
// const computedStyle = window.getComputedStyle(notes);

//Create a note function
function newNote(){
    const notes =document.createElement("div");
    const notesDisplay = document.createElement("textarea");
    const deleteBtn = document.createElement("button");
    const deleteIcon = document.createElement("i");

    notes.classList.add("notes");
    notesDisplay.classList.add("notes-display");
    deleteBtn.classList.add("deletebtn");
    deleteIcon.classList.add("fa-solid", "fa-trash")

    deleteBtn.appendChild(deleteIcon);
    notes.appendChild(notesDisplay);
    notes.appendChild(deleteBtn);

    mainContainer.appendChild(notes);  
    
    deleteBtn.addEventListener('click', () => {
        notes.remove(); // Remove the entire note
    });
}



//buttons event listener
createNote.addEventListener('click', () => {
    newNote();
})
