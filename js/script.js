
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
divStyle.justifyContent="center";
divStyle.columnGap="11em";
divStyle.rowGap="10em";
divStyle.boxSizing="border-box";
divStyle.marginTop="10em";

divStyle.flexFlow="row wrap"




//on créer les tags pour les boutonsTags
for (let p=0;p<liButton.length;p++ ){

  liButton[p].classList.add(liButton[p].innerText)
 
}
//on va chercher le JSON
const getData = async function  () {
  let response = await fetch ("js/FishEyeData.json")
  let data = await response.json ()
  
  let media=data.media;
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
    boxPresentation.appendChild(Price).innerText=photographers[i].price +"€/jour";  

    boxPresentation.appendChild(TagLine).innerText=photographers[i].tagline;
   
    a.style.textDecoration="none"
    a.style.color="black"
    
   
    let dataTags =[];
    dataTags.push(photographers[i].tags)
    box.classList.add(dataTags)
  
    boxFilter.push(box.className.split(","))
    

    box.style.display="flex";
    box.style.flexDirection="column";
    a.setAttribute("aria-label", "lien vers la page de"+ photographers[i].name)
    
    a.tabIndex=+ i+"11"
    
    box.style.textAlign="center"
    box.style.alignItems="center"
    box.style.boxSizing="border-box";      
    box.style.width="25%";
    box.style.cursor="pointer";
    
    resizePage()
    window.addEventListener("resize", resizePage)
    function resizePage() {
      if(window.innerWidth<1200) {
        box.style.fontSize="2em"
        box.style.width="100%"
      } else {
        box.style.width="25%"
        box.style.fontSize="1em"
      }
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
    Nom.style.fontSize="3em";
    Nom.style.fontWeight="400";
    
   

    Lieu.style.color="#901C1C";
    Lieu.style.fontWeight="500";
    Lieu.style.fontSize="1em";
    Lieu.style.marginTop="0"
    Price.style.color="#757575";

    TagLine.style.fontWeight="500";
    TagLine.style.fontSize="1em";

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







}};

}

    getData()
   
   




     
    
    
   






  













