
//DOM element
const h1 = document.querySelector("h1");
const main= document.querySelector("main")
const body=document.querySelector("body")

//create Element 
let createDiv = document.createElement("div");
const liButton= document.querySelectorAll("li");
const tagsButton= document.getElementsByClassName("tags");
const contenu= document.createElement("a")



//création de la div passer au contenu
 body.appendChild(contenu)

contenu.style.borderRadius="5px"
contenu.style.justifyContent="center"
contenu.style.alignItems="center"
contenu.style.fontSize="1.5em"  
contenu.style.cursor="pointer"
contenu.style.top="0"
contenu.style.left="40%"
contenu.style.width="10em"
contenu.style.height="1.5em"
contenu.style.position="fixed"
contenu.style.fontWeight="700"
 contenu.style.backgroundColor="#DB8876"
 contenu.innerText="Passer au contenu"
 contenu.style.display="none"
 
 contenu.style.color="#000000"
 
 contenu.addEventListener("click", ()=> {
  contenu.style.display="none"
  contenu.href="#container_photograph"
})
 //on le fait apparaître uniquement au scroll
 
 window.addEventListener("scroll", ()=> {
   
        contenu.style.display="flex"
      setTimeout(hiddenContenu,300)
      function hiddenContenu () {
        contenu.style.display="none";
      }
 })
 
  


 
  
 

 
 

//création de la div présentation des photographes
main.appendChild(createDiv)

createDiv.classList.add("photographer")
createDiv.setAttribute("id", "container_photograph");

let divStyle=createDiv.style;
divStyle.display="flex";
divStyle.justifyContent="space-between";
divStyle.marginLLeft="2em"
divStyle.columnGap="11em";
divStyle.rowGap="5em";
divStyle.boxSizing="border-box";
divStyle.marginTop="10em";

divStyle.flexFlow="row wrap"




//on créer les tags pour les boutonsTags
for (let p=0;p<liButton.length;p++ ){

  
  liButton[p].classList.add("#"+liButton[p].id)

 liButton[p].addEventListener("focus", ()=> {
  liButton[p].style.backgroundColor="#DB8876"
  liButton[p].style.color="black"
})
liButton[p].addEventListener("blur", ()=> {
  liButton[p].style.backgroundColor="white"
  liButton[p].style.color="#911C1C"
})
 
}

//on va chercher le JSON
const getData = async function  () {
  let response = await fetch ("js/FishEyeData.json")
  let data = await response.json ()
  let photographers=data.photographers; 
  const boxFilter = [];
  
  //on va pointer les élements de chaque photographes
  for(let i=0; i<photographers.length;i++){        

 
    //Create element pour les box
    let box = document.createElement('div');
    let boxPresentation =document.createElement('div')
    let Nom = document.createElement('h2');
    let boxTags = document.createElement('div');
    
    let Lieu = document.createElement('p');
    let TagLine =document.createElement('p');
    let Price =document.createElement('p');
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
    box.appendChild(boxPresentation)

    boxPresentation.appendChild(Lieu).innerText=photographers[i].city +", " + photographers[i].country ;
   
    boxPresentation.appendChild(TagLine).innerText=photographers[i].tagline;
    boxPresentation.appendChild(Price).innerText=photographers[i].price +"€/jour";  

   
    a.style.textDecoration="none"
    a.style.color="black"
    
   
    let dataTags =[];
    dataTags.push(photographers[i].tags)
    box.classList.add(dataTags)
    
  
    boxFilter.push(box.className.split(","))    
    

    box.style.display="flex";
    box.style.flexDirection="column";
    a.setAttribute("aria-label", "lien vers la page de"+ photographers[i].name)
    
    a.tabIndex=Number(i)+"11"
    
    box.style.textAlign="center"
    box.style.alignItems="center"
    box.style.boxSizing="border-box";      
    box.style.width="20%";
    box.style.cursor="pointer";
    
    
    
//function resize

  
    
   
    if(matchMedia("(max-width:1450px)").matches) {
        box.style.fontSize="0.8em"
    }
    if(matchMedia("(max-width:1250px)").matches) {      
     
        box.style.fontSize="2em"
        box.style.width="100%"
        divStyle.flexDirection="column"
        
      } 

    


   
   
       
    Photo.style.objectFit="cover";
    Photo.style.width="15em";
    Photo.style.height="15em";
    Photo.style.alignSelf="center";
    Photo.style.borderRadius="100%";
    boxPresentation.style.marginTop="-1em"
    boxPresentation.tabIndex=i+"12"

    
   
    Nom.style.textAlign="center";
    Nom.style.whiteSpace="nowrap"
    Nom.style.color="#D3573C";
    Nom.style.fontSize="2.25em";
    Nom.style.fontWeight="400";
    
   

    Lieu.style.color="#901C1C";
    Lieu.style.fontWeight="400";
    Lieu.style.fontSize="0.8em";
    Lieu.style.marginTop="-1em"

    Price.style.color="#757575";
    Price.style.fontSize="0.75em"
    Price.style.marginTop="-0.6em"

    TagLine.style.fontWeight="400";
    TagLine.style.fontSize="0.83em";
    TagLine.style.marginTop="-0.8em"

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
      Tags.tabIndex=i+"13"
     
      Tags.addEventListener("focus", ()=> {
        Tags.style.backgroundColor="#DB8876"
        Tags.style.color="black"
      })
      Tags.addEventListener("blur", ()=> {
        Tags.style.backgroundColor="white"
        Tags.style.color="#911C1C"
      })
      
  
      
    //création du filtre de recherche de tags
            for (let p=0;p<tagsButton.length;p++ ){           
    
    
     tagsButton[p].addEventListener("keypress", (e)=> {
     
      if((e).keyCode==0xD){
       let info =tagsButton[p].className
      const filterTags =[]
      filterTags.push(info);     
      createDiv.style.justifyContent="flex-start"
      
      console.log(filterTags[0])
    
      let result = boxFilter[i].filter((element) =>"tags #"+element == (filterTags[0]));
      console.log(filterTags)
    
        if("tags #"+result[0]==(filterTags[0]))
        {             
          box.style.display="flex"                      
        }
        else{         
          box.style.display="none"    
          
        }     
     
  }  
     })

     tagsButton[p].addEventListener("click", ()=>
              
     
      {      
       let info =tagsButton[p].className
      const filterTags =[]
      filterTags.push(info);     
      createDiv.style.justifyContent="flex-start"
      
      console.log(filterTags[0])
    
      let result = boxFilter[i].filter((element) =>"tags #"+element == (filterTags[0]));
      console.log(filterTags)
    
      if("tags #"+result[0]==(filterTags[0]))
      {             
        box.style.display="flex"                      
      }
      else{         
        box.style.display="none"    
        
      }     
     
  }   )   
     }
     

     
//on lance la  page des photograph au clic

     a.addEventListener('click', ()=>{       
   
      open(url, '_self', false)   ;
      
  })
  a.addEventListener('keypress', (e)=>{   

   if ((e).keyCode==0xD){
    open(url, '_self', false)   ;}
    
})

h1.addEventListener('keypress', (e)=>{   

  if ((e).keyCode==0xD){
   open("index.html", '_self', false)   ;}
   
})





}}

}

    getData()