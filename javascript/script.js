$(document).ready(function(){
 
	var galleriBilder = $(".bildContainer-galeri img");
	var pos = 0;

	function galleriRotation(){

		$(galleriBilder[pos]).fadeOut(1000 , function(){

			if(pos + 1 < galleriBilder.length){
				++pos;
				$(galleriBilder[pos]).fadeIn(1000);
			}
			else{
				pos=0;
				$(galleriBilder[pos]).fadeIn(1000);
			}
		});
	};

	setInterval(galleriRotation , 5000);

	$(".mobil-nav-toogle").on("click", function(){ 
		$("#nav").slideToggle();
	});


	$(".bild-galleri-container div").on("mouseover" , function(){
		$(this).animate({bottom:"15px"});
	});

	$(".bild-galleri-container div").on("mouseout " , function(){
		$(this).animate({top:"15px"});
	});
});