$(function () {
    $(".product-add").click(function () {    //做加的動作
        var a = $(this).prev().val();
        var b = parseInt(a) + 1;
        if (b == 99) { 
            return;
        } 
        $(this).prev().val(b);

        TotalPrice();
        
    }); $(".product-reduce").click(function () {    //做減的動作
        var a = $(this).next().val();
        var b = parseInt(a) - 1;
        if (b == 0) { 
            return;
        } 
        $(this).next().val(b);
        TotalPrice();
    });
    $(".product-ckb").click(function () {
        $(this).children("em").toggleClass("product-xz"); 
        TotalPrice();
        productxz();
    });
// cash
    $(".cash-ckb").click(function () {                  //可以打勾
        $(this).children("em").toggleClass("cash-xz"); 
        TotalPrice();
        productxz();
    });


    $(".product-al").click(function () {
        var a = $(".product-em");
        var b = $(".product-all em");
        b.toggleClass("product-all-on");
        if ($(this).find(".product-all em").is(".product-all-on")) { 
            a.addClass("product-xz") 
        } 
        else { 
            a.removeClass("product-xz") 
        } 
        TotalPrice();
        quantity();
    });

    $(".product-sx").mouseenter(function (){
        $(this).css("background-color","#DCDCDC");
    });
    $(".product-sx").mouseleave(function (){
        $(this).css("background-color","none");
    });

    
    $(".product-del").click(function () {
        $(this).closest(".product-box").remove();
        koncat();
        TotalPrice();
    });
    TotalPrice();
    quantity();
    koncat();
});
function productxz() {
    var a = $(".product-em");
    var b = $(".product-xz");
    if (b.length == a.length) {
        $(".product-all em").addClass("product-all-on");
    }
    else {
        $(".product-all em").removeClass("product-all-on");
    }
    quantity();
    TotalPrice();
}
function TotalPrice() {
    var a = 0;
    var f = 0;
    $(".product-em").each(function () {
        if ($(this).is(".product-xz")) {
            var c = parseInt($(this).parents(".product-ckb").siblings().find(".price").text());
            var d = parseInt($(this).parents(".product-ckb").siblings().find(".product-num").val());
            // var e = parseInt($(".cash-num").text());
            var b = c * d;
            a += b;
            //  $(".cash-em").each(function (){
            //      if($(this).is("cash-xz")) {
            //          var e = parseInt($(this).parents(".cash-ckb").siblings().find(".cash-num").text());
            //        f = a - e;  
            //      }
            // });
        };
        $(".all-price").text(a.toFixed(2));
        
    });

    //購物金
    $(".cash-box").on("click", function(){
        if( $("#cash-cbx").prop("checked") ) { // 回傳布林值
            var e = parseInt($(".cash-num").text());    // 金額為0不能扣
            if(a == 0) {
                f = 0;
            }
            else {
                f = a - e;
            };
        }
        else {
            f = a;
        }
        $(".all-price").text(f.toFixed(2));
    });

} 
function quantity() {

    $(".product-all-sl").text("");

    var a = $(".product-xz").length;

    $(".product-all-sl").text(a);

    if (a > 0) {
        $(".product-all-qx").text("已選");
        $(".all-sl").css("display", "inline-block");
        $(".product-sett").removeClass("product-sett-a");
    }
    else {
        $(".product-all-qx").text("全選");
        $(".all-sl").css("display", "none");
        $(".product-sett").addClass("product-sett-a");
    }
}
function koncat() {

    var a = $(".product-box").length;

    if (a <= 0) {
        $(".all-price").text("0.00");
        $(".product-all-qx").text("全選");
        $(".all-sl").css("display", "none");
        $(".product-sett").addClass("product-sett-a");
        $(".product-all em").removeClass("product-all-on");
    }
    else {
        $(".kon-cat").css("display", "none");
    }
};