console.log("Hello World");

//Weather Outfit Selector

//if it's cold (under 15 degrees), suggest wearing a jacket.
//If it's warm, but not hot (between 15 and 25 degrees), suggest a jumper.
//if it's hot (above 25 degrees), suggest shorts.

let temperature;
temperature = 36;

if (temperature >=25){
  console.log("it is hot wear shorts");
}
else if (temperature <= 15) {
  console.log("it is cold wear a jacket");
} else if (temperature >=15) 
  console.log("it is warm wear a jumper");
