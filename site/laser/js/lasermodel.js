var clickToHide = document.getElementsByClassName('accordion');
/*for(var i = 0; i <clickToHide.length; i++){
clickToHide[i].addEventListener('click', function(){
	console.log(i);
});
}*/


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
var renderer = new THREE.WebGLRenderer({
	antialias: true
});

renderer.setClearColor( 0xCCCCCC );
camera.position.z = 20;
camera.position.y = 70;
camera.position.x = 0;
renderer.setSize(window.innerWidth-10, window.innerHeight-10);
document.body.appendChild(renderer.domElement);
renderer.domElement.id = "context"
scene.add(new THREE.HemisphereLight(0xaaaaaa, 0x444444));
var light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(1, 1, 1);
scene.add(light);
			
var lasermodelClear = new THREE.MTLLoader();
			
lasermodelClear.load('models/plsClear.mtl', function(material){
	material.preload();
	var loader = new THREE.OBJLoader();
	loader.setMaterials(material);
	loader.load('models/plsClear.obj', function(object){
		scene.add(object);
		for (var i = 0; i <clickToHide.length; i++){
			clickToHide[i].insideNum = i;
			clickToHide[i].addEventListener('click', function(){
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_CLASS_NAME_ELEMENT, "accordion", event.target.insideNum);
				}
				object.visible = false;
			});
		}				
	});
});

var lasermodelWire = new THREE.MTLLoader();
			
lasermodelWire.load('models/wireframe.mtl', function(material){
	material.preload();
	var loader = new THREE.OBJLoader();
	loader.setMaterials(material);
	loader.load('models/wireframe.obj', function(object){
		scene.add(object);
		object.visible = false;
		for( var i = 0; i <clickToHide.length; i++){
			clickToHide[i].insideNum = i;
			clickToHide[i].addEventListener('click', function(){
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_CLASS_NAME_ELEMENT, "accordion", event.target.insideNum);
				}
				object.visible = true;
			});
		}				
	});
});

var lasermodelSolid = new THREE.MTLLoader();
			
lasermodelSolid.load('models/plsSolid.mtl', function(material){
	material.preload();
	var loader = new THREE.OBJLoader();
	loader.setMaterials(material);
	loader.load('models/plsSolid.obj', function(object){
		scene.add(object);
	});
});

var render = function() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
	if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
		controls.update();
	}
};

    ///scene controls for mouse
controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set( 0,30,0 );
		
var _connectController = new ConnectController();
_connectController.init();

if (_connectController) {
	_connectController.setCamera(camera); // init camera is first
	_connectController.setControls(controls); // init controls is second
	controls.addEventListener( 'change', _connectController.onCameraPositionChange); // on change camera position
			
	if (ConnectModel.myType == ConnectModel.TYPE_LISTENER) {
		controls.dispose(); // destruct cantrols
		controls.update();
	}
}
		
render();
//end of controls
