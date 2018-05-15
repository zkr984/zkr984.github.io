// JavaScript Document

window.onload = function() {
	updateScene("start");
};

function updateScene(s) {
	switch(s) {
		case "start":
		
			document.getElementById("scene_title").innerHTML = "The Beginning";
			
			document.getElementById("scene_text").innerHTML = "You wake up in the middle of a forest. You find a backpack containing a sword, a flashlight, five pieces of wood, and a flask of water. Will you continue deeper into the forest, or walk towards a nearby lake?";
			
			document.getElementById("title").style.color = "white";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Walk into the forest";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s1')");
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Head towards the nearby lake";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s2')");
			break;
		case "s1":
			document.body.style.backgroundImage = "url('images/axe.jpg')";
				
				document.getElementById("scene_text").style.color = "white";
				document.getElementById("scene_title").style.color = "white";
				document.getElementById("achievements").style.color = "white";
			 
			document.getElementById("scene_title").innerHTML = "The Rusty Stone Axe";
			
			document.getElementById("scene_text").innerHTML = "As you venture deeper into the forest, you find a rusty, stone axe. Do you wish to chop down some trees?";
	
		// change the first button
			
			document.getElementById("btn1").innerHTML = "Chop down trees";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s3')");
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Leave the axe and venture on";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s4')");
	
			break;
		case "s2":

			document.body.style.backgroundImage = "url('images/Canoe_Lake.jpg')";

			document.body.style.backgroundImage = "url('images/Canoe_Lake.jpg')";
				
				document.getElementById("scene_text").style.color = "black";
				document.getElementById("scene_title").style.color = "black";
				document.getElementById("achievements").style.color = "white";
		
			document.getElementById("scene_title").innerHTML = "The Little Canoe";
			
			document.getElementById("scene_text").innerHTML = "As you walk towards the lake, you see a little canoe with oars. Do you wish to steer the boat into the lake?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Ride the boat into the lake";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s5')");
				
			
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Ignore the boat and keep on walking";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s7')");
			break;
			
			case "s3":
			
			document.body.style.backgroundImage = "url('images/trees.jpg')";
			document.getElementById("scene_title").innerHTML = "Chopping Down the Trees";
	
			document.getElementById("scene_text").innerHTML = "When you finish chopping down the trees, your hands feel burned and they are throbbing, but the good thing is that you collect 5 pieces of wood. Would you like to head deeper into the forest or head back to the lake?";
			
				document.getElementById("scene_text").style.color = "white";
				document.getElementById("scene_title").style.color = "white";
				document.getElementById("achievements").style.color = "white";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Go deeper into the forest";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s4')");
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Go back and head towards the lake";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s2')");
			break;
			
			case "s4":
				document.body.style.backgroundImage = "url('images/deer.jpg')";
			document.getElementById("scene_title").innerHTML = "The Dead Deer Carcass";
			
			document.getElementById("scene_text").innerHTML = "As you walk deeper, you find a dead deer carcass. Would you like to skin the deer with your sword?";
			
				document.getElementById("scene_text").style.color = "white";
				document.getElementById("scene_title").style.color = "white";
				document.getElementById("achievements").style.color = "white";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Skin the deer";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s8')");
				
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Leave the deer and go towards the lake";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s2')");
			break;
			case "s5":
			
			document.getElementById("ach1").innerHTML = "#1: All Aboard!";
			alert("Achievment 001: All Aboard! First time sailing? Good luck me matey!");
	
			document.body.style.backgroundImage = "url('images/yuckers.jpg')";	
			
			document.getElementById("scene_title").innerHTML = "Row-Row-Row your boat";
			
			document.getElementById("scene_text").innerHTML = "After a few hours of intense rowing, you hear a loud crunch under your boat. You look down and see that there is a hole in your boat.  As your boat starts to fill up with water, you suddenly realize that you are close to land";
			
				document.getElementById("scene_text").style.color = "white";
				document.getElementById("scene_title").style.color = "white";
				document.getElementById("achievements").style.color = "white";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Abandon the boat and swim to land";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s10')");
			
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Fix the boat with your wood";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s6')");
				
			break;
			case "s6":
			
			document.getElementById("ach4").innerHTML = "#4: Carpenter";
				alert("Achievment 004: Carpenter.");
						document.body.style.backgroundImage = "url('images/island.jpg')";
			document.getElementById("scene_title").innerHTML = "Fixing the Boat";
			
			document.getElementById("scene_text").innerHTML = "You use your wood to fix your boat. You row for a few more minutes and start to get exhausted but see the island that you suspected to be near. Would you like to row your boat to shore or start swimming to land";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Swim back to land";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s10')");
			
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Keep Rowing to the island";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s15')");
			
			break;
			
			case "s7":
			document.body.style.backgroundImage = "url('images/fishy.jpg')";
			document.getElementById("scene_title").innerHTML = "Trekking on";
			
			document.getElementById("scene_text").innerHTML = "As you walk past the boat, you hear a deafening splash. When you look back, a huge fish jumps from under the boat, breaks it, and leaves pieces of broken wood behind. Would you like to collect the wood?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Collect the wood and go on";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s14')");
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Leave the wood and go on";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s14')");
			break;
			case "s8":
			
			document.getElementById("ach2").innerHTML = "#2: Hunter";
			alert("Achievment 002: Hunter");
			
						document.body.style.backgroundImage = "url('images/wormhole.jpg')";
			document.getElementById("scene_title").innerHTML = "Skinning the deer";
			
			document.getElementById("scene_text").innerHTML = "Before you skin the deer, you see a black wormhole in the bush right next to it. Would you like to check the wormhole out or slowly back away";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Shine your flashlight in the wormhole";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Slowly back away";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s9')");
			
			break;
			
			case "s9":
					document.body.style.backgroundImage = "url('images/small-wormhole.png')";
				document.getElementById("scene_title").innerHTML = "The wormhole";
				
				document.getElementById("scene_text").innerHTML = "You slowly back away from the wormhole and continue deeper into the forest. You see another small wormhole on the ground. You hear whirring noises that might come from some sort of machine inside. What will you do?";
				
					document.getElementById("scene_text").style.color = "white";
				document.getElementById("scene_title").style.color = "white";
				document.getElementById("achievements").style.color = "white";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Drop a rock into the wormhole";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s12')");
			
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Jump into the wormhole";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s13')");
			
			break;
			
			case "s10":
				document.body.style.backgroundImage = "url('images/island.jpg')";
				document.getElementById("scene_title").innerHTML = "On the island";
				
				document.getElementById("scene_text").innerHTML = "You finally reach the island. You are extremely exhausted and you see a cave. Would you like to sleep in the cave. or would you like to make your own shelter outside and start a fire?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Sleep in the cave";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s22')");
			
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Make your own shelter outside";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s23')");
			break;
			
			case "s11":
					document.body.style.backgroundImage = "url('images/wormhole.jpg')";
							document.body.style.backgroundImage = "url('images/wormhole.jpg')";
			document.getElementById("scene_title").innerHTML = "The mysterious hole";
			
			document.getElementById("scene_text").innerHTML = "You shine your flashlight in the hole. The beam disappears without a trace. No reflection, no trace, just gone.";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Jump into the wormhole";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s13')");
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Drop a rock in and see what happens";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s12')");
			
			break;
			
			case "s12":
					document.body.style.backgroundImage = "url('images/bear.jpg')";
			document.getElementById("scene_title").innerHTML = "The Desperate Choice";
			
			document.getElementById("scene_text").innerHTML = "You drop a rock that you found on the ground in the hole. You suddenly hear a growl that makes your blood run cold. Your heart beats rapidly as you slowly turn around. You see a bear!";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Jump into the wormhole";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s13')");
			
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Run from the bear and the wormhole";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s17')");
			break;
	
			case "s13":
					document.body.style.backgroundImage = "url('images/newwhite.jpg')";
			document.getElementById("scene_title").innerHTML = "The White Room";
			
			document.getElementById("scene_text").innerHTML = "When you jump into the wormhole, you feel a strange sensation, as if you were flying. As you land on the cold, hard marble floor, you see a bright room with a bunch of strange-looking machinery. Suddenly you see a red dot pointing at your chest. Will you stand completely still or ignore it, inspect your surroundings, and run?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Stand completely still";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s20')");
			
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Ignore the dot and inspect the area while running";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s18')");
			
			break;
			
			case "s14":
				document.body.style.backgroundImage = "url('images/mountian.jpg')";
			document.getElementById("scene_title").innerHTML = "The mountain range";
			
			document.getElementById("scene_text").innerHTML = "After trekking on few hours until running into a mountain range. If you climb to the top of the mountain range, you can probably see the entire forest and valley. Would you like to climb to the top?";
	
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Climb to the top";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s21')");
						
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Go back to the lake and build a boat to sail into the lake";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s19')");
			
			break;
			
			case "s15":
					document.body.style.backgroundImage = "url('images/wormhole.jpg')";
			document.getElementById("scene_title").innerHTML = "Keep rowing to the island";
			
			document.getElementById("scene_text").innerHTML = "After traveling for a while you are exhausted and can't keep on going anymore. You suddenly hear a strange noise behind you. You realize that is it a wormhole. Do you jump into wormhole or ignored it?";
	
				document.getElementById("scene_text").style.color = "white";
				document.getElementById("scene_title").style.color = "white";
				document.getElementById("achievements").style.color = "white";
	
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Jump into the wormhole";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s13')");
						
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Ignore the wormhole";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s16')");
			
			break;
			
			case "s16":
			document.body.style.backgroundImage = "url('images/gameover.jpg')";
			document.getElementById("scene_title").innerHTML = "Ignoring the wormhole";
			document.getElementById("scene_text").innerHTML = "";
				
				alert("After ignoring and escaping the wormhole you die from starvation, exhaustion and dehydration. THE END"); 
				
			document.getElementById("btn1").innerHTML = "Go to the ending screen";
			document.getElementById("btn1").setAttribute("onclick", window.location.href = "endingscreen.html");
			
			break;
			
			case "s17":
					document.body.style.backgroundImage = "url('images/gameover.jpg')";
			document.getElementById("scene_title").innerHTML = "Running from the bear and the wormhole";
			document.getElementById("scene_text").innerHTML = "";
				
				alert("You break into a full sprint and start running away from the bear. You weave around trees and try to lose the bear, but the bear is much faster than you. As you get eaten alive, you realize one important life lesson: Never try to outrun a bear! THE END!");
				
			document.getElementById("btn1").innerHTML = "Go to the ending screen";
			document.getElementById("btn1").setAttribute("onclick", window.location.href = "endingscreen.html");
			
			break;
			
			case "s18":
					document.body.style.backgroundImage = "url('images/vent.jpg')";
				document.getElementById("ach5").innerHTML = "#5: Getting fearless?";
				alert("Achievment 005: Fearless. ");
			document.getElementById("scene_title").innerHTML = "Ignore the dot and start inspecting your surroundings while running";
			
			document.getElementById("scene_text").innerHTML = "You quickly start to move around, trying to be as quiet as possible. The dot stays focused on your chest, moving as you move. You hear movement in the vents above you. You decide to look up and see a shadow holding what seems to be a gun. There are a few boxes separating you from the vents. Would you like to hide behind the box or stand still with your hands up?";
	
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Hide behind the box";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s24')");
						
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Stand completly still";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s20')");
			
			break;
			
			case "s19":
					document.body.style.backgroundImage = "url('images/boat.jpg')";
						document.getElementById("wrapper").style.color = "white";
			document.getElementById("scene_text").style.color = "white";
			document.getElementById("scene_title").innerHTML = "Go back to the lake and build a boat";
			
			document.getElementById("scene_text").innerHTML = "After going back to the lake and taking the wood that was left behind, you start to build a boat. After working on building the boat for a few hours, you lose 5 pieces of wood. Would you like to go back to the forest, or ride the boat into the lake.";
	
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Back to the forest";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s1')");
						
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Riding the boat";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s5')");
			
			break;
			
			case "s20":
				document.body.style.backgroundImage = "url('images/gameover.jpg')";
			document.getElementById("scene_title").innerHTML = "Standing completely still";
			document.getElementById("scene_text").innerHTML = "";
		alert("After standing completely still you hear a loud BANG. You start to run and you hear another BANG. You quickly look to the side and your life flashes before your eyes as a bullet is headed straight for you. All of a sudden, you can't feel your chest. You look down and a blood is pouring down your body. You realize, the bullet has hit you. THE END"); 
				
			document.getElementById("btn1").innerHTML = "Go to the ending screen";
			document.getElementById("btn1").setAttribute("onclick", window.location.href = "endingscreen.html");
			break;
			
			case "s21":
				document.body.style.backgroundImage = "url('images/mountiantop.jpg')";
				document.getElementById("ach6").innerHTML = "#6: Climbing like a hiker?";
				alert("Achievment 006: Hiker.");
				
				document.getElementById("scene_text").style.color = "white";
				document.getElementById("scene_title").style.color = "white";
				document.getElementById("achievements").style.color = "white";
				
			document.getElementById("scene_title").innerHTML = "Climbing the mountain";
			
			document.getElementById("scene_text").innerHTML = "After hiking up the mountain you start to get exhausted. You start to walk onto a plateau. You rest there for a while, but all of a sudden you here a loud roar. You look below you and a mountain lion is staring straight at you. It starts to climb up the mountain heading straight for you. Would you like to start sprinting up the mountain quickly or stand your ground";
	
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Sprint away from the mountain lion";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s28')");
						
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Stand your ground";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s27')");
			
			break;
			
			case "s22":
				document.body.style.backgroundImage = "url('images/cave.jpg')";
				document.getElementById("scene_title").innerHTML = "Sleeping in the cave";
				document.getElementById("scene_text").innerHTML = "";
			
			alert("When you enter the cave you see an opened door leading to another small cave. You take a peek inside, and see a bed, a TV, clothes, and a refrigerator with a lifetime supply of food! But the best part is, THERE IS WIFI!!!!!!!!! You think this is like a paradise. You decide to stay there for a while. YOU ACHIEVED THE PEACEFUL ENDING."); 
		
			alert("Achievment 008: Peaceful Ending.");
			
			document.getElementById("btn1").innerHTML = "Go to the ending screen";
			document.getElementById("btn1").setAttribute("onclick", window.location.href = "endingscreen.html");
			break;
	
		case "s23":
			document.body.style.backgroundImage = "url('images/campfire.jpg')";
				document.getElementById("scene_title").innerHTML = "On the island";
				
				document.getElementById("scene_text").innerHTML = "After starting a fire with your wood, and making a small shelter, you used 5 pieces of wood. You sleep on the grass and when you wake up, and strong wind starts to blow. Ashes from your campfire falls on the grass and the trees. A large forest fire starts and begins to burn everything in its path. Would you like to swim back to your boat, or climb up the nearby mountain.";
				
				document.getElementById("scene_text").style.color = "darkblue";
				document.getElementById("scene_title").style.color = "black";
				document.getElementById("achievements").style.color = "white";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Swim back to your boat";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s15')");
			
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Climb up the mountain";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s21')");
			break;
			
		
		case "s24":
				document.body.style.backgroundImage = "url('images/box_hide.jpg')";
				document.getElementById("scene_title").innerHTML = "Hiding behind the box";
				
				document.getElementById("scene_text").innerHTML = "You dive behind the small hollow box and take cover as you start hearing gunshots that are aimed directly at the box. You notice a gun nearby, will sprint to the gun and start shooting back or stay behind the cover?";

				document.getElementById("scene_text").style.color = "white";
				document.getElementById("scene_title").style.color = "white";
				document.getElementById("achievements").style.color = "white";
				
				// change the first button
			
				document.getElementById("btn1").innerHTML = "Sprint towards the gun and return fire";
				document.getElementById("btn1").setAttribute("onclick", "updateScene('s25')");
				
				// change the second button
				
				document.getElementById("btn2").innerHTML = "Stay behind your cover";
				document.getElementById("btn2").setAttribute("onclick", "updateScene('s26')");
		
		break;
		
		case "s25":
			document.body.style.backgroundImage = "url('images/.jpg')";
				document.getElementById("scene_title").innerHTML = "Sprint towards the gun and return fire";
				document.getElementById("scene_text").innerHTML = "";
			
			alert("You start to run towards the gun. You hear a bang from behind you. You pick up the gun as you run by it. You quickly load the gun and attempt to get off a shot. Before you get the chance, you lose feeling in your chest, all of a sudden you are on the ground bleeding out."); 
			
			document.getElementById("btn1").innerHTML = "Go to the ending screen";
			document.getElementById("btn1").setAttribute("onclick", window.location.href = "endingscreen.html");
			
			break;
				
		case "s26":
				document.body.style.backgroundImage = "url('images/wormhole.jpg')";
				document.getElementById("scene_title").innerHTML = "Stay behind your cover";
				
				document.getElementById("scene_text").innerHTML = "As you stay behind the box and continue to take cover, you start to get frightened. You start to wonder when this madness will end. The gunshots continue to fire. All of a sudden a light flashes from under another box. You start to think that it is a wormhole. Will you go in and see where it takes you or keep hiding.";

				document.getElementById("scene_text").style.color = "white";
				document.getElementById("scene_title").style.color = "white";
				document.getElementById("achievements").style.color = "white";
				
			
				// change the first button

				document.getElementById("btn1").innerHTML = "Keep hiding";
				document.getElementById("btn1").setAttribute("onclick", "updateScene('s31')");
				
				// change the second button
				
				document.getElementById("btn2").innerHTML = "Jump into the wormhole";
				document.getElementById("btn2").setAttribute("onclick", "updateScene('s30')");
		
		break;	
		
		case "s27":
				document.body.style.backgroundImage = "url('images/.jpg')";
				document.getElementById("scene_title").innerHTML = "Stand Your Ground";
				document.getElementById("scene_text").innerHTML = "";
			
			alert("As the mountain lion comes near you, you stand your ground. You get petrified as the lion pounces on you, you can not dodge the attack in time and you get eaten alive. THE END"); 
			
			document.getElementById("btn1").innerHTML = "Go to the ending screen";
			document.getElementById("btn1").setAttribute("onclick", window.location.href = "endingscreen.html");
			
			break;
			
			case "s28":
			
			document.getElementById("ach7").innerHTML = "#7: Risky Road";
			alert("Achievment 007: Risky Road");
			document.body.style.backgroundImage = "url('images/mountiantop.jpg')";
				document.getElementById("scene_title").innerHTML = "Sprinting away from the mountain lion";
				
				document.getElementById("scene_text").innerHTML = "You sprint away from the mountain lion and you are barely able to escape it, because the mountain lion fell when it was chasing you. You get to the top of the mountain range and you stay there for a while. You are able to see all the other smaller mountains near you. You start to get hungry, exhausted, and you want to get down the mountain. All of a sudden, a wormhole appears next to you. Would you like to jump in it, or stay where you are. ";

				document.getElementById("scene_text").style.color = "white";
				document.getElementById("scene_title").style.color = "white";
				document.getElementById("achievements").style.color = "white";
				
			
				// change the first button

				document.getElementById("btn1").innerHTML = "Jump in the wormhole";
				document.getElementById("btn1").setAttribute("onclick", "updateScene('s30')");
				
				// change the second button
				
				document.getElementById("btn2").innerHTML = "Stay where you are.";
				document.getElementById("btn2").setAttribute("onclick", "updateScene('s29')");
		
		break;	
		
		case "s29":
			document.body.style.backgroundImage = "url('images/gameover.jpg')";
			document.getElementById("scene_title").innerHTML = "Ignoring the wormhole and staying where you are";
			document.getElementById("scene_text").innerHTML = "";
				
				alert("After ignoring the wormhole you die from starvation and exhaustion. THE END"); 
				
			document.getElementById("btn1").innerHTML = "Go to the ending screen";
			document.getElementById("btn1").setAttribute("onclick", window.location.href = "endingscreen.html");
			
			break;
			
			case "s30":
				document.body.style.backgroundImage = "url('images/.jpg')";
				document.getElementById("scene_title").innerHTML = "Jumping in the wormhole";
				document.getElementById("scene_text").innerHTML = "";
			
			alert("After jumping into the wormhole, you are returned back to your home where you relax and forget everything that  has happened. YOU ACHIEVED THE NORMAL ENDING."); 
		
			alert("Achievment 009: Normal Ending.");
			
			document.getElementById("btn1").innerHTML = "Go to the ending screen";
			document.getElementById("btn1").setAttribute("onclick", window.location.href = "endingscreen.html");
			
			break;

	case "s31":
				document.body.style.backgroundImage = "url('images/gameover.jpg')";
				document.getElementById("scene_title").innerHTML = "Keep Hiding";
				document.getElementById("scene_text").innerHTML = "";
			
			alert("You decide to ignore the wormhole and keep hiding where you are. A shot goes through the small hollow box nearly hitting you. You know that soon, you will get shot, so you decide to quickly run away. As soon as you get up, your life flashes before your eyes as a pistol is pointed right on your face. You hear a trigger pulled and you end up blacking out. "); 
			
			document.getElementById("btn1").innerHTML = "Go to the ending screen";
			document.getElementById("btn1").setAttribute("onclick", window.location.href = "endingscreen.html");
			
			break;
			
			
					
	}
}