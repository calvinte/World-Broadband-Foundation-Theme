(function ($) {
 $(document).ready(function(){
   
   var maintainDrop=new Boolean();
   maintainDrop=true;

   function dropDown() { $('.region-dropdown').slideDown(); }
   
   function dropUp() { $('.region-dropdown').slideUp(); }
   
   $('.region-dropdown').hover(
     function(){
       maintainDrop=true;
     },
     function(){
       maintainDrop=false;
       dropUp();
     }
   );
   
   $('a.drop-down').hover(
     function(){
       dropDown();
     }
   );
     
   });
})(jQuery);
