let counter=0;
let sum =120
var initial_price = 120;

$(document).ready(function(){
  
    

    
    $('#cart').bind('click',open_cart)
    $('#basket , #plus').bind('click',add_item)

})


function add_item(){






    counter=1
    $("#quantity").text(counter);
    $("#basket").css("display","none");
    $("#heart").css("display","none");
    $("#plus").css("display","none");

    var minus_btn = $("<i class='fa-solid fa-minus' style='color: #ffffff;' id='minus_footer'></i>")
    minus_btn.css({"color": "white", "border-radius": "50%","border-color":"white","margin-inline":"10px" ,"cursor": "pointer"});

    var counter_footer = $("<div id='counter_footer'></div>").text(counter);
    counter_footer.css({"color": "white", "border-radius": "50%","border-color":"white","margin-inline":"10px"});

    var plus_btn = $("<i class='fa-solid fa-plus' style='color: #ffffff;' id='plus_footer'></i>")
    plus_btn.css({"color": "white", "border-radius": "50%","border-color":"white","margin-inline":"10px","cursor": "pointer"});

    $("#footer").addClass("justify-content-center");
    $("#footer").append(minus_btn,counter_footer,plus_btn);

    

    $("#minus_footer").bind('click',function(){
     
        if(counter <= 1){
            
            $("#basket").css("display","block");
            $("#heart").css("display","block");
            $("#plus").css("display","block");

            $("#minus_footer").remove();
            $("#counter_footer").remove();
            $("#plus_footer").remove();
            
            counter--;
            $("#quantity").text(counter);
            sum -= initial_price;
            
        }
        if(counter>1){
           
            counter--
            counter_footer.text(counter)
            $("#quantity").text(counter);
            sum -= initial_price;
        }
            
    })

    $("#plus_footer").bind('click',function(){

        
        if(counter >= 1){
            if(counter==1){
                sum = initial_price;
            }
            counter++
            counter_footer.text(counter)
            $("#quantity").text(counter);
            sum += initial_price;
            debugger
            
        }
        
    })
  










}



/////if counter =zero

