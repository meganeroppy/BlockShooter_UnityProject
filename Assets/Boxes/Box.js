#pragma strict

var colorName : String;
var detonatorPrefab : GameObject;

private var damaged : boolean;
private var killTimer : float;

function Start () {

}

function Update () {
	if(!damaged) return;
	killTimer -= Time.deltaTime;
	if(killTimer <= 0.0){
		var gameController : GameObject = GameObject.FindWithTag("GameController");
		gameController.SendMessage("OnDestroyBox",colorName);
		Instantiate(detonatorPrefab, transform.position, transform.rotation);
		Destroy(gameObject);
	}
}

function ApplyDamage(){
	if(!damaged){
		damaged = true;
		killTimer = 0.4;
		rigidbody.AddForce(Vector3.up * 15.0, ForceMode.Impulse);
	}
}
