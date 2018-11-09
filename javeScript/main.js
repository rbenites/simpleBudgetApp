/*jshint esversion: 6 */

$(document).ready(function () {   

/*******BUDGET CONTROLLER*******/
var budgetController=(function(){
//budget logic
});


/*****UI CONTROLLER******/
var UIController=(function(){
    //UI Logic
});


/*****GLOBAL APP CONTROLLER******/
//This controller access the other controllers to run the app
const controller =(function(budgerCtrl,UICtrl){
$('.add__btn').on('click',function(){
    console.log('button pressed');
});




})(budgetController,UIController);

});