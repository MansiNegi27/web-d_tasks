
var my_cube = document.getElementById("cube");
my_cube.addEventListener("animationend",listener,false);
function listener(){
	my_cube.classList.remove("cube_rotate");
	var my_cube_faces = my_cube.getElementsByTagName("div");
	var len = my_cube_faces.length;
	for(var i=0;i<len;i++){
		var intial_class_list = my_cube_faces[i].classList;
		my_cube_faces[i].classList.add(intial_class_list[0]+"_split");
	}
}


