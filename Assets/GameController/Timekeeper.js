#pragma strict
var skin : GUISkin;
var gameLength : float;

private var elapsed : float;

function Start () {

}

function Update () {
	elapsed += Time.deltaTime;
	if(elapsed >= gameLength){
		BroadcastMessage("TimeUp");
		GameObject.FindWithTag("MainCamera").SendMessage("TimeUp");
		enabled = false;
	}
}

function StartGame(){
	enabled = true;
}
/*
function OnGUI(){
	GUI.skin = skin;
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var text : String = "TimeLimit";
	GUI.Label(Rect(0, 0, sw / 6, sh / 2), text, "message");
}
*/