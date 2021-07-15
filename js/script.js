
//DOM element
const h1 = document.querySelector("h1");
const mainIndex = document.getElementsByClassName("index");
const main= document.querySelector("main")
const body=document.querySelector("body")
const title=document.querySelector("title")
let hidden=document.getElementsByClassName("hidden")



//create Element 
let createDiv = document.createElement("div");
let listItem = document.createElement('div');
const photographersData=[]
const liButton= document.querySelectorAll("li");
const tagsButton= document.getElementsByClassName("tags");



//création de la div présentation des photographes
main.appendChild(createDiv)

createDiv.classList.add("photographer");
const photoClass= document.getElementsByClassName('photographers')
let divStyle=createDiv.style;
divStyle.display="flex";
divStyle.justifyContent="flex-start";
divStyle.columnGap="11em";
divStyle.rowGap="2em";
divStyle.boxSizing="border-box";
divStyle.marginTop="10em";
divStyle.flexWrap="wrap";




//on créer les tags pour les boutonsTags
for (let p=0;p<liButton.length;p++ ){

  liButton[p].classList.add(liButton[p].innerText)
 
}
//on va chercher le JSON
const getData = async function  () {
  let response = await fetch ("/../js/FishEyeData.json")
  let data = await response.json ()
  
  let media=data.media;
  let photographers=data.photographers; 
  const boxFilter = [];
  
  //on va pointer les élements de chaque photographes
  for(let i=0; i<photographers.length;i++){        

 
    //Create element pour les box
    let box = document.createElement('div');
    let boxPresentation =document.createElement('div')
    let Nom = document.createElement('div');
    let boxTags = document.createElement('div');
    
    let Lieu = document.createElement('div');
    let TagLine =document.createElement('div');
    let Price =document.createElement('div');
    let Photo =document.createElement('img');
    let a= document.createElement("a")

    //création de l'url pour les pages photographes     
    let url="photograph.html?"+photographers[i].name.replace(" ", "");

    //création des box individ pour la page INDEX
    createDiv.appendChild(box);


    /*********************** */
    //création de la page photograph
    
     
     /************************/
    
    box.appendChild(a);
    //on crée une zone cliquable
    a.appendChild(Photo).src="img/"+photographers[i].portrait ;
    a.appendChild(Nom).innerText=photographers[i].name;
    a.appendChild(Lieu).innerText=photographers[i].city +", " + photographers[i].country ;
    a.appendChild(TagLine).innerText=photographers[i].tagline;
    a.appendChild(Price).innerText=photographers[i].price +"€/jour";  
   
    a.style.textDecoration="none"
    a.style.color="black"
    
   
    let dataTags =[];
    dataTags.push(photographers[i].tags)
    box.classList.add(dataTags)
  
    boxFilter.push(box.className.split(","))
    

    box.style.display="flex";
    box.style.flexDirection="column";
    
    box.style.textAlign="center"
    box.style.boxSizing="border-box";      
    box.style.width="25%";
    box.style.gap="0.5em";
    box.style.cursor="pointer";

    
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
      Tags.classList.add(Tags.textContent)
      Tags.width="auto";



      
    //création du filtre de recherche de tags
            for (let p=0;p<tagsButton.length;p++ ){           
    
     tagsButton[p].addEventListener("click", (e) =>          
     
      {      
       let info =e.target.className
      const filterTags =[]
      filterTags.push(info);     
      
      
      console.log(filterTags[0])
    
      let result = boxFilter[i].filter((element) =>"tags #"+element == (filterTags[0]));
      console.log(filterTags)
    
        if("tags #"+result[0]!==(filterTags[0]))
        {             
          box.style.display="none"                      
        }
        else{         
          box.style.display="flex"       
        }     
     
  }      
     )}
     

     
//on lance la  page des photograph au clic

     a.addEventListener('click', (e)=>{       
        open(url, '_self', false)   ;
      
  })

//on crée les pages individuelle pour les photographes

function createPhotograph () {
  let result =location.href.indexOf(photographers[i]);
  console.log(result)
    if (location.search=="?"+photographers[i].name)
    
    {console.log("ok")
  }
}

}};
createPhotograph()
}

    getData()

   




     
    
    
   






  













