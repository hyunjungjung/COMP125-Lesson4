/* Main JavaScript file */
// global scope


//IIFE - Immediately Invoked Functiona Expression
(function () {
    "use strict";

    // define an array of HTML elements
    var paragraphElements = [];

    // second way to define an array
    //var paragraphs = new Array();

    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");

    // define your paragraphs array;
    var paragraphs = [];
    // data for my pages   
    paragraphs[0] = "<span class='firstSentence'>This is my first paragraph. </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu sapien, molestie vitae justo nec, placerat fermentum sem. Pellentesque vestibulum mollis sapien, eu hendrerit tellus rhoncus vel. Nullam sit amet iaculis massa, ut molestie velit. Morbi congue dolor ac purus consequat, eu scelerisque ex hendrerit. Duis tincidunt eros purus, sit amet pharetra magna eleifend ac. In hac habitasse platea dictumst. Nunc lacinia, ante et interdum consectetur, quam turpis vehicula libero, vel lobortis tortor libero ac arcu. In hac habitasse platea dictumst.";
    paragraphs[1] = "<span class='firstSentence'>This is my second paragraph. </span> Ut sit amet molestie neque, non elementum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu posuere risus. Vivamus erat elit, tincidunt nec magna sit amet, eleifend suscipit ipsum. Phasellus ornare enim nec faucibus tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce nec elementum tortor. Duis malesuada est ex, a pretium augue pharetra et. Nullam aliquam purus nec interdum tincidunt. Etiam eu nisi nulla. Donec ullamcorper, lectus tincidunt euismod dictum, massa arcu porta est, eu semper dui ligula at urna. Aliquam et enim interdum tellus gravida ornare.";
    paragraphs[2] = "<span class='firstSentence'>This is my third paragraph. </span>  Proin in nunc pellentesque, dictum libero sed, pharetra justo. Nam vel tincidunt urna, at finibus justo. Quisque pretium non nibh eget sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vitae mi viverra, dictum quam fermentum, dapibus orci. Morbi ac efficitur mi. Nam pulvinar suscipit quam tempus malesuada. Praesent volutpat est quis sapien mollis consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam eget enim luctus nisi egestas mattis. Vestibulum commodo, enim in dictum tristique, libero turpis porttitor elit, ut cursus sem ligula vel nulla. Mauris dignissim eleifend facilisis. Donec eros mi, mattis at aliquam nec, pretium cursus diam.";

    // check to see if paragraph one exists
    var paragraphElementsLength = paragraphElements.length - 1;
    for (var index = paragraphElementsLength; index >= 0; index--) {
        if (paragraphElements[index]) {
            paragraphElements[index].innerHTML = paragraphs[index];
        }
    }


})();