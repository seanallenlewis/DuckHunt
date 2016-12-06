Duck Hunt

Javascript-based, simplified version of the Nintendo classic

A two player, quick reflex, action game where users alternate turns, moving their cursor to try and 'shoot' down as many ducks as they can in the time allowed. The score is tallied for each 'kill' and the player with the most at the end of the game, wins. 
 
Controls

Use the mouse cursor to move your cross hairs about the screen. Once you have a duck in your sights, click mouse 1 to pull the trigger and watch your score go up while the ducks go down.

To Play

Visit http://seanallenlewis.github.io/duck-hunt/ to play, or download a .zip of this repo and open index.html in your browser.

Development process

Technologies used: 
HTML / CSS / Javscript + jQuery

Random Number Generation: 
	The heart of this game relies heavily on random number generation. You see this the function "GenRandomNumber" used heavily throughout the app file. 
All 'duck' pathing is done with random number generation to Top and Left coordinates, animate to those coordinates and call on itself again to a new random set of coordinates. 
	The clouds in the background use a random number selection to pull the height of their vertical placement and the speed of horizontal movement. The function that places the cloud image relies on a random number to select which of the 4 cloud images it will set in motion. 

Interval Madness:

setInterval - 
I've collected a couple of setInterval examples in this project. Timing the production of clouds, the countdown window into each player's turn, and the large timer feature all depend on "setInterval".

setTimeout-
setTimeout is responsible for the fast flash/visual effects of the gun shot as well as the length of time the windows for evaluating player performance and identifying the winner stay in place.


Sources Used
Font: 

Press Start 2P
https://fonts.google.com/specimen/Press+Start+2P?selection.family=Press+Start+2P

Images: 

The image for the Welcome screen was altered from: 
http://i.utdstc.com/screen/android/desc/duck-hunt-003.jpg

The image of the clouds (yes, it's from Super Mario Brothers) was pulled from:
https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/02/Super-Mario-wallpaper-1200x600.jpg
 
All of the flying duck images were created or altered versions of an original image pulled from:
http://noximist.com/proto/projects/duck%20hunt%20clean.gif

The image of the dead duck was pulled from:
http://www.wp7connect.com/wp-content/uploads/2012/08/duckshunt.png, 

The cursor is an altered version form the original: 
https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTUf2w53N9cP67TZdKi5OJpgu5Q_cwdF7a34grjf9-dK5x4E2jZ

Both layers of the image of grass were created or altered from the original:
http://nikkinicholson.com/portfoliowork/DuckHunt/images/footer.png

Sounds - 

all Unreal Tournament sounds were pulled from this forum thread:
https://forums.alliedmods.net/showthread.php?t=230836

Clip from the Karate Kid soundtrack song, Joe Esposito's "You're The BEst Around" is from:
http://users.content.ytmnd.com/a/2/9/a29b4e1b7e26449b2a78ff86fbdaa9ac.wav

Duck Hunt Theme pulled from:
http://downloads.khinsider.com/game-soundtracks/album/duck-hunt



User Stories

As a user, I am greeted with a bit of nostalgia and similar gameplay to the original Nintendo version of the NES Zapper assisted, classic, Duck Hunt. 

As a user, my quick reflexes will amass me a high enough score to win a game and not only will it be me telling my current adversary that they are a loser, but the game will crown me as the victor as well.

As a user, i am prompted of an upcoming round, and when it starts, I see flying ducks that visually respond to a direct click of the mouse.

As a player, if I enjoyed myself, if the game end in a tie, I will be prompted with a way to replay from the beginning. 


Feature Wish List

-Dog companion to collect kills
-Custom music
-A Tie breaker based on player with least amount of shots, or a speed mode.
-"High Score" board
-Custom Theme Song
-Visual effects to accompany each evaluation message
-Grandiose finale for winner message, complete with confetti, champage bottles and a disco ball.



