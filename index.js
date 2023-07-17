//let myaudio = [1(1).mp3,1(2).mp3,1(3).mp3,1(4).mp3,(5).mp3,1(6).mp3,1(7).mp3];
console.log("hello");
let songIndex=0;
/*let one = document.getElementsByClassName("one");
let two = document.getElementsByClassName("2");
let three = document.getElementsByClassName("3");
let four = document.getElementsByClassName("4");
let five = document.getElementsByClassName("5");
let six = document.getElementsByClassName("6");
let seven = document.getElementsByClassName("7");
let audio1 = new Audio("Songs/one.mp3");
let audio2= new Audio("Songs/two.mp3");
let audio3 = new Audio("Songs/three.mp3");
let audio4 = new Audio("Songs/four.mp3");
let audio5 = new Audio("Songs/five.mp3");
let audio6 = new Audio("Songs/six.mp3");
let audio7 = new Audio("Songs/seven.mp3");*/

let play = document.getElementById("play");
let progressBar = document.getElementById("progressBar");
let audio = new Audio("Songs/one.mp3");
let songitem = Array.from(document.getElementsByClassName("Songss"));
let inline = Array.from(document.getElementsByClassName("inline"));


let Songs= [{songname : "baby ko base pasand hai", filePath : "Songs/one.mp3"},
            {songname : "sanam re sanam re", filePath : "Songs/two.mp3"},
            {songname : "dil ka bhawar hai ye", filePath : "Songs/three.mp3"},
            {songname : "hello hello hello hell", filePath : "Songs/four.mp3"},
            {songname : "hello hii hii hello", filePath : "Songs/five.mp3"},
            {songname : "hello billi hello dilli", filePath : "Songs/six.mp3"},
            {songname : "hello hiii hello byyy", filePath : "Songs/seven.mp3"}]


songitem.forEach((element, i) => {
  element.getElementsByClassName("SongName")[0].innerText = Songs[i].songname;
});

inline.addEventListener("click",()=>{
  if(audio.paused||audio1.currentTime==0){
    audio.play();
    one.classList.remove("fa-play");
    one.classList.add("fa-pause");
  }

  else{
    audio1.pause();
    one.classList.remove("fa-pause");
    one.classList.add("fa-play");
  }
});
play.addEventListener('click', ()=> {
  if(audio.paused||audio.currentTime==0){
    audio.play();
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
  }

  else{
    audio.pause();
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
  };
  
});
audio.addEventListener("timeupdate", ()=>{
  progress = audio.currentTime/audio.duration*100;
  progressBar.value = progress;

})
progressBar.addEventListener("change", ()=>{
  audio.currentTime = progressBar.value * audio.duration/100;
});