function open_cart(){
   console.log(counter)

   
if(counter==0){
if($("#myModal")!=undefined){
    
    debugger
    $("#myModal").remove();
}
//model--> inside it dialog
var modal = $("<div id='myModal' class='modal' role='dialog'></div>")

//model-dialog-->inside it content
var modal_dialog = $("<div class='modal-dialog'></div>")

//model-content
var modal_content = $("<div class='modal-content'></div>")

//header-->inside of it button
var modal_header = $("<div class='modal-header'></div>")

//button
var close_btn = $("<button type='button' class='btn-close' data-dismiss='modal'></button>")

//body->inside of it title and text
var modal_body = $("<div class='modal-body d-flex flex-column'></div>")

//title
var title= $("<h4 class='modal-title'>Cart</h4>")

//text
var text = $(" <p class='text align-self-center'>You have no items in your Shopping Bag.</p>")

//footer--> inside icon & continue shopping
var footer = $("<div class='modal-footer bg-dark d-flex align-items-center justify-content-center' data-dismiss='modal'></div>")
footer.css("cursor","pointer")

//icon
var icon = $("<i class='fa-solid fa-bag-shopping' id= 'cart_icon'style='color: white;'></i>")

//cont.
var continue_shopping = $("<div class='continue text-light'>CONTINUE SHOPPING</div>")
modal.append(modal_dialog.append(modal_content.append(modal_header.append(close_btn),modal_body.append(title,text),footer.append(icon,continue_shopping))));
$("#body").append(modal);
}

else{
console.log(counter)
debugger
$("#myModal").remove();






    
   


//model--> inside it dialog
var modal = $("<div id='myModal' class='modal' role='dialog'></div>")

//model-dialog-->inside it content
var modal_dialog = $("<div class='modal-dialog'></div>")

//model-content
var modal_content = $("<div class='modal-content'></div>")

//header-->inside of it button
var modal_header = $("<div class='modal-header'></div>")

//button
var close_btn = $("<button type='button' class='btn-close' data-dismiss='modal'></button>")

//body->inside of it title and text & wrapper
var modal_body = $("<div class='modal-body d-flex flex-column'></div>")

//title
var title= $("<h4 class='modal-title'>Cart</h4>")
//wrapper --> inside of it image and description
var wrapper = $("<div class='wrapper d-flex'></div>")

//img
var img = $("<div class='img img-fluid'><img src='./images/small_jacket.png' alt='' class='img-fluid'></div>")

//description --> inside color and sizes
var descr = $("<div class='description d-flex flex-column '></div>")

//title
var descr_title = $(" <div class='title'>MOHAN</div>")
//text
var descr_text = $("<div class='desc'>Recycle Boucle Knit Cardigan Pink</div>")


// counter

var wrapper_counter = $("<div class='wrapper d-flex align-items-center'></div>")
var minus_button = $("<i class='fa-solid fa-minus' style='color: #ffffff;' id='minus_buy'></i>")
minus_button.css({"color": "black", "border-radius": "50%","border-color":"black","margin-right":"10px" ,"cursor": "pointer"});

var counter_buy = $("<div id='counter_footer'></div>").text(counter);
counter_buy.css({"color": "black", "border-radius": "50%","border-color":"black","margin-inline":"10px"});

var plus_button = $("<i class='fa-solid fa-plus' style='color: #ffffff;' id='plus_buy'></i>")
plus_button.css({"color": "black", "border-radius": "50%","border-color":"black","margin-inline":"10px","cursor": "pointer"});


////////////
//price
var descr_price = $("<div class='price mb-5'>$120</div>");

/////////accumlated price
//inside text and price
var sub_total = $("<div class='total d-flex justify-content-between border-top mb-1'></div>");

var sub_text = $("<div>SUB TOTAL</div>");

var sub_price = $("<div class='total_cash text-warning' id='total_price'></div>");
sub_price.text("$"+sum)
///////////

//footer--> inside icon & continue shopping
var footer = $("<div class='modal-footer bg-dark d-flex align-items-center justify-content-center'></div>")

//icon
var icon = $("<i class='fa-solid fa-bag-shopping' id= 'cart_icon'style='color: white;'></i>")

//cont.

var continue_shopping = $("<div class='continue text-light'>BUY NOW</div>")
modal.append(modal_dialog.append(modal_content.append(modal_header.append(close_btn),modal_body.append(title,wrapper.append(img,descr.append(descr_title,descr_text,wrapper_counter.append(minus_button,counter_buy,plus_button),descr_price))),sub_total.append(sub_text,sub_price),footer.append(icon,continue_shopping))));
$("#body").append(modal);

debugger


$("#minus_buy").bind('click',function(event){
     
    event.preventDefault();

 
    if(counter>1){
       
        
        sum-=120;
        counter--
        counter_buy.text(counter)
        $("#quantity").text(counter);
        $("#total_price").text("$"+sum)
        $("#counter_footer").text(counter)
    }
        
})

$("#plus_buy").bind('click',function(event){

    event.preventDefault();
 
    if(counter >= 1){
        
      
        counter++
        counter_buy.text(counter)
        $("#quantity").text(counter);

        sum += initial_price
        
        $("#total_price").text("$"+sum)
        $("#counter_footer").text(counter)
    }
    
})



}



}










let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  // Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");//3
    let dots = document.getElementsByClassName("dot");//3
    if (n > slides.length) {slideIndex = 1}//index is bigger than slides number reset to initial slide
    if (n < 1) {slideIndex = slides.length}//if slide index is bigger than 1 slide index= 3
    for (i = 0; i < slides.length; i++) { //loop on slides
      slides[i].style.display = "none"; //hide them
    }
    for (i = 0; i < dots.length; i++) {//loop on dots
      dots[i].className = dots[i].className.replace(" active", "");//replace active with nothing
    }
    slides[slideIndex-1].style.display = "block";//3 -1 bec. arrays start from zero (show)
    dots[slideIndex-1].className += " active";//dots active
  }
  
// /* Open when someone clicks on the span element */
// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
//   }
  
//   /* Close when someone clicks on the "x" symbol inside the overlay */
//   function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
//   }
  
