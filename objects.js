/* var playlist = {
  Slowdive: "Alison",
  My Bloody Valentine: "Sometimes"
}

function updatePlaylist(playlist, artistName, SongTitle) {
  playlist["Phil Ochs"] = "Here's to the State of Mississippi"
}

function removeFromPlaylist(playlist, artist) {
 return  delete playlist["Slowdive"]
} 

*/

 const playlist = {
  Slowdive: "Alison",
  MyBloodyValentine: "Sometimes"
}
   
// 2 objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`:
 const updatePlaylist = function updatePlaylist(playlist, artistName, songTitle)  {
  playlist[artistName] = songTitle
   return playlist
}
 function removeFromPlaylist(playlist, artist) {
 return  delete playlist[artist]
}