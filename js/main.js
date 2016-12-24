window.onload = function(){//empêche l'execution du code avant le chargement de tous les élts de la page
	var canvas = document.getElementById('canvas');
		if(!canvas)
		{
			alert("Impossible de récupérer le canvas");
			return;
		}
		canvas.width = 600;
		canvas.height = 600;
	var context = canvas.getContext('2d');
		if(!context)
		{
			alert("Impossible de récupérer le context du canvas");
			return;
		}
	
}