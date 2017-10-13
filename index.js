class Jukebox {
	constructor(){
		this.songlist = [];
		// this.currentIndex = [0];
		this.currentSong;
	}
	addSong(song){
		this.songlist.push(song);
		
	}
	loadSong(songs){
		this.currentSong = new Audio(songs);
	}
	
	songPlay(){
		this.currentSong.play();		
	}

	songStop(){
		this.currentSong.pause();
		this.currentSong.currentTime = 0;
	}
	songPause(){
		this.currentSong.pause();
	}
	displaySong(){

	}
	
	findSong(title){
		for (var i = 0; i <  this.songlist.length; i++) {
			 if (this.songlist[i] === title){
			 	this.loadSong(this.songlist[i]);
			 	return;
			 }
		}
	}
}//ends jukebox
	
let music = new Jukebox();
music.addSong('rock_on.mp3');
music.addSong('say_something.mp3');
music.addSong('how_great_thou_art.mp3');
music.loadSong(music.songlist[0]);

document.getElementById('playButton').onclick = function(){ 
	music.songPlay();
};
document.getElementById('pauseButton').onclick = function(){ 
	music.songPause();
};
document.getElementById('stopButton').onclick = function(){ 
	music.songStop();
};
document.getElementById('submitButton').onclick = function(){ 
	music.findSong(document.getElementById('songName').value);
};

// document.getElementById('controls').innerHTML = song1.displaySong();