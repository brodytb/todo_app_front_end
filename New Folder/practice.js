var button_content=document.querySelection('div');

button_content.addEventListener('click',updateName); 

function updateName () {
var name=prompt('Enter new name');
button_content.textContent='Player1:'+name; 
}