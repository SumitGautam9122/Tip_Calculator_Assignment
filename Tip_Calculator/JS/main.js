
//Function to increase value in Total People on Plus Button click
function inc_people() {


  var inputField = document.getElementById('total_people').value; //Reads the value in variable 'inputField' from total people input field

  var result= Number(inputField) + 1;                            //Increase the value by 1 and store in variable 'result'
  document.getElementById('total_people').value=result;          //Return the increased value 'result' in inout field
  calculate_tip();                         //Calls function to calculate the tip amount after every time plus button clicked

}

//Function to decrease value in Total People on Minus Button click
function dec_people() {
    
  var inputField = document.getElementById('total_people').value; //Reads the value in variable 'inputField' from total people input field
  
  if(Number(inputField <= 1)) {                           //Checks if the value of total people is 1 or leass than 1 
      
    document.getElementById('total_people').value = 1; //Then return value 1 in input field. Restricts users from decresing the total person value less then 1
  }
  else {
    var result = Number(inputField) - 1;                    //Decrease the value by 1 and store in variable 'result'
    document.getElementById('total_people').value = result; //Return the decreased value 'result' in inout field
  }

    calculate_tip();        //Calls function to calculate the tip amount after every time minus button clicked
}



//Function to increase value in total percent of tip when plus button of Tax percent is clicked
function inc_percent() {

  var inputField = document.getElementById('total_percent').value; //Reads the value in variable 'inputField' from total people input field
    
  if(inputField >= 100) {
    document.getElementById('total_percent').value = 100;
  }
  else {
    var result= Number(inputField) + 1;     //Increase the value by 1 and store in variable 'result'
    document.getElementById('total_percent').value = result;   //Return the increased value 'result' in inout field
  }  
  calculate_tip();            //Calls function to calculate the tip amount after every time plus button clicked   
    
}

//Function to decrease value in total percent of tip when minus button of Tax percent is clicked    
function dec_percent() {
        
  var inputField = document.getElementById('total_percent').value; //Reads the value in variable 'inputField' from total people input field
      
  if(Number(inputField <= 0)) {
          
    document.getElementById('total_percent').value = 0;
  }
  else {
    var result = Number(inputField) - 1;    //Decrease the value by 1 and store in variable 'result'
    document.getElementById('total_percent').value = result; //Return the decreased value 'result' in inout field
  }
  calculate_tip();        //Calls function to calculate the tip amount after every time minus button clicked
        
}



//Function to calculate tip per person and total bill per person
function calculate_tip() {

  var TotalBill = Number(document.getElementById('total_bill').value);   //Total bill amount stored in 'TotalBill' variable
  var Percent = Number(document.getElementById('total_percent').value);  //Tip percent value stored in 'Percent' variable
  var Person = Number(document.getElementById('total_people').value);    //Total person value stored in 'Person' variable

  var TipAmount = (TotalBill)*(Percent/100);                             //Tottal Tip amount calculated
  var PerPerson = TipAmount/Person;                                      //Tip per person calculated
  document.getElementById('tip_per_person').innerHTML = '$' + PerPerson.toFixed(2);  //Tip per person displayed

  var TotalPerPerson = (TotalBill / Person) + PerPerson;                   //Total amount per person icluding tip calculated
  document.getElementById('total_per_person').innerHTML = '$' + TotalPerPerson.toFixed(2);  //Total amount per person displayed
}



//Calls function to calculate tip every time the value of total bill input field changed manualy
total_bill.oninput = function() {

  var Bill = document.getElementById('total_bill');
  Bill.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106) || (e.keyCode > 47 && e.keyCode < 58) || (e.keyCode == 8) || (e.keyCode == 190) || (e.keyCode == 110))) {
      return false;  //Restricts user from entering any negative value, special characters, other than number and decimal sign
    }
  }

  calculate_tip();    //Calucate tip function is called after every key input
}



//Calls function to calculate tip every time the value of total percent input field changed manualy
total_percent.oninput = function() {

    var percent = document.getElementById('total_percent');
    percent.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106) || (e.keyCode > 47 && e.keyCode < 58) || (e.keyCode == 8) || (e.keyCode == 190) || (e.keyCode == 110))) {
        return false;  //Restricts user from entering any negative value, special characters, other than number and decimal sign
      }
    }

  calculate_tip();    //Calucate tip function is called after every key input
}



//Calls function to calculate tip every time the value of total people input field changed manualy
total_people.oninput = function() {
  
  var Person = document.getElementById('total_people');

  Person.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106) || (e.keyCode > 47 && e.keyCode < 58) || e.keyCode == 8)) {
      return false;   //Restricts user from entering any negative value, special characters, other than number
    }
  }

  if((document.getElementById('total_people').value) == 0) {
    alert('Person cannot be less then 1');  //Show an alert message whenever the user enter a value less than 1
  }

  calculate_tip();   //Calucate tip function is called after every key input
}