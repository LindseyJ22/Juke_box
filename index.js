class Jukebox {
	constructor(){
		this.songlist = [];
		this.currentSong;
		this.songNames = ['Cookies', 'That Song Again', 'Suspense', 'some song'];
	}
	addSong(song){
		this.songlist.push(song);
		console.log(this.songlist);
		
		
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
	displaySong(id){
		$('#songName').html(this.songNames[id]);
	}
	
	findSong(title){
		for (var i = 0; i <  this.songlist.length; i++) {
			 if (this.songlist[i] === title){
			 	this.loadSong(this.songlist[i]);
			 	return;
			 }
		}
	}
	listAllSongs(){
			for (var i = 0; i < this.songNames.length; i++) {
			$('.list_of_songs').append(`<li><a href="#"class="songs" data-count="${i}"> ${this.songNames[i]} </a></li>`);
			}
	}

	getSong(id){
		this.findSong(this.songlist[id]);
	}

}//ends jukebox
	

let music = new Jukebox();
music.addSong('Cookies.mp3');
music.addSong('that_song.mp3');
music.addSong('suspense.mp3');
music.loadSong(music.songlist[0]);
music.listAllSongs();
document.getElementById('playButton').onclick = function(){ 
	music.songPlay();
};
document.getElementById('pauseButton').onclick = function(){ 
	music.songPause();
};
document.getElementById('stopButton').onclick = function(){ 
	music.songStop();
};
// document.getElementById('submitButton').onclick = function(){ 
// 	music.findSong(document.getElementById('songName').value);
// };

$(document).on('click', '.songs', function() {
		let id = $(this).data('count');
		music.songStop();
		music.getSong(id);
		music.displaySong(id);
		music.songPlay();
	});

	// music.listAllSongs();

