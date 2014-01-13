#pragma strict

@script RequireComponent(Scorekeeper)
var skin : GUISkin;
var switchInterval : float;
var rewardPoint : int;
var penaltyPoint : int;

private var scorekeeper : Scorekeeper;
private var targetIsRed : boolean;
private var switchTimer : float;

private function GetTargetColorName() : String{
	return targetIsRed ? "Red" : "Blue";
}

function Start () {
	scorekeeper = GetComponent(Scorekeeper) as Scorekeeper;
	targetIsRed = true;
	switchTimer = switchInterval;
}

function Update () {
	switchTimer -= Time.deltaTime;
	if(switchTimer < 0.0){
		targetIsRed = !targetIsRed;
		switchTimer = switchInterval;
	}
}

function OnDestroyBox(boxColorName : String){
	if(boxColorName == GetTargetColorName()){
		scorekeeper.score += rewardPoint;
	}else{
		scorekeeper.score -= penaltyPoint;
	}
}

function OnGUI(){
	GUI.skin = skin;
	if(switchTimer < 1.5) return;
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var message : String = "Shoot" + GetTargetColorName() + "Boxes";
	GUI.color = targetIsRed ? Color.red : Color.blue;
	GUI.Label(Rect(0, sh / 4, sw,  sh / 2), message, "message");
}

function TimeUp(){
	enabled = false;
}

function StartGame(){
	enabled = true;
}