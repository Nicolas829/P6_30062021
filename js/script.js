
//DOM element
const h1 = document.querySelector("h1");
const main = document.querySelector("main");
const tagsButton= document.getElementsByClassName("tags");


//create Element 
let createDiv = document.createElement("div");
let listItem = document.createElement('div');


//création de la div présentation des photographes
main.appendChild(createDiv);
createDiv.classList.add("photographer");
let divStyle=createDiv.style;
divStyle.display="flex";
divStyle.justifyContent="space-between";
divStyle.columnGap="7.5em";
divStyle.rowGap="2em";
divStyle.boxSizing="border-box";
divStyle.marginTop="10em";
divStyle.flexWrap="wrap";



/*function listItem(item){
  let listItem = document.createElement('li');
  b.appendChild(listItem).innerText=item;

}*/

const getData = async function  () {
  let response = await fetch ("/js/FishEyeData.json")
  let data = await response.json ()
  
  let media=data.media;
  let photographers=data.photographers; 
  
  
  for(let i=0; i<photographers.length;i++){        

   
    //Create element pour les box
    let box = document.createElement('div');
    let Nom = document.createElement('div');
    let boxTags = document.createElement('div');
    
    let Lieu = document.createElement('div');
    let TagLine =document.createElement('div');
    let Price =document.createElement('div');
    let Photo =document.createElement('img');

    //création des box individ
    createDiv.appendChild(box);
    box.appendChild(Photo).src="img/"+photographers[i].portrait ;
    box.appendChild(Nom).innerText=photographers[i].name;
    box.appendChild(Lieu).innerText=photographers[i].city +", " + photographers[i].country ;
    box.appendChild(TagLine).innerText=photographers[i].tagline;
    box.appendChild(Price).innerText=photographers[i].price +"€/jour";  

    box.style.display="flex";
    box.style.flexDirection="column";
    
    box.style.textAlign="center"
    box.style.boxSizing="border-box";      
    box.style.width="25%";
    
    box.style.gap="0.5em";
    
    Photo.style.objectFit="cover";
    Photo.style.width="230px";
    Photo.style.height="230px";
    Photo.style.alignSelf="center";
    Photo.style.borderRadius="100%";

    Nom.style.boxSizing="border-box";    
   
    Nom.style.textAlign="center";
    Nom.style.color="#D3573C";
    Nom.style.fontSize="36px";

    Lieu.style.color="#901C1C";
    Lieu.style.fontWeight="500";
    Lieu.style.fontSize="13px";
    Price.style.color="#757575";

    TagLine.style.fontWeight="500";
    TagLine.style.fontSize="10px";

    //on cherche les Tags de chaque Photographe
    for(let j=0; j<photographers[i].tags.length;j++){
      
      let Tags = document.createElement('div');
      box.appendChild(boxTags);
      boxTags.appendChild(Tags);
      boxTags.style.display="flex";
      boxTags.style.alignSelf="center";
      boxTags.style.gap='0.5em';
      Tags.innerText="#"+photographers[i].tags[j];
      Tags.classList.add('tags');
      Tags.width="auto";
    
      
      //on crée un évenement lorsqu'on clique sur un tag
      
     for (let p=0;p<tagsButton.length;p++ )
     
     {tagsButton[p].addEventListener("click", (e) => {    
      
     let chooseTags=[];
     chooseTags.push(tagsButton[p].textContent);
     let filterTags =chooseTags[0];
     
     if(filterTags==Tags.textContent) {
      
       
       

     }
    
      
       
     }
    
    
     )}
    





  }    
 
  }  } 
  


getData()













