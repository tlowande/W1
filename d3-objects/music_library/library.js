const library = {
       tracks: {
              t01: {
                     id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three"
              },
              t02: {
                     id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"
              },
              t03: {
                     id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"
              }
       },
       playlists: {
              p01: {
                     id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
              },
              p02: {
                     id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
              }
       },
       printPlaylists: function () {
              let section = this.playlists
              for (var element in section) {
                     console.log(`${element}: ${section[element].name} - ${section[element].tracks.length} tracks`);
              }
       },
       printTracks: function () {
              let section = this.tracks;
              for (var element in section) {
                     console.log(`${element}: ${section[element].name} by ${section[element].artist} (${section[element].album})`);
              }
       },
       printPlaylist: function (playlistId) {
              let section = this.playlists;

              for (let element in section) {

                     if (element === playlistId) {
                            console.log(`${element}: ${section[element].name} - ${section[element].tracks.length} tracks`);
                            for (let elements of section[element].tracks) {
                                   console.log(`${elements}: ${this.tracks[elements].name} by ${this.tracks[elements].artist} (${this.tracks[elements].album})`);
                            }

                     }
              };
       },
       addTrackToPlaylist: function (trackId, playlistId) {
              let access = this.playlists[playlistId].tracks;
              access.push(trackId); //no need to return
              return access;
       },

       generateUid: function () {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
       },
       addTrack: function (name, artist, album) {
              let newTrack = {}
              let newId = this.generateUid();
              newTrack.id = newId
              newTrack.name= name;
              newTrack.artist = artist;
              newTrack.album = album;
              this.tracks[newId] = newTrack
              return this.tracks;
       },
       addPlaylist: function (name) {
              let newPlaylist = {}
              let newId = this.generateUid();
              newPlaylist.id = newId
              newPlaylist.name = name;
              this.playlists[newId] = newPlaylist
              return this.playlists;
       }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the f
orm:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
//______________
// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
//______________
// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
//______________
// adds an existing track to an existing playlist
// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
//______________
// generates a unique id
//______________
// adds a track to the library
//______________
// adds a playlist to the library
//______________


//MY FIRST CODE
// const printPlaylists = function () {
//        let section = this.playlists
//        let result = '';
//        for (var element in section) {
//               result += `${element}: ${section[element].name} - ${section[element].tracks.length} tracks \n`;
//        }
//        return result
// }


//MY FIRST CODE
// const printTracks = function () {
//        let section = this.tracks;
//        let result = '';
//        for (var element in section) {
//               result += `${element}: ${section[element].name} by ${section[element].artist} (${section[element].album}) \n`;
//        }
//        return result
//}



//TESTS
// console.log(library.printPlaylists());
// console.log(library.printTracks());
// console.log(library.addTrackToPlaylist('t03', 'p01'))
// library.printPlaylist('p02');
//console.log(library.generateUid());
 console.log(library.addTrack('everybody', 'backstreetboys', 'dunno'))
//console.log(library.addPlaylist('favourites'));


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function(query) {
// }