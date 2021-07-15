

//DOM element
const h1 = document.querySelector("h1");
const mainIndex = document.getElementsByClassName("index");
const main= document.querySelector("main")
const body=document.querySelector("body")
const title=document.querySelector("title")

//create Element 
let photographerName
let buttonContact=document.createElement("button")
let box1 = document.createElement('div');
let box2 = document.createElement('div');
let box3 = document.createElement('div');

let createDiv = document.createElement("div");
let listItem = document.createElement('div');
let Nom = document.createElement('div');
let boxTags = document.createElement('div');    
let Lieu = document.createElement('div');
let TagLine =document.createElement('div');
let Price =document.createElement('div');
let Photo =document.createElement('img');
let container=document.createElement("section");


const photographersData=[]
const liButton= document.querySelectorAll("li");
const tagsButton= document.getElementsByClassName("tags");


//on va chercher le JSON
const getData = async function  () {
    let response = await fetch ("/../js/FishEyeData.json")
    let data = await response.json ()
    
    let media=data.media;
    let photographers=data.photographers; 
    const boxFilter = [];

    //création de l'encart Photographe
    
        for(let i=0; i<photographers.length;i++){  
          
            if (window.location.search.slice(1)===photographers[i].name.replace(" ", "")){
                photographerName = photographers[i].name;
                main.appendChild(createDiv);
                main.style.paddingLeft="8em"
                main.style.paddingRight="8em"
                createDiv.appendChild(box1)
                createDiv.appendChild(box2)
                createDiv.appendChild(box3)
                box3.appendChild(Photo).src="img/"+photographers[i].portrait ;
                box1.appendChild(Nom).innerText=photographers[i].name;
                box1.appendChild(Lieu).innerText=photographers[i].city +", " + photographers[i].country ;
                box1.appendChild(TagLine).innerText=photographers[i].tagline;
               
                box2.appendChild(buttonContact).innerText="Contactez-moi"               
              

                //encart de présentation divisé en trois box
                createDiv.style.backgroundColor="#FAFAFA"
                createDiv.style.display="flex"
                createDiv.style.flexDirection="row"
                createDiv.style.justifyContent="space-between"
                createDiv.style.boxSizing="border-box"
                createDiv.style.width="auto"
                createDiv.style.height="20em"
                createDiv.style.marginTop="5em"
                createDiv.style.borderRadius="5px"

                //mise en place des box
                box1.style.display="flex";
                box1.style.flexDirection="column"
                box1.style.alignSelf="center"
                box1.style.marginLeft="4em"
                box1.style.gap="1em"


                box2.style.display="flex"
                box2.style.marginTop="4.5em"
               
                box2.style.width="40%"
              
                box3.style.alignSelf="center"             
                box3.style.marginRight="8em";
                box3.style.boxSizing="border-box"
                
                //Nom
               
                Nom.style.color="#D3573C";
                Nom.style.fontSize="36px";

                //lieu
                Lieu.style.color="#901C1C";
                Lieu.style.fontWeight="500";
                Lieu.style.fontSize="13px";
                
                //photo
                Photo.style.objectFit="cover";
                Photo.style.width="230px";
                Photo.style.height="230px";
                
                Photo.style.borderRadius="100%";
               
                //button contact
                buttonContact.style.width="170px";
                buttonContact.style.height="69px";
                buttonContact.style.borderRadius="5px";
                buttonContact.style.backgroundColor="#901C1C"
                buttonContact.style.fontWeight="700";
                buttonContact.style.color="white"
                buttonContact.style.fontSize="20px"
                console.log(photographers[i].id)
                    //recherche de chaque Tags par photographe                   
                
                    for(let j=0; j<photographers[i].tags.length;j++){      
                
                        let Tags = document.createElement('div');
                        box1.appendChild(boxTags);                        
                        boxTags.appendChild(Tags);
                        boxTags.style.display="flex";                    
                        boxTags.style.gap='0.5em';
                        Tags.innerText="#"+photographers[i].tags[j];            
                        Tags.classList.add('tags');
                        Tags.classList.add(Tags.textContent)
                        Tags.width="auto";}
                              
                
                          
                
               for (let p=0;p<media.length;p++)
              

                    if (media[p].photographerId==photographers[i].id){
                        let box= document.createElement("div")
                        let picture= document.createElement("img")
                        let text=document.createElement("div")
                        let picturesName= document.createElement("p")
                        let boxLikes=document.createElement("div")
                        let numberLikes= document.createElement("p")
                        let heart= document.createElement("i")
                        //création du main container 
                                               
                        main.appendChild(container)
                                            
                        container.style.display="flex";
                        container.style.justifyContent="space-between"
                        container.style.flexDirection="row"
                        container.style.boxSizing="border-box";
                        
                        container.style.flexWrap="wrap";
                        container.style.rowGap="10em";
                        container.style.marginTop="10em"
                         //création des box photos
                        container.appendChild(box)
                        //mise en page des box
                       
                        box.style.display="flex"
                        box.style.flexDirection="column"                       
                        
                        box.style.width="30%"
                        box.style.height="30%"
                        box.style.alignItems="center"
                        

                        box.appendChild(picture).src=("img/"+media[p].image)
                        picture.style.objectFit="cover";
                        picture.style.overflow="hidden"
                        picture.style.width="100%"
                        picture.style.height="300px"

                        box.appendChild(text)
                        text.appendChild(picturesName).innerText=media[p].title
                        text.appendChild(boxLikes)
                        boxLikes.appendChild(numberLikes).innerText=media[p].likes    
                        boxLikes.appendChild(heart).innerText="coeur";


                        text.style.display="flex"
                        text.style.flexDirection="row"
                        
                        text.style.boxSizing="border-box"
                        text.style.width="100%"
                        text.style.justifyContent="space-between"
                        boxLikes.style.display="flex"
                        boxLikes.style.justifyContent="space-between"
                        boxLikes.style.width="20%"
                        boxLikes.style.alignItems="center"

                        heart.style.cursor="pointer"
                        heart.addEventListener("click", (e)=> {numberLikes.innerText= media[p].likes+=1})
                    }


}}}


getData()


  