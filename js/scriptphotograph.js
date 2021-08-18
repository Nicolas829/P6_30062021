

//DOM element
const h1 = document.querySelector("h1");
const mainIndex = document.getElementsByClassName("index");
const main= document.querySelector("main")
const body=document.querySelector("body")
const title=document.querySelector("title")
const section=document.querySelector("section")
const option=document.getElementsByClassName("option")


//create Element 
let photographerName
let buttonContact=document.createElement("button")
let box1 = document.createElement('div');
let box2 = document.createElement('div');
let box3 = document.createElement('div');
let box4 = document.createElement('div');
let box5 = document.createElement('div');
let carousel__container = document.createElement("div")

let createDiv = document.createElement("div");
let listItem = document.createElement('div');
let Nom = document.createElement('h1');
let boxTags = document.createElement('div');    
let Lieu = document.createElement('div');
let TagLine =document.createElement('div');
let Price =document.createElement('div');
let Photo =document.createElement('img');
let container=document.createElement("section");


const photographersData=[]
const liButton= document.querySelectorAll("li");
const tagsButton= document.getElementsByClassName("tags");


let boxFixe = document.createElement("div")
let totalLike =document.createElement("p")
let heartFixe= document.createElement("i")
let priceBoxFixe=document.createElement("p")
body.appendChild(boxFixe)





//creation de la boxFixe

boxFixe.appendChild(totalLike)
boxFixe.appendChild(heartFixe)
boxFixe.appendChild(priceBoxFixe)


boxFixe.style.position="fixed"
boxFixe.style.bottom="0"
boxFixe.style.right="5%"
boxFixe.style.width="15em"
boxFixe.style.backgroundColor="#DB8876"
boxFixe.style.borderRadius="5px"
boxFixe.style.height="3em"
boxFixe.style.display="flex"
boxFixe.style.justifyContent="space-around"
boxFixe.style.alignItems="center"

let sumLike=259689

totalLike.textContent= sumLike.toLocaleString()


heartFixe.classList.add("far")
heartFixe.classList.add("fa-heart")
heartFixe.style.marginLeft="-2em"
heartFixe.addEventListener("click", (e)=>{
 totalLike.textContent=(sumLike+=1).toLocaleString()
 heartFixe.classList.replace("far","fas") })
