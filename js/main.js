window.onload = function(){//emp�che l'execution du code avant le chargement de tous les �lts de la page
	var canvas = document.getElementById('canvas');
		if(!canvas)
		{
			alert("Impossible de r�cup�rer le canvas");
			return;
		}
	var context = canvas.getContext('2d');
		if(!context)
		{
			alert("Impossible de r�cup�rer le context du canvas");
			return;
		}
}