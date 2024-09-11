console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement= new Audio('mp3/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));

let songs= [
    {songName: "Tu hai to mujhe phir aur ky chahiye", filePath: "mp3/1.mp3", coverPath: "Jpg/1.jpg"},
    {songName: "Zihaal-e-Miskin", filePath: "mp3/2.mp3", coverPath: "Jpg/2.jpg"},
    {songName: "Bade Acche Lagte Hain", filePath: "mp3/3.mp3", coverPath: "Jpg/3.jpg"},
    {songName: "Apna Bana Le", filePath: "mp3/4.mp3", coverPath: "Jpg/4.jpg"},
    {songName: "Jhoome Jo Pathan", filePath: "mp3/5.mp3", coverPath: "Jpg/5.jpg"},
    {songName: "Maan meri jaan", filePath: "mp3/6.mp3", coverPath: "Jpg/6.jpg"},
    {songName: "Naina", filePath: "mp3/7.mp3", coverPath: "Jpg/7.jpg"},
    {songName: "Subhanallah", filePath: "mp3/8.mp3", coverPath: "Jpg/8.jpg"},
    {songName: "Channa mere aa", filePath: "mp3/9.mp3", coverPath: "Jpg/9.jpg"},
    {songName: "Breakup song", filePath: "mp3/10.mp3", coverPath: "Jpg/10.jpg"},
    
]

songItems.forEach((element,i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause'); 
        element.classList.add('fa-play'); 
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play');
      e.target.classList.add('fa-pause');
      audioElement.src = `mp3/${songIndex+1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play');
      masterPlay.classList.add('fa-pause');

    })
})

document.getElementById('next').addEventListener('click', ()=>{
   if(songIndex>=9){
      songIndex = 0;
   }else{
    songIndex += 1;
   }
      audioElement.src = `mp3/${songIndex+1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-play');
      masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
       songIndex = 0;
    }else{
     songIndex -= 1;
    }
       audioElement.src = `mp3/${songIndex+1}.mp3`;
       masterSongName.innerText = songs[songIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-play');
       masterPlay.classList.add('fa-pause');
 
 })
