var animalNum=0;

function AnimalSearch()
{
	if(animalNum < 1) //If at animal index passing animal1 loop to animal6
  {
		animalNum=6;
	}
	if(animalNum > 6) //If at animal index passing animal6 loop to animal1
	{
		animalNum=1;
	}
	document.getElementById("image").src = "animal" + animalNum +".jpg"; //Display Animal
}

function showNext()
{
	animalNum++;
	AnimalSearch();
}

function showPrev()
{
	animalNum--;
	AnimalSearch();
}
