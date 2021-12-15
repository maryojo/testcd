var option = window.prompt('Enter your class option - science, arts or commercial');

const scienceCourses = ["quantity surveying","agricultural science", "biochemistry", "botany","computer engineering", "chemical engineering", "dentistry","medicine and surgery", "microbiology", "pharmacy"];
const artCourses = ["drama", "history", "english language", "law", "international relations"];
const comCourses = ["administration","accounting", "economics", "insurance", "enterprenuership"];

const scienceCoursesVid = ["RXDcaF0hiTE","ysVUUmNDOC0", "6tHkwDRNrV8", "jo-yiqfN15U", "m8ZoxzX0hro", "k-7B_YfHWXQ", "VU6NLyiiqis","ZFOJGhMAY_A", "pNHa0eqkzdU", "A0SmjF7XBMo"];
const artCoursesVid = ["dlQ1QG36_ww", "7vIqfVw2wZw", "CkF9OnmITRM", "0gQK5-EMo7E", "VBjh0cIVUhY"];
const comCoursesVid = ["jMIa9SJiFb8","1P7BYwpVCyw", "JjXC3QyTHNA", "86dxLdrLhJg", "GXFlbM2dAkY"];

const sugCareer = document.getElementById('sugCareer');
const youtube = document.getElementById('youtube');
const opinionBtn = document.getElementById('opinionButton');


const addVideo = ( videoId) => {
  var img = document.createElement("img");
  img.setAttribute("src", "http://i.ytimg.com/vi/" 
                          + videoId + "/hqdefault.jpg");
  img.setAttribute("class", "thumb");
  
  
  // Overlay the Play icon to make it look like a video player
  var circle = document.createElement("div");
  circle.setAttribute("class","circle");  
  
  youtube.appendChild(img);
  youtube.appendChild(circle);
  
  // Attach an onclick event to the YouTube Thumbnail
  youtube.onclick = function() {
  
    // Create an iFrame with autoplay set to true
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src",
          "https://www.youtube.com/embed/" + videoId 
        + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1"); 
    
    // The height and width of the iFrame should be the same as parent
    iframe.style.width  = this.style.width;
    iframe.style.height = this.style.height;
       
    // Replace the YouTube thumbnail with YouTube HTML5 Player
    this.parentNode.replaceChild(iframe, this);
  }
  

}


if(option === "science"){
  const chooseCourse = scienceCourses[Math.floor(Math.random() * scienceCourses.length)];
  console.log(chooseCourse);
  sugCareer.innerHTML=chooseCourse;
  let index = scienceCourses.indexOf(chooseCourse);
  let videoCode = scienceCoursesVid[index];
  console.log(videoCode);
  addVideo(videoCode);
  
} else if(option === "arts"){
  displayRes = artCourses[Math.floor(Math.random() * artCourses.length)];
  console.log(displayRes);
} else if(option === "commercial") {
  displayRes = comCourses[Math.floor(Math.random() * comCourses.length)];
  console.log(displayRes);
} else {
  window.alert('Enter a valid class option');
}

// opinionBtn.onclick = alert("Your response has been submitted");


function myFunction (){
  alert("Your response has been recorded");
}


