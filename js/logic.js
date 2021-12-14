const scienceCourses = ["agriculture", "biochemistry", "botany", "chemistry", "computer engineering", "chemical engineering", "dentistry","medicine and surgery"];
const artCourses = ["drama", "history", "english language"];
const comCourses = ["economics", "insurance", "enterprenuership"];

const ans = prompt('Enter answer');
const classOption = prompt('Enter classOption');


if(classOption === "science"){
  for(let i = 0; i<scienceCourses.length; i++){
    if(ans === scienceCourses[i]){
      console.log("A science-based course");
    } else console.log("botany");
  }
} else if(classOption === "arts"){
  for(let i = 0; i<artCourses.length; i++){
    if(ans === artCourses[i]){
      console.log("An art-based course");
    } else console.log("law");
  }
} else {
  for(let i = 0; i<comCourses.length; i++){
    if(ans === comCourses[i]){
      console.log("An com-based course");
    } else console.log("economics");
  }
}
