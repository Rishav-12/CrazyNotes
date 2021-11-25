const buttonElement = document.getElementById("submit");
buttonElement.addEventListener("click", addNote);

loadNotes();

function addNote() {
  const noteText = document.getElementById("noteText").value;
  if(noteText.trim() === "") {
    return;
  }

  if(localStorage.getItem('listNotes') == null) {
    localStorage.setItem('listNotes', '[]');
  }

  const oldNotes = JSON.parse(localStorage.getItem('listNotes'));
  oldNotes.push(noteText);
  localStorage.setItem('listNotes', JSON.stringify(oldNotes));
  
  addNoteToPage(noteText);
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