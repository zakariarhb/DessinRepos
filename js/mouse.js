function getMousePosition (event){
	if (event.pageX)//return la position x y sur les deux axe; supporté par tous les nav. sauf IE
	{
		return {
			x: event.pageX ,
			y: event.pageY
		};
	}
	else{
		return {
			x: event.clientX + document.body.scrollLeft + document.documentElement.screenLeft ,
			y: event.clientY + document.body.scrollTop + document.documentElement.screenTop			
		};/*l'exception d'Internet Explorer qui demande d'utiliser clientX et
			clientY. Mais en plus de cela, il faut additionner les valeurs du défilement horizontal et vertical.
			En effet, sans cela, Internet Explorer ne tient pas compte du défilement de la page*/
	}
} 
//Recuperer les coordonnes de l'elt.
function getPosition(element){
	var top =0, left = 0;
	
	while (element){
		left +=element.offsetLeft;
		top  +=element.offsetTop;
		element = element.offsetParent;
	}
	return {x : left , y: top};
}