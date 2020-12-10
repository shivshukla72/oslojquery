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

  	 $("#slider .slides").animate({'margin-left':'-='+width },3000,function(){
        
        currentslide++;

        if(currentslide===$slides.length)
        {
        	currentslide=1;
        	$slidecontainer.css('margin-left',0);
        }
               
  	 });

  },4000);


}
startslider();
   function stopslider()
   {
     clearInterval(interval);
   }
$("#prev").click(function(){

	if(currentslide==1)
        { 
            currentslide=1;
           	$slidecontainer.css('margin-left',0);

        }
    
    else{
     
	        $("#slider .slides").animate({'margin-left':'+='+width },2000,function(){
             
            if(currentslide==1)
            { 
	            currentslide=1;
	           	$slidecontainer.css('margin-left',0);
           	
            }
            currentslide++;

           if(currentslide===$slides.length)
            {
        	  currentslide=1;
        	  $slidecontainer.css('margin-left',0);
            }
             
        
  	 });
   }
    
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
 
 $("#prev").dblclick(function(e){

 	e.preventDefault();
 });

// $("#page1").click(function(){
       
//          if (currentslide==1)
//          {
//          	width=0;
//          	$("#slider .slides").animate({'margin-left':'+='+width });
//          	startslider();
//          }
//          else
//          {     
//             width=1350;       
//             $("#slider .slides").animate({'margin-left':'+='+width });
//          }
// });
// $("#page2").click(function(){
           
//            width=1350;	
//            $("#slider .slides").animate({'margin-left':'-='+width });
//        });

function myfunction()
    {
       alert("you have successfully registered");
    }

});


    

   