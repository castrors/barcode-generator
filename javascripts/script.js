var defaultValues = {
    CODE128 : "Example 1234",
    CODE128A : "EXAMPLE",
    CODE128B : "Example text",
    CODE128C : "12345678",
    EAN13 : "1234567890128",
    EAN8 : "12345670",
    UPC : "123456789999",
    CODE39 : "EXAMPLE TEXT",
    ITF14 : "10012345000017",
    ITF : "123456",
    MSI : "123456",
    MSI10 : "123456",
    MSI11 : "123456",
    MSI1010 : "123456",
    MSI1110 : "123456",
    pharmacode : "1234"
};

$(document).ready(function(){
    $("#userInput").on('input',newBarcode);
    $("#barcodeType").change(function(){
        $("#userInput").val( defaultValues[$(this).val()] );

        newBarcode();
    });


    $(".generate").click(function(){
      var firstBarcode = $("#firstBarcode").val();
      var secondBarcode = $("#secondBarcode").val();
      console.log(getBarcodeHTML(firstBarcode));
      $("#sequenceResult").append(getBarcodeHTML(firstBarcode));
      JsBarcode("."+firstBarcode+"").init();
    });

    newBarcode();
});

var newBarcode = function() {
    //Convert to boolean
    $("#barcode").JsBarcode(
        $("#userInput").val(),
        {
          "format": $("#barcodeType").val(),
          "background": $("#background-color").val(),
          "lineColor": $("#line-color").val(),
          "fontSize": parseInt($("#bar-fontSize").val()),
          "height": parseInt($("#bar-height").val()),
          "width": $("#bar-width").val(),
          "margin": parseInt($("#bar-margin").val()),
          "textMargin": parseInt($("#bar-text-margin").val()),
          "displayValue": $(".display-text.btn-primary").val() == "true",
          "font": $("#font").val(),
          "fontOptions": $(".font-option.btn-primary").map(function(){return this.value;}).get().join(" "),
          "textAlign": $(".text-align.btn-primary").val(),
          "valid":
            function(valid){
              if(valid){
                $("#barcode").show();
                $("#invalid").hide();
              }
              else{
                $("#barcode").hide();
                $("#invalid").show();
              }
            }
        });

    $("#bar-width-display").text($("#bar-width").val());
    $("#bar-height-display").text($("#bar-height").val());
    $("#bar-fontSize-display").text($("#bar-fontSize").val());
    $("#bar-margin-display").text($("#bar-margin").val());
    $("#bar-text-margin-display").text($("#bar-text-margin").val());
};

var getBarcodeHTML = function(barcode){
  return $("<svg class='"+barcode+"'></svg>");
};
