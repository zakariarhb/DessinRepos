window.onload = function(){//empêche l'execution du code avant le chargement de tous les élts de la page
	var canvas = document.querySelector('#canvas');
		if(!canvas)
		{
			alert("Impossible de récupérer le canvas");
			return;
		}
		canvas.width = 700;
		canvas.height = 600;
	var context = canvas.getContext('2d');
		if(!context)
		{
			alert("Impossible de récupérer le context du canvas");
			return;
		}
	//button vider
	var buttonVider = document.getElementById("vider");
	
	buttonVider.addEventListener('click',function(){
		context.clearRect(0,0, canvas.width,canvas.height);//vider à chaque fois notre canvas
		console.log("vider le canvas");
	},false);
	
	//bouton Dessiner
	var buttonDessiner = document.getElementById("dessiner");
	
	buttonDessiner.addEventListener('click',function(){
		
		context.beginPath();
		context.moveTo(0, 300);
		context.lineTo(150,0);
		context.lineTo(300,300);
		context.lineTo(0,300);
		context.stroke();
		console.log("button dessiner");
	},false);
	
	//button enregister
	var buttonEnregistrer = document.getElementById	("enregistrer");
	buttonEnregistrer.addEventListener('click',function(){
		
	},false);
	
	//button Annuler
	var buttonAnnuler = document.getElementById	("annuler");
	buttonAnnuler.addEventListener('click',function(){
		
	},false);
	
	//button trait
	var buttonTrait = document.getElementById("trait");
	//buttonTrait.addEventListener('click');
	canvas.addEventListener('click',function(e){
		context.beginPath();
		var mouseX = getMousePosition(e).x - getPosition(canvas).x;
		var mouseY = getMousePosition(e).y -getPosition(canvas).y;
		context.moveTo(mouseX,mouseY);
		context.lineTo(100,100);
		console.log("X :"+mouseX+" Y :"+mouseY);
		context.stroke();
	},false);
}