//on va chercher le JSON
const getData = async function  () {
    let response = await fetch ("js/FishEyeData.json")
    let data = await response.json ()
    
    let media=data.media;
    let photographers=data.photographers; 
    const boxFilter = [];


    //fonction focus d'element pour accessibiltié
    
    function focusElement (element, fontColorFocus, bgColorBlur, fontColorBlur){
 
        element.addEventListener("focus", (e)=> {
           element.style.backgroundColor="#DB8876"
           element.style.color=fontColorFocus
        })
        element.addEventListener("blur", (e)=> {
          element.style.backgroundColor=bgColorBlur
          element.style.color=fontColorBlur
      })
       }
    

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
              
                for(let j=0; j<photographers[i].tags.length;j++){
      
     
                    let Tags = document.createElement('div');
                    box1.appendChild(boxTags);
                        
                    boxTags.appendChild(Tags);
                    boxTags.style.display="flex";
                    boxTags.style.alignSelf="center";
                    boxTags.style.gap='0.5em';
                    Tags.innerText="#"+photographers[i].tags[j];            
                    Tags.classList.add('tags');
                    Tags.classList.add(Tags.textContent)
                    Tags.width="auto";
                    Tags.tabIndex="6"
                    focusElement(Tags, "black", "white","#911C1C" )
                   
                    
                }
                
                
                


                //encart de présentation divisé en trois box
                createDiv.style.backgroundColor="#FAFAFA"
                createDiv.style.display="flex"
                createDiv.style.flexDirection="row"
                createDiv.style.justifyContent="space-between"
              
                createDiv.style.boxSizing="border-box"
                createDiv.style.width="auto"
                createDiv.style.height="25em"
                createDiv.style.marginTop="5em"
                createDiv.style.borderRadius="5px"
              
                //mise en place des box
                box1.style.display="flex";
                box1.style.flexDirection="column"
                box1.style.width="30%"
                box1.style.alignSelf="center"
                box1.style.marginLeft="4em"
                box1.style.gap="1em"
                 box1.style.marginTop="-2em"               
             
                Photo.setAttribute("alt", "photo de"+photographers[i].name)

                box2.style.display="flex"
                box2.style.marginTop="4.5em"
               
                box2.style.width="40%"
               
                box3.style.alignSelf="center"             
                box3.style.marginRight="8em";
                box3.style.boxSizing="border-box"
                
                //Nom
               
                Nom.style.color="#D3573C";
                Nom.style.fontSize="4em";
                Nom.style.fontWeight="400";
               
                //lieu
                Lieu.style.color="#901C1C";
                Lieu.style.fontWeight="400";
                Lieu.style.fontSize="1.5em";
                Lieu.style.marginTop="-2em"

                //tagline
                TagLine.style.fontSize="1.125em"
                TagLine.style.fontWeight="400"
                TagLine.style.color="#525252"
                
                //photo
                Photo.style.objectFit="cover";
                Photo.style.width="16em";
                Photo.style.height="16em";                
                Photo.style.borderRadius="100%";

                //tags
                
                boxTags.style.display="flex"
                boxTags.style.justifyContent="flex-start"
                boxTags.style.width="100%"
                //button contact
                function buttonCreate(buttonName){
                buttonName.style.border="none"
                buttonName.style.width="170px";
                buttonName.style.height="69px";
                buttonName.style.borderRadius="5px";
                buttonName.style.backgroundColor="#901C1C"
                buttonName.style.fontWeight="700";
                buttonName.style.color="white"
                buttonName.style.fontSize="20px"
                buttonName.style.cursor="pointer"
                
                focusElement(buttonName,"black", "#911C1C","white" )}                
                buttonCreate(buttonContact)

                    buttonContact.style.marginTop="2em"

                //construction de la modal

                const modal = document.createElement("aside")
                body.appendChild(modal)
                modal.style.position="absolute"
                //Div modal
                modal.style.backgroundColor="#DB8876"
                modal.style.boxSizing="border-box"                   
                modal.style.width="669px"
                modal.style.top="2%"
                modal.style.left="32%"
                modal.style.height="900px"
                modal.style.radius="5px"
                modal.style.display="flex"                          
                modal.style.flexDirection="column"
                modal.style.display="none"
                modal.style.padding="4em"
                modal.style.paddingTop="0"                
                modal.style.color="#312E2E"
                modal.style.transition="opacity 4s"
                //on ferme le formulaire avec le clavier "touche escape"
                window.addEventListener("keyup", e=>{ 
               if (e.key=="Escape") {closeModal()}})

               


                //const des elements de la modal
                const textEtClose=document.createElement("div")
                const textContact =document.createElement("p")
                const close= document.createElement("p")
                const inputPrenom=document.createElement("input")
                const inputNom=document.createElement("input")
                const inputEmail=document.createElement("input")
                const inputMessage=document.createElement("textarea")
                const prenom=document.createElement("p")
                const nom=document.createElement("p")
                const email=document.createElement("p")
                const message=document.createElement("p")
                const envoi=document.createElement("button")               
                const form= document.createElement("form")

                       
                form.style.display="flex"
                form.style.flexDirection="column"
                form.style.fontSize="0.5em"

                modal.appendChild(form)
                form.appendChild(textEtClose)
                textEtClose.appendChild(textContact)
                textEtClose.appendChild(close)
                
                form.appendChild(prenom)
                prenom.style.marginTop="0.1em"
                prenom.innerText="Prénom"
                prenom.style.fontSize="4em"
                form.appendChild(inputPrenom)
                
                form.appendChild(nom)
                nom.innerText="Nom"
                nom.style.fontSize="4em"
                form.appendChild(inputNom)
                

                form.appendChild(email)
                email.innerText="email"
                email.style.fontSize="4em"
                form.appendChild(inputEmail)
                
               
                form.appendChild(message)
                message.innerText="Votre Message"
                message.style.fontSize="4em"
                form.appendChild(inputMessage)                             
                form.appendChild(envoi)               
                

                textEtClose.style.display="flex";
                textEtClose.style.justifyContent="space-between"
                textEtClose.style.fontSize="5em"
                textContact.innerHTML="Contactez-Moi"+"<br>"+photographers[i].name
                close.innerText="X"
                close.style.cursor="pointer"
                close.style.color="white"
                close.addEventListener("click", closeModal)
                close.addEventListener("keyup", e=> {
                    if(e.key=="Enter"){closeModal()}
                })
             
                //on habille les input
                function inputStyle (input) {

                input.style.height="2em"
                input.style.marginTop="-1em"
                input.style.borderRadius="5px"
                input.style.fontSize="2em"
                input.style.outline="none"
                input.setAttribute("type", "text")
                }
                
                inputStyle(inputPrenom)
                inputStyle(inputNom)
                inputStyle(inputEmail)
                inputStyle(inputMessage)

                //function fermeture de la modal
                function closeModal () {
                    modal.style.display="none";
                    main.style.filter="none"
                }
                         
                //champ de message
                inputMessage.style.height="150px"               
               
                
                //bouton envoi
                buttonCreate (envoi)             
               
                envoi.style.marginTop="2em"
                envoi.innerText="Envoyer"

                //creation des règles et du paragraphe pour la modal
                const nameReg = new RegExp(/[a-zA-Z]{2,10}/);
                const emailReg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
                const messageReg= new RegExp(/[a-zA-Z]{10,400}/)
                let p = document.createElement("p")
                let form_OK =true

                //fonction de validation des input
                function checkForm (nameInput, regle, texte) {
                    nameInput.addEventListener("input", (e)=> {
                       
                       if (regle.test(e.target.value)){
                           p.parentNode.removeChild(p)
                          nameInput.style.border="solid 2px green"
                          form_ok=true;
                          
                       }
                       
                       else {
                           nameInput.insertAdjacentElement("afterend", p).innerText= texte  
                            p.style.color="red";
                            p.style.fontSize="2em"
                            p.style.marginBottom="-1em"
                            nameInput.style.border="solid  2px red"
                            form_OK=false;
                        }
                    })
                    
                }
                checkForm(inputPrenom, nameReg, "veuillez entrer au minimum deux caractères pour votre prénom")
                checkForm(inputNom, nameReg, "veuillez entrer au minimum deux caractères pour votre nom")
                checkForm(inputEmail, emailReg, "veuillez entrer une adresse email valide")
                checkForm(inputMessage, messageReg, "Veuillez entrer entrer un message de minimum 10 caractères")

                //fonction envoi formulaire
                function sendForm (event) {
                    event.preventDefault()
                    if(inputPrenom.value.length<2 && inputNom.value.length<2 && inputEmail.value.length<4 &&inputMessage.value.length<10 ){
                       
                        envoi.insertAdjacentElement("afterend",p).innerText="Veuillez remplir tous les champs"
                    }
                    else {
                        envoi.insertAdjacentElement("afterend",p).innerText="message Envoyé"
                        p.style.color="green"
                        form.reset()
                    }
                    
                    
                }

               
                
                //click envoi formulaire
                envoi.addEventListener("click", sendForm)
                //envoi du formulaire au clavier
                envoi.addEventListener("keyup", e=> {
                    if(e.key=="Enter"){sendForm()}
                })
                    
                    
                
                //fonction ouverture de la modal
                const openModal= function (e) {
                    modal.style.display="flex"
                    modal.style.opacity="1";
                    modal.focus()
                    main.style.filter="blur(4px)"
                    modal.style.tabIndex="1"
                    inputPrenom.tabIndex="8"
                    inputNom.tabIndex="9" 
                    inputEmail.tabIndex="10" 
                    inputMessage.tabIndex="11" 
                    envoi.tabIndex="12"
                    close.tabIndex="13"
                    
                }

                //click du load de la fonction d'ouverture
                buttonContact.addEventListener("click", openModal)


                /************************* fin de la modal*/             

              
                  
                 //création des element de filtres pour tri des photos
                 let boxTri = document.createElement("div")
                 let textTri= document.createElement("p")
                 let buttonTri=document.createElement("button")
                 let listeTri=document.createElement("ul")
                 
                 let popularite=document.createElement("li")
                 let date=document.createElement("li")
                 let titre= document.createElement("li")
                 let chevron = document.createElement("i")
                
                 main.appendChild(boxTri)

                 boxTri.style.display="flex"
                 boxTri.style.justifyContent="flex-start"
                 boxTri.style.gap="1.5em"
                 boxTri.style.marginLeft="2em"
                 boxTri.style.marginTop="2em"    
                 boxTri.appendChild(textTri).innerText="Trier par"
                
                boxTri.appendChild(buttonTri)
                buttonTri.appendChild(chevron)
                buttonTri.appendChild(listeTri)

                //creation du boutton de tri
                buttonTri.style.backgroundColor="#901C1C"
                buttonTri.style.color="white"
                buttonTri.style.borderRadius="5px"
                buttonTri.style.width="170px"
                buttonTri.style.height="50px"
                buttonTri.style.fontWeight="700"          
                buttonTri.style.border="none"                      
                buttonTri.style.overflow="hidden"
                buttonTri.style.fontSize="1em"
               
                buttonTri.setAttribute("aria-haspopup", "true")
                buttonTri.setAttribute("aria-expanded", "false")
                focusElement(buttonTri,"black", "#911C1C", "white" )
               
                //Attribution des options au boutton de tri
               listeTri.style.display="flex"    
               listeTri.style.flexDirection="column"
               listeTri.style.boxSizing="border-box"
               listeTri.style.listStyleType="none"
               listeTri.style.gap="1em"
               listeTri.style.fontSize="1em"
               listeTri.style.marginLeft="0em"
               listeTri.style.marginTop="-2.3em"
              
              listeTri.style.textAlign="left"
             
               listeTri.appendChild(popularite).innerText="Popularité"
               
                chevron.classList.add("fas")
                chevron.classList.add("fa-chevron-down")
                chevron.style.marginLeft="8em"
                chevron.style.marginTop="1em"              
                chevron.style.border="none"
               
                
               
                listeTri.appendChild(date).innerText="Date"
                listeTri.appendChild(titre).innerText="Titre"                    
                textTri.style.fontWeight="700"
                
                styleTri(popularite)
                styleTri(date)
                styleTri(titre)
               
                popularite.style.order="0"
                date.style.order="1"
                titre.style.order="2"
                function styleTri (a) {
                    a.style.cursor="pointer"
                    a.classList.add("option")
                    a.style.borderTop="solid 1px"
                    a.style.paddingTop="1.2em"
                    a.style.marginLeft="0em"
                    a.style.verticalAlign="bottom"
                    a.style.width="80%"
                   
                }

                //attribution des roles d'accesibilités
                chevron.setAttribute("role", "button")
                chevron.setAttribute("aria-haspopup", "listbox")
                chevron.setAttribute("aria-expanded", "true")

               
             
                //partie container photos
               for (let p=0;p<media.length;p++)
                

                    if (media[p].photographerId==photographers[i].id){
                        let box= document.createElement("div")
                        let picture= document.createElement("img")
                        let video=document.createElement("video")
                        let text=document.createElement("div")
                        let picturesName= document.createElement("p")
                        let boxLikes=document.createElement("div")
                        let numberLikes= document.createElement("p")
                        let heart= document.createElement("i")
        
                       //création du main container parent de chaque box photos
                                               
                        main.appendChild(container)
                        container.setAttribute("id", "container")
                                            
                        container.style.display="flex";
                        container.style.justifyContent="space-between"
                        container.style.flexDirection="row"
                        container.style.boxSizing="border-box";
                        
                        container.style.flexWrap="wrap";
                        container.style.rowGap="3em";
                        container.style.marginTop="3em"
                         //création des box photos
                        container.appendChild(box)
                        //mise en page des box
                       
                        box.style.display="flex"
                        box.style.flexDirection="column"      
                                      
                        
                        box.style.width="25%"
                        box.style.height="400px"
                        box.style.alignItems="center"
                       
                        box.setAttribute("alt", media[p].title)
                                              
                      box.addEventListener("focus", (e)=>{
                         box.style.transform='scale(1.05)'
                          
                      })
                      box.addEventListener("blur", (e)=>{
                        box.style.transform='scale(1)'
                         
                     })
                        
                        function pictVid () {
                        box.appendChild(picture).src= "img/"+media[p].image
                        
                        if (media[p].image== undefined){
                            box.removeChild(picture)
                            box.appendChild(video).src="img/"+media[p].video
                            
                        } }
                     
                       
                        pictVid()
                      
                        video.style.width="100%"
                        video.style.height="100%"
                        video.style.overflow="hidden"
                        video.style.objectFit="cover"
                        video.setAttribute("type", "video/mp4")
                        video.setAttribute("allow", "autoplay")
                        video.setAttribute("controls", "true")
                        video.style.borderRadius="5px"  
                        video.setAttribute("class", "carouselStyle")
                        picture.setAttribute("class", "carouselStyle")


                        picture.style.objectFit="cover";
                        picture.style.overflow="hidden"
                        picture.style.width="100%"
                        picture.style.height="100%"
                        picture.style.borderRadius="5px"  
                        box.appendChild(text)
                        text.appendChild(picturesName).innerText=media[p].title
                        text.appendChild(boxLikes)
                        boxLikes.appendChild(numberLikes).innerText=media[p].likes    
                        boxLikes.appendChild(heart)
                        heart.setAttribute("alt", "j'aime")
                  
                        
                       heart.classList.add("far")
                       heart.classList.add("fa-heart")                 

                        text.style.display="flex"
                        text.style.flexDirection="row"
                        
                        text.style.boxSizing="border-box"
                        text.style.width="100%"
                        text.style.justifyContent="space-between"
                        text.style.color="#901C1C"
                        boxLikes.style.display="flex"
                        boxLikes.style.justifyContent="space-between"
                        boxLikes.style.width="20%"
                        boxLikes.style.alignItems="center"

                        numberLikes.style.fontWeight="500"
                        
                        heart.style.cursor="pointer"
                        heart.addEventListener("click", (e)=> {
                            numberLikes.innerText= media[p].likes+=1
                            heart.classList.replace("far","fas")
                        })
                       
                    
                     box.classList.add(media[p].date.replace("-",""))
                     box.className.replace("-","")                    
                     box.id=media[p].title.toUpperCase()
                     
                     
                     resizePage()
                     window.addEventListener("resize", resizePage)


                     //Partie Responsive
                     function resizePage() {
                        if(matchMedia("(max-width:1450px)").matches) {
                            box.style.height="17.5em"
                            createDiv.style.fontSize="0.7em"
                        }
                     if(matchMedia("(max-width:1250px)").matches) {
                        main.style.padding="2em"
                        main.style.margin="0"      
                        chevron.style.width="28%"          
                        createDiv.style.backgroundColor="white"
                         buttonContact.style.position="fixed"
                         buttonContact.style.bottom="5%"
                         buttonContact.style.left="40%"
                        buttonContact.style.width="170px"
                         container.style.flexDirection="column"                        
                         box3.style.marginRight="4em"
                         box3.style.marginTop="-5em"
                         box.style.width="100%"
                         box.style.height="500px"
                         box.style.fontSize="2em"
                        box1.style.width="60%"
                         boxTags.style.fontSize="1.5em"
                         boxTri.style.fontSize="1em"
                         modal.style.width="100%"
                         modal.style.height="100%"
                         form.style.fontSize="0.8em"
                         modal.style.top="0"
                         modal.style.left="0"
                        
                     } 
                    
                        
                     else {
                        
                     }
                     }
                     
                        //on créer les filtres de présentation des photos
                       
                     selectionTri(date)
                     selectionTri(titre)
                     selectionTri(popularite)

                     function selectionTri(a) {
                     
                        a.addEventListener("click", (e)=> {
                            
                        
                           buttonTri.style.height="50px"
                           buttonTri.style.backgroundColor="#901C1C"
                           buttonTri.style.color="white"
                        chevron.style.transform="rotate(0deg)"
                      
                        popularite.style.order="1"
                        date.style.order="1"
                        titre.style.order="1"
                            a.style.order="0"
                            nbr=0
                           
                            
                              {
                                    if(popularite.style.order=="0") {
                                        
                                        box.style.order="-"+media[p].likes
                                      box.style.order=(Number(box.style.order)+400) 
                                        
                                      box.tabIndex=box.style.order
                                   }
                            }
                                    if (date.style.order=="0"){
                                       
                                        box.style.order="-"+box.className.replace("-","")
                                        box.style.order=(Number(box.style.order)+100000000) 
                                        
                                        box.tabIndex=box.style.order
                                       
                                    }

                                    if (titre.style.order=="0") {
                                        

                                        for(let j=0;j<4;j++){
                                            box.id.replace(" ","")
                                            box.id.replace(",","")
                                           box.style.order=box.id[0].charCodeAt()
                                           box.style.order+= box.id[1].charCodeAt()
                                       
                                         
                                      
                                           box.tabIndex=box.style.order
                                           
                                        
                                        }
                                    }

                        })}
                         //ouverture et fermeture du champ de selection
              
                let nbr=0
                
               
                chevron.addEventListener('click',  dropDown)
                chevron.addEventListener("keyup", e=> {
                   
                    if(e.key=="Enter"){
                        dropDown()
                        
                        date.style.order="1"
                        popularite.style.order="1"
                        titre.style.order="1"
                       
                        

                        for (let m=0; m<option.length;m++)
                        option[m].addEventListener('keyup', e=> {

                            if (e.key=="Enter"){
                                nbr=0
                               
                                date.setAttribute("aria-selected", "false")
                                popularite.setAttribute("aria-selected", "false")
                                titre.setAttribute("aria-selected", "false")
                                date.tabIndex="-1"
                                popularite.tabIndex="-1"
                                titre.tabIndex="-1"
                                e.target.tabIndex="16"                             
                                e.target.style.order="0"
                             
                               e.target.setAttribute("aria-selected", "true")
                              buttonTri.style.height="50px"        
                              buttonTri.style.backgroundColor="#901C1C"    
                              buttonTri.style.color="white"              
                               chevron.style.transform="rotate(0deg)"
                               {
                                if(popularite.style.order=="0") {
                                    
                                    box.style.order="-"+media[p].likes
                                    box.style.order=(Number(box.style.order)+400) 
                                        
                                    box.tabIndex=box.style.order
                                   
                               }
                        }
                                if (date.style.order=="0"){
                                   
                                    box.style.order="-"+box.className.replace("-","")
                                    box.style.order=(Number(box.style.order)+100000000) 
                                        
                                    box.tabIndex=box.style.order
                                   
                                }

                                if (titre.style.order=="0") {
                                    

                                    for(let j=0;j<4;j++){
                                        box.id.replace(" ","")
                                        box.id.replace(",","")
                                        box.style.order=box.id[0].charCodeAt()
                                        box.style.order+= box.id[1].charCodeAt()                               
                                        box.tabIndex=box.style.order
                                      
                                    
                                    }
                                }

                            }
                        })        
                    }
                })
               

                function dropDown () {
                    nbr++
                 
                 
                  if (nbr%2==0){
                    buttonTri.style.height="50px"
                      date.tabIndex="-1"
                      popularite.tabIndex="-1"
                      titre.tabIndex="-1"
                      chevron.style.transform="rotate(0deg)"
                      buttonTri.style.backgroundColor="#901C1C"
                      buttonTri.style.color="white"
              
              return nbr
                  }  
               else {
                buttonTri.style.height="160px"    
                buttonTri.style.backgroundColor="#DB8876"
            chevron.style.transform="rotate(180deg)"
            buttonTri.style.color="black"
                    
                }
                         
                }

                   






                       //TabIndex
                       Nom.tabIndex="2"                       
                       Lieu.tabIndex="3"
                       TagLine.tabIndex="4"                       
                       Photo.tabIndex="14"
                       buttonContact.tabIndex="8"                      
                        textTri.tabIndex="15"
                        buttonTri.tabIndex="16"                       
                        chevron.tabIndex="17"
                        box.tabIndex="21"
                       chevron.addEventListener("keypress", (e)=>{
                           
                           if((e).key=="Enter"){
                        popularite.tabIndex="18"
                        date.tabIndex="19"
                        titre.tabIndex="20"}
                       }) 


                        priceBoxFixe.innerText=photographers[i].price+"€/jour"
                                                    
                        
                        //Création du Carousel                           
                               

                              class Carousel {


         /**
         * @param {HTMLElement} element
         * @param {Object} options
         * @param {Object} options, slidesToScroll nombre d'elements à faire défiler.
         * @param {Object} options, slidesVisible nombre d'elements visible
         * @param {boolean} options.pagination=false
         * @param {boolean} options.navigation=true
         *          
         */
          
         
         constructor (element, options = {}) {
                    
            this.element = element
            this.options = Object.assign ({}, {

               
            }, options) 

            let children = [].slice.call(document.querySelector("#container").children)
           
           this.currentItem = 0
           this.root = this.createDivWithClass("carousel", "div")
           this.panorama = this.createDivWithClass('carousel__container', "div")
           this.panorama.style.marginTop="4em"
           this.root.appendChild(this.panorama)
           this.element.appendChild(this.root)
            
           this.items = children.map((child) => {
           
               let item = this.createDivWithClass("carousel__item", "div")
           
               item.appendChild(child)  
                      
               child.style.width=window.innerWidth-400+"px"
               child.style.height=window.innerHeight-100+"px"

                    window.addEventListener("resize", e=>{
                        child.style.width=window.innerWidth-400+"px"
                        child.style.height=window.innerHeight-100+"px"
                        })
                            
                this.panorama.appendChild(item)
                return item
            })
             
           
            this.setStyle()
            this.createNavigation()
            this.closeNavigation()
            this.goToIndexOnClick()
           
            window.addEventListener("keyup", (e)=>{
                if(e.key=="ArrowRight"){
                   this.next()}
                if(e.key=="ArrowLeft"){
                    this.prev()}
                if(e.key=="Escape"){
                    window.location.reload()
                }
                } )
         
        } 
        /**
         * applique les bonnes dimensions aux élements du carousel
         */

        //evenement
        

        setStyle () {
            let ratio = this.items.length / this.options.slidesVisible
            this.panorama.style.width=(ratio * 100)+"%"
            this.items.forEach(item => item.style.width =((100 / this.options.slidesVisible) / ratio) + "%")
            
        }
        closeNavigation () {
            let closeButton = this.createDivWithClass("fas fa-times", "i")
            this.root.appendChild(closeButton)
            closeButton.style.fontSize="5em"
           
            closeButton.style.color="#911C1C"
            closeButton.style.top="0"
            closeButton.style.right="5%"
            closeButton.style.position="fixed"
            closeButton.addEventListener("click", (e)=> {
                
              console.log(location.href)
              window.location.reload()
            }
            )
            
        }

        /** créer la recherche de la picture dans l'index  */
       goToIndexOnClick () {
          
            for (let i =0; i <this.items.length;i ++) {
               console.log(this.items[i].children[0].id)
                if (location.hash.replace("#","") == this.items[i].children[0].id.replace(/ /g,"")) {
                    
                                       
                  this.gotToItem(i)

                }
              
            }

        }

        createNavigation () {

            let nextButton = this.createDivWithClass('fas fa-chevron-right', "i")
            let prevButton = this.createDivWithClass('fas fa-chevron-left', "i")
            this.root.appendChild(nextButton)
            this.root.appendChild(prevButton)
            nextButton.style.marginTop=(window.innerHeight-100)/2+"px"
            prevButton.style.marginTop=(window.innerHeight-100)/2+"px"
            
            nextButton.style.color="#911C1C"
            nextButton.style.position="fixed"
            nextButton.style.top="0"
            
            nextButton.style.fontSize="5em"
            nextButton.style.right="5%"
            prevButton.style.left="5%"
            prevButton.style.top="0"
            prevButton.style.color="#911C1C"
            prevButton.style.position="fixed"
            prevButton.style.fontSize="5em"

           
            
            nextButton.addEventListener("click", this.next.bind(this) )
            prevButton.addEventListener("click", this.prev.bind(this) )
          
            
        } 
    
    

        next () {
            this.gotToItem(this.currentItem + this.options.slidesToScroll)

        }
        prev () {
            this.gotToItem(this.currentItem - this.options.slidesToScroll)
        }

       

     

        /**
         * deplace le carousel vers l'element cible
         * @param {number} index 
         */

        gotToItem (index) {
            if (index < 0){
                index = this.items.length - this.options.slidesToScroll

            }
            if (index>=this.items.length){
                index = 0
            }
            let translateX= index * -100/ this.items.length
           console.log(index)
            this.panorama.style.transform ="translate3d(" + translateX + "%,0,0)";
            this.currentItem = index           

        }


        /**
         * 
         * @param {string} className 
         * @returns {HTMLElement}
         */

        createDivWithClass (className, balise) {
            let Balise = document.createElement(balise)
            Balise.setAttribute('class', className)
            return Balise

        }
       
        
      } 
     box.addEventListener("keyup", (e)=> {
        if ((e).key=='Enter') {
        main.style.display="none"  
        boxFixe.style.display="none"  
        location.hash=e.target.id.replace(/ /g,"")
        const modal_carousel = document.createElement("aside")        
        body.appendChild(modal_carousel)        
                
        body.style.marginLeft="12em"
        body.style.overflow="hidden"
        new Carousel (modal_carousel, {

        
            slidesToScroll:1,
            slidesVisible:1,
            pagination :true,
            
    
          })
            
           }
        })
     picture.addEventListener('click', launchCarousel )
     video.addEventListener('click', launchCarousel)
     
     

     function launchCarousel(e) {
        main.style.display="none"  
        boxFixe.style.display="none"  
       location.hash=e.target.parentNode.id.replace(/ /g,"")
        const modal_carousel = document.createElement("aside")        
        body.appendChild(modal_carousel)       
       
                
        body.style.marginLeft="12em"
        body.style.overflow="hidden"
      
      
        
    

      new Carousel (modal_carousel, {

        
        slidesToScroll:1,
        slidesVisible:1,
        pagination :true,
        

      })
    }
                         
                       

                    }}
                 

}}


getData()


  