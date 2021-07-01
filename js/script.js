const h1 = document.querySelector("h1");
let tempDiv = document.createElement('div');
const b = document.querySelector("body");


/*function listItem(item){
  let listItem = document.createElement('li');
  b.appendChild(listItem).innerText=item;

}*/

const getData = async function  () {
  let response = await fetch ("../../js/FishEyeData.json")
  let data = await response.json ()
  
  let media=data.media;
  let photographers=data.photographers;
  console.log (photographers);

  
  for(let i=0; i<photographers.length;i++){    
    console.log(photographers[i].name)     
    
    let createSection = document.createElement("div");
    let listItem = document.createElement('div');
    b.appendChild(createSection);
    createSection.appendChild(listItem).innerText=photographers[i].name;
    listItem.style.color="red";

   
  }     
       
  }


getData()













