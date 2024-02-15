$(function(){

    //menu
    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    }, function(){
        $(this).find(".sub").stop().slideUp();
    })

    //img slide
    var n = 0;
    setInterval(function(){
        if(n < 2){
            n++;
        }else{
            n=0;
        }//if
        console.log(n);
        pos = n * (-840) + "px"
        $(".top_move").animate({top:pos},500)
    },2500)

    //pop
    $(".p_click").click(function(){
        $(".modal_bg, .pop").show();
    })
    $(".close").click(function(){
        $(".modal_bg, .pop").hide();
    })

})//jquery