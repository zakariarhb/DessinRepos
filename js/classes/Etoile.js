//var nbrePoints=5;//vous pouvez choisir d'autres valeurs

//constructeur
function Etoile(x , y, ryInt, ryExt ,nbreP)//nbreP est optionnelle,compatibilites à gérer
{
	/* optionnel(ryInt,10);
	optionnel(ryExt,20);
	optionnel(nbreP,5) */;
	
	this.x=x;
	this.y=y;
	this.ryInt=ryInt;
	this.ryExt=ryExt;
	this.nbreP=nbreP;
}
//fonctionDessinner
Etoile.prototype.dessinerEtoile=function(context,couleurTrait,couleurFond){
	//optionnel(couleurTrait,"orange");
	//optionnel(couleurFond,"orange");
	var x,y,b,c,nbreP;
	x=this.x;
	y=this.y;
	b=this.ryInt;
	c=this.ryExt;
	nbreP=this.nbreP;
	context.beginPath();
	context.moveTo(x,y-c);
	for(var e=1;nbreP*2>e;e++){
		var f=e%2===0?c:b,g=x+f*Math.sin(e*Math.PI/nbreP),h=y-1*f*Math.cos(e*Math.PI/nbreP);
		context.lineTo(g,h)
	}
	context.strokeStyle=couleurTrait;
	context.stroke();
	context.fillStyle=couleurFond;
	context.fill();
	context.closePath();
}