$("document").ready(function(){
    
    var width=1350;
    var $slider=$("#slider");
    var $slidecontainer=$slider.find('.slides');
    var $slides=$slidecontainer.find('.slide');
    var currentslide=1;
    var interval;
    var next;

$slider.on('mouseenter',stopslider).on('mouseleave',startslider);
 function stopslider()
 {
     clearInterval(interval);
 }

  

 function startslider(){
      interval=setInterval(function(){ 


  	 $("#slider .slides").animate({'margin-left':'-='+width },1000,function(){

  	 	           
        $(".pagecircle").removeClass('active');
        console.log(currentslide);
        $(".pagecircle").eq(currentslide).addClass('active');
         
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


$("#prev").on("click",function(){

	if(currentslide==1)
        { 
            currentslide=1;
           	$slidecontainer.css('margin-left',0);

        }
    
    else{
           
         if(currentslide==1)
           { 
	           	$slidecontainer.css('margin-left',0);
           	
           } 
       
	        $("#slider .slides").animate({'margin-left':'+='+width },2000,function(){
             
            
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
 

function myfunction()
    {
       alert("you have successfully registered");
    }

});


    

   