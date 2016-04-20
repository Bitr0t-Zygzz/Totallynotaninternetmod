var internet = {};
(function()
{
	internet.randomizerchoose = function()
	{
		 var category = Math.floor((Math.random() * 3) + 1);
		 return category;
	}
	
	internet.randomizerchancetrashtalk = function(rating)
	{
		var ttrating =0;
				if (rating>=0&&rating<=2){
			ttrating=100;
		}
				else if (rating>=2&&rating<=3){
			ttrating=80;
		}
				else if (rating>=3&&rating<=4){
			ttrating=60;
		}
				else if (rating>=4&&rating<=5){
			ttrating=50;
		}
				else if (rating>=5&&rating<=6){
			ttrating=30;
		}
				else if (rating>=6&&rating<=7){
			ttrating=10;
		}
				else if (rating>=7&&rating<=8){
			ttrating=5;
		}
				else if (rating>=8&&rating<=9){
			ttrating=3;
		}
				else {
					ttrating=2;
				}
				
		var ratingcheck = Math.floor((Math.random() * 101));
			
		if (ttrating<=ratingcheck)
			return true;
		
	};
	
	
		internet.randomizerdobetter = function(rating)
	{
		var dobetterrating =0;
				if (rating>=0&&rating<=2){
			dobetterrating=0;
		}
				else if (rating>=2&&rating<=3){
			dobetterrating=60;
		}
				else if (rating>=3&&rating<=4){
			dobetterrating=80;
		}
				else if (rating>=4&&rating<=5){
			dobetterrating=80;
		}
				else if (rating>=5&&rating<=6){
			dobetterrating=80;
		}
				else if (rating>=6&&rating<=7){
			dobetterrating=60;
		}
				else if (rating>=7&&rating<=8){
			dobetterrating=40;
		}
				else if (rating>=8&&rating<=9){
			dobetterrating=20;
		}
				else {
					dobetterrating=0;
				}
				
		var ratingcheck = Math.floor((Math.random() * 101));
			
		if (dobetterrating<=ratingcheck)
			return true;
		
	};
	
	
		internet.randomizerchancetrashtalk = function(rating)
	{
		var goodrating =0;
				if (rating>=0&&rating<=3){
			goodrating=0;
		}
				else if (rating>=3&&rating<=4){
			goodrating=10;
		}
				else if (rating>=4&&rating<=5){
			goodrating=30;
		}
				else if (rating>=5&&rating<=6){
			goodrating=40;
		}
				else if (rating>=6&&rating<=7){
			goodrating=60;
		}
				else if (rating>=7&&rating<=8){
			goodrating=80;
		}
				else if (rating>=8&&rating<=9){
			goodrating=90;
		}
				else {
					goodrating=100;
				}
				
		var ratingcheck = Math.floor((Math.random() * 101));
			
		if (goodrating<=ratingcheck)
			return true;
		
	};
	
	
	
}

)