console.log("Welcome to spotify");


let songindex = 0;
let masterplay = document.getElementById('masterPlay');
let audioelement = new Audio("songs/1.mp3");
let myprogressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let song = [
    {songname: "Mood-1", filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname: "cielo", filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname: "Mood2", filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname: "Shor-Machega", filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname: "janji-Heroes Tonigh", filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname: "Bad-boy & Bad-girl - Badshah", filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname: "Radhe Title treck", filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songname: "jugnu-Badshah", filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
    {songname: "Mood-3", filepath:"songs/9.mp3",coverpath:"covers/9.jpg"},
    {songname: "Mood-4", filepath:"songs/10.mp3",coverpath:"covers/10.jpg"},

]

songItems.forEach((element,i)=>{
      console.log(element,i);
      element.getElementsByTagName('img')[0].src=song[i].coverpath;
      element.getElementsByClassName('songName')[0].innerText=song[i].songname;

});
masterplay.addEventListener('click', () =>{
    if(audioelement.paused || audioelement.currentTime <=0) {
        audioelement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})

audioelement.addEventListener('timeupdate', () => {
      
      let progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
      myprogressbar.value = progress;
      
})

myprogressbar.addEventListener('change', () => {
      audioelement.currentTime = myprogressbar.value*audioelement.duration/100;
      
})

const makeAllPlays=()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((e) =>{
        e.classList.remove('fa-pause-circle');
        e.classList.add('fa-play-circle');

  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songindex+1}.mp3`;
        masterSongName.innerText = song[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=9){
        songindex = 0
    }
    else{
        songindex += 1;
    }
    audioelement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = song[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0
    }
    else{
        songindex -= 1;
    }
    audioelement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = song[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})





