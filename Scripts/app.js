/* Main JavaScript file */
// global scope


//IIFE - Immediately Invoked Functiona Expression
(function(){
    "use strict";
    
    var paragraphOne=document.getElementById("paragraphOne");
    var paragraphTwo=document.getElementById("paragraphTwo");
    var paragraphThree=document.getElementById("paragraphThree");
    
    // define your paragraphs array(most common way)
    var paragraphs = [];
    
    // data for my pages   
    paragraphs[0] = "Welcome to this black-and-white boring webpage which will be changed into an awesome one later!";
    paragraphs[1] = "Three projects of mine will be added even though they are not good/pretty.";
    paragraphs[2] = "Do you want to know about me? Wait for a little bit..";
    
    // second way to define an array
    //var paragraphs = new Array();
    
    // check to see if paragraph one exists
    if(paragraphOne){
        paragraphOne.textContent=paragraphs[0];
    }
    if(paragraphTwo){
        paragraphTwo.textContent=paragraphs[1];
    }
    if(paragraphThree){
        paragraphThree.textContent=paragraphs[2];
    }
    
    
})();