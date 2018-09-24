function change()
{
	 var borderR = document.getElementById('r').value;
   var borderG = document.getElementById('g').value;
   var borderB = document.getElementById('b').value;
   var borderW = document.getElementById('w').value;

		 var backgroundR = document.getElementById('r2').value;
	   var backgroundG = document.getElementById('g2').value;
	   var backgroundB = document.getElementById('b2').value;
		 var p = document.getElementById("paragraph");

			 	var borderCol = borderR + borderG + borderB;
			 	p.style.borderColor = "#" + borderCol;
			 	p.style.borderWidth = borderW + "px";

				var backgroundCol = backgroundR + backgroundG + backgroundB;
				p.style.backgroundColor = "#" + backgroundCol;
}
