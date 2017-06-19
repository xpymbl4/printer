
var meshBaseColor = new THREE.MeshLambertMaterial({color: 0xffffff});
var MeshClickColor = new THREE.MeshLambertMaterial({color: 0xff0000});
var menuClick = document.getElementById('menu');

var objloader = new THREE.OBJLoader();
var stlloader = new THREE.STLLoader();

console.log(menuClick);

//zbelt

objloader.load('objmodels/zbelt.obj', function(object){
    scene.add(object);

menuClick.addEventListener('click', function(){
	
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
if (event.target.id === 'zbelt'){		
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                    
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                 
                }
            });
        }
});
});


//zmotor

objloader.load('objmodels/zmotor.obj', function(object){
    scene.add(object);

menuClick.addEventListener('click', function(){

				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
				
if (event.target.id === 'zmotor'){
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                   
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                    
                }
            });
        }
});
});


//zscrew

objloader.load('objmodels/zscrew.obj', function(object){      //change location
    scene.add(object);

menuClick.addEventListener('click', function(){
	
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
				
if (event.target.id === 'zscrews'){                                     //change id of clicked object
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                   
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                    
                }
            });
        }
});
});



//xmotor

objloader.load('objmodels/xmotor.obj', function(object){      //*******change location
    scene.add(object);

menuClick.addEventListener('click', function(){
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
				
if (event.target.id === 'xmotor'){                                      //********change id of clicked object
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                    child.material.opacity = 1;
                    child.material.transparent = true;
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                    child.material.opacity = .7;
                    child.material.transparent = true;
                }
            });
        }
});
});

//xbelt

objloader.load('objmodels/xbelt.obj', function(object){      //*******change location
    scene.add(object);

menuClick.addEventListener('click', function(){
	   
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
				  
if (event.target.id === 'xbelt'){				  //********change id of clicked object
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                    child.material.opacity = 1;
                    child.material.transparent = true;
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                    child.material.opacity = .7;
                    child.material.transparent = true;
                }
            });
        }
});
});

//xrail

objloader.load('objmodels/xrail.obj', function(object){      //*******change location
    scene.add(object);

menuClick.addEventListener('click', function(){
	
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
				 
if (event.target.id === 'xrails'){				 //********change id of clicked object
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                    child.material.opacity = 1;
                    child.material.transparent = true;
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                    child.material.opacity = .7;
                    child.material.transparent = true;
                }
            });
        }
});
});

//ymotor

objloader.load('objmodels/ymotor.obj', function(object){      //*******change location
    scene.add(object);

menuClick.addEventListener('click', function(){
	
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
				   
if (event.target.id === 'ymotor'){				   //********change id of clicked object
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                    child.material.opacity = 1;
                    child.material.transparent = true;
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                    child.material.opacity = .7;
                    child.material.transparent = true;
                }
            });
        }
});
});

//yrails

objloader.load('objmodels/yrail.obj', function(object){      //*******change location
    scene.add(object);

menuClick.addEventListener('click', function(){
	 
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
				
if (event.target.id === 'yrails'){				//********change id of clicked object
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                    child.material.opacity = 1;
                    child.material.transparent = true;
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                    child.material.opacity = .7;
                    child.material.transparent = true;
                }
            });
        }
});
});

//ybelt

objloader.load('objmodels/ybelt.obj', function(object){      //*******change location
    scene.add(object);

menuClick.addEventListener('click', function(){
	 
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
				
if (event.target.id === 'ybelt'){				//********change id of clicked object
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                    child.material.opacity = 1;
                    child.material.transparent = true;
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                    child.material.opacity = .7;
                    child.material.transparent = true;
                }
            });
        }
});
});


//rulers

objloader.load('objmodels/rulers.obj', function(object){      //*******change location
    scene.add(object);

menuClick.addEventListener('click', function(){
	
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
				   
if (event.target.id === 'bedrulers'){ 				   //********change id of clicked object
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                    child.material.opacity = 1;
                    child.material.transparent = true;
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                    child.material.opacity = .7;
                    child.material.transparent = true;
                }
            });
        }
});
});

//platform

objloader.load('objmodels/platform.obj', function(object){      //*******change location
    scene.add(object);

menuClick.addEventListener('click', function(){
	 
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
				  
if (event.target.id === 'platform'){				  //********change id of clicked object
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                    child.material.opacity = 1;
                    child.material.transparent = true;
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                    child.material.opacity = .7;
                    child.material.transparent = true;
                }
            });
        }
});
});

//honeycomb

objloader.load('objmodels/honeycomb.obj', function(object){      //*******change location
    scene.add(object);

menuClick.addEventListener('click', function(){
	
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
			
if (event.target.id === 'bedhoneycomb'){ 			//********change id of clicked object
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                    child.material.opacity = 1;
                    child.material.transparent = true;
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                    child.material.opacity = .7;
                    child.material.transparent = true;
                }
            });
        }
});
});

//mirror

objloader.load('objmodels/mirror.obj', function(object){      //*******change location
    scene.add(object);

menuClick.addEventListener('click', function(){
	
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
				  
if (event.target.id === 'xmirror'){				  //********change id of clicked object
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                    child.material.opacity = 1;
                    child.material.transparent = true;
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                    child.material.opacity = .7;
                    child.material.transparent = true;
                }
            });
        }
});
});

//lens

objloader.load('objmodels/lensmirror.obj', function(object){      //*******change location
    scene.add(object);

menuClick.addEventListener('click', function(){
	
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
				 
if (event.target.id === 'lens'){				 //********change id of clicked object
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                    child.material.opacity = 1;
                    child.material.transparent = true;
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                    child.material.opacity = .7;
                    child.material.transparent = true;
                }
            });
        }
});
});

//carriage

objloader.load('objmodels/carriage.obj', function(object){      //*******change location
    scene.add(object);

menuClick.addEventListener('click', function(){
	
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
				  
if (event.target.id === 'carriage'){				  //********change id of clicked object
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                    child.material.opacity = 1;
                    child.material.transparent = true;
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                    child.material.opacity = .7;
                    child.material.transparent = true;
                }
            });
        }
});
});

//controlpad

objloader.load('objmodels/controlpad.obj', function(object){      //*******change location
    scene.add(object);

menuClick.addEventListener('click', function(){
	
				if ((ConnectModel.myType == ConnectModel.TYPE_LISTENER) && (ConnectModel.badEvent(event))) {
					return;
				}
				else if (ConnectModel.myType == ConnectModel.TYPE_BROADCASTER) {
					ConnectModel.setEvent(event, ConnectModel.EVENT_MOUSE_CLICK, ConnectModel.EVENT_to_ID_ELEMENT, event.target.id, null);
				}
				     
if (event.target.id === 'controlpad'){					 //********change id of clicked object
            object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xff0000);   //change color of selected object
                    child.material.opacity = 1;
                    child.material.transparent = true;
                }
            });
        }
else{
           object.traverse(function(child) {
                if (child.material) {
                    child.material.color.setHex(0xffffff);  //change color if not selected
                    child.material.opacity = .7;
                    child.material.transparent = true;
                }
            });
        }
});
});
