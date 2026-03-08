/*
This function displays project information
when a user clicks the view button.
*/

function showProject(){

alert("Full project documentation will be added soon.");

}


/*
This function toggles between dark mode
and light mode for the website.
*/

function toggleMode(){

document.body.classList.toggle("light");

}


/*
This function filters projects based on
the text entered in the search field.
*/

function searchProjects(){

let input = document.getElementById("searchInput").value.toLowerCase();

let projects = document.querySelectorAll(".project");

projects.forEach(function(project){

let text = project.innerText.toLowerCase();

if(text.includes(input)){

project.style.display = "block";

}else{

project.style.display = "none";

}

});

}