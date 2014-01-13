#pragma strict

var skin : GUISkin;

private var timer : float;

function Start () {
	timer = 3.5;
}

function Update () {
	timer -= Time.deltaTime;
	if(timer <= 0.0){
		BroadcastMessage("StartGame");
		enabled = false;
	}
}

function OnGUI(){
	GUI.skin = skin;
	if(timer > 3.0 || timer <= 0.0) return;
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var text : String = Mathf.CeilToInt(timer).ToString();
	GUI.skin = skin;
	GUI.color = Color(1, 1, 1, timer - Mathf.FloorToInt(timer));
	GUI.Label(Rect(0, sh /4, sw, sh /2), text, "count");
}