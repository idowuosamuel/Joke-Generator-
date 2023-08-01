//alert("I'm here");
const btn = document.getElementById("btn");
const textEl =document.getElementById("text");
btn.addEventListener("click", generateJoke);


const apiKey= "USSn7/5mi2dS2LgkkHccNA==DKcG9adYjbehPFqF";

const options = {
  method:"GET",
  headers: { 'X-Api-Key': apiKey},
};

const apiurl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function generateJoke(){
  btn.style.visibility = "hidden";
  textEl.innerHTML = "Retrieving Joke...";
 // btn.inn= "loading...";
    
  const response = await fetch(apiurl, options);
  const data = await response.json();
  
  //console.log(data[0].joke);
  
  //alert('Ye right');
  textEl.innerHTML = data[0].joke;
  btn.style.visibility = "visible";
  
}