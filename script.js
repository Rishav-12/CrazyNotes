const buttonElement = document.getElementById("submitButton");
buttonElement.addEventListener("click", addNote);

loadNotes();

function addNote() {
  const noteInput = document.getElementById("noteInput").value;
  if(noteInput.trim() === "") {
    return;
  }

  if(localStorage.getItem('listNotes') == null) {
    localStorage.setItem('listNotes', '[]');
  }

  const oldNotes = JSON.parse(localStorage.getItem('listNotes'));
  oldNotes.push(noteInput);
  localStorage.setItem('listNotes', JSON.stringify(oldNotes));
  
  addNoteToPage(noteInput);
}

function loadNotes() {
  if(localStorage.getItem('listNotes') != null) {
    const notes = JSON.parse(localStorage.getItem('listNotes'));
    for(i=0; i<notes.length; i++) {
      addNoteToPage(notes[i]);
    }
  }
}

function addNoteToPage(text) {
  const newNote = document.createElement("div");
  newNote.innerHTML = text;
  newNote.classList.add("note");
  document.getElementsByClassName("notes")[0].appendChild(newNote);
}