const addBtn = document.getElementById("add");
const text = document.getElementById("textbox");
const filename = document.getElementById("filename");
console.log(text)
// event listeners
addBtn.addEventListener("click", addNote);
// saveBtn.addEventListener("click", () => saveNote(text, filename));
function addNote(){
	const view = `<div class="navbar">
		<input type="text" name="filename" id="filename" placeholder="name of text e.g, my text">
		<button onclick="save()">save</button>
	</div>
	<textarea id="textbox" onchange="alert()">write notes here</textarea>`;
	document.getElementById("wrapper").innerHTML = view;
}
function saveNote(text, name){
  const file  = downloadToFile(text, name, "text/plain");
  console.log(file)
}
const save = () => saveNote();