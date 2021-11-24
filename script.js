const buttonElement = document.getElementById("submit");
buttonElement.addEventListener("click", addNote);

function addNote() {
  const noteText = document.getElementById("noteText").value;
  if(noteText.trim() === "") {
    return;
  }
  const newNote = document.createElement("div");
  newNote.innerHTML = noteText;
  newNote.classList.add("note");
  document.getElementsByClassName("notes")[0].appendChild(newNote);
}