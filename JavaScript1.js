var ageIn;
var heightIn;
var WeightIn;
let mood;
let viewIn;


//is park open function

let currentDate = new Date();
let may = newDate();
let sept = newDate();
may.setMonth(4);
sept.setMonth(8);

let currentTime = currentDate.getHours() + ":" + currentDate.getMinutes();
let closingTime = new Date();
let openingTime = new Date();
closingTime.setHours(23);
closingTime.setMinutes(0);
openingTime.setHours(11);
openingTime.setMinutes(0);
let open = false;

if((currentDate >= may && currentDate <= sept)&&(currentTime <= openingTime && currentTime >= closingTime)){
    console.log(currentTime + "- The Amusement Park is OPEN.");
    open = true;
}
else{
    console.log(currentTime + "- The Amusement Park is CLOSED.") 
}

// a ride object with a height, weight, experience, view and age requirements

function ride(heightReq,ageReq,weightReq, experience, view){
    this.heightReq = heightReq;
    this.ageReq = ageReq;
    this.weightReq = weightReq;
    this.experience = experience;
    this.view = view;
}

//creates all of the ride objects
let ferrisWheel = new ride(152.4, 10,null,"calm",true);
let rollercoaster = new ride(152.4, 10,null,"exciting", true);
let bumperCars = new ride(152.4, 14,36.29,"exciting", false);
let merryGoRound = new ride(null, 4,null,"calm",false);
let tiltAWhirl = new ride(152.4, 4, 36.29,"exciting");

//adds of all the rides to an arraylist
let rideList = [];
rideList.push(ferrisWheel);
rideList.push(rollercoaster);
rideList.push(bumperCars);
rideList.push(merryGoRound);
rideList.push(tiltAWhirl);

//takes in userinput from the terminal, puts it in a String, then splits it and puts each word into an array
import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question(``, userIn => {

});
const arr = userIn.split(", ");
readline.close();


for(let i=0; i< 5;i++){
    //if height is less than 152.4, then remove from the list 
    if(arr[i] < 152.4 && !null){
        rideList.splice([i],1);
    }
    //if age is less than the agereq, them remove from the list
    else if(arr[i] < rideList[i].ageReq){
        rideList.splice([i],1);
    }
    //if weight is less than the weightreq, then remove from the list
    else if(arr[i] < rideList[i].weightReq){
        rideList.splice([i],1);
    }
    //if experience doesn't equal the experience, removes from the list
    else if(arr[i] != rideList[i].experience){
        rideList.splice([i],1);
    }
    //if the view is "Yes" and the the ride is N/a, remove from the list
    else if(arr[i] == "Yes" && rideList[i].view != "Yes"){
        rideList.splice([i],1);
    }
}

//figures out what rides are recommended for the player

if(arr.size() <= 0){
    console.log("There are no suitable rides for you")
}
else{
    console.log("Recommended Rides:")
    //prints all of the rides that are left in the list
    for(i = 0; i <arr.size();i++){
        console.log(rideList[i] + "\n");
    }
}

//adds the last lines depending on if the park is open or not
if( open = true){
    console.log("Hope to see you soon");
}
else{
    console.log("We hope to see you when our park opens, every day 11AM-11PM from May 1st to September 30th. ");
}
