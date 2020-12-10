$("document").ready(function(){
    
    var width=1350;
    var $slider=$("#slider");
    var $slidecontainer=$slider.find('.slides');
    var $slides=$slidecontainer.find('.slide');
    var currentslide=1;
    var interval;
    var next;

$slider.on('mouseenter',stopslider).on('mouseleave',startslider);



 function startslider(){
      interval=setInterval(function(){ 

  	 $("#slider .slides").animate({'margin-left':'-='+width },2000,function(){
        
        currentslide++;

        if(currentslide===$slides.length)
        {
        	currentslide=1;
        	$slidecontainer.css('margin-left',0);
        }

  	 });

  },3000);
}
startslider();
   function stopslider()
   {
     clearInterval(interval);
   }
$("#prev").click(function(){

	$("#slider .slides").animate({'margin-right':'='+width },2000,function(){
        
        currentslide++;

        if(currentslide===$slides.length)
        {
        	currentslide=1;
        	$slidecontainer.css('margin-left',0);
        }

        if(currentslide==1)
        {  
            currentslide=1;
           	$slidecontainer.css('margin-left',0);

        }

  	 });
    
 });
$("#next").click(function(){

	$("#slider .slides").animate({'margin-left':'-='+width },2000,function(){
        
        currentslide++;  

        if(currentslide===$slides.length)
        {
        	currentslide=1;
        	$slidecontainer.css('margin-left',0);
        }

  	 });

 });   
     	
function myfunction()
    {
       alert("you have successfully registered");
    }

});


    

   