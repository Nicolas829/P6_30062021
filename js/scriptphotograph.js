

//DOM element
const h1 = document.querySelector("h1");
const mainIndex = document.getElementsByClassName("index");
const main= document.querySelector("main")
const body=document.querySelector("body")
const title=document.querySelector("title")
const section=document.querySelector("section")

//create Element 
let photographerName
let buttonContact=document.createElement("button")
let box1 = document.createElement('div');
let box2 = document.createElement('div');
let box3 = document.createElement('div');
let carousel__container = document.createElement("div")

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
                function buttonCreate(buttonName){
                buttonName.style.width="170px";
                buttonName.style.height="69px";
                buttonName.style.borderRadius="5px";
                buttonName.style.backgroundColor="#901C1C"
                buttonName.style.fontWeight="700";
                buttonName.style.color="white"
                buttonName.style.fontSize="20px"
                buttonName.style.cursor="pointer"}
                
                buttonCreate(buttonContact)


                //construction de la modal

                const modal = document.createElement("aside")
                body.appendChild(modal)
                modal.style.position="absolute"
                //Div modal
                modal.style.backgroundColor="#DB8876"
                modal.style.boxSizing="border-box"
                modal.style.margingRight="10em"
                modal.style.marginLeft="10em"
                modal.style.width="70em"
                modal.style.top="5em"
                modal.style.left="20%"
                modal.style.height="100em"
                modal.style.radius="5px"
                modal.style.display="flex"               
                modal.style.margin="0 auto"
                modal.style.flexDirection="column"
                modal.style.display="none"
                modal.style.padding="4em"
                modal.style.paddingTop="0"                
                modal.style.color="#312E2E"

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
                const input=document.querySelectorAll("input")
                const form= document.createElement("form")
                
                form.style.display="flex"
                form.style.flexDirection="column"

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
                close.addEventListener("click", (e)=> {
                    modal.style.display="none";
                    main.style.filter="none"
                })

                //on habille les input
                function inputStyle (input) {

                input.style.height="68px"
                input.style.marginTop="-1em"
                input.style.borderRadius="5px"
                input.style.fontSize="2em"
                input.style.outline="none"
                input.setAttribute("type", "text")}
                
                inputStyle(inputPrenom)
                inputStyle(inputNom)
                inputStyle(inputEmail)
                inputStyle(inputMessage)
                         
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
                   
                    
                    
                    
                
                //fonction ouverture de la modal
                const openModal= function (e) {
                    modal.style.display="flex"
                    modal.style.opacity="1";
                    modal.style.transition="opacity 1s"
                    
                   main.style.filter="blur(4px)"
                                      
                }

                //click du load de la fonction d'ouverture
                buttonContact.addEventListener("click", openModal)


                /************************* */

               
                    
                  
                 //création des element de filtres pour tri des photos
                 let boxTri = document.createElement("div")
                 let textTri= document.createElement("p")
                 let listeTri=document.createElement("select")
                 
                 let popularite=document.createElement("option")
                 let date=document.createElement("option")
                 let titre= document.createElement("option")
                
                 main.appendChild(boxTri)

                 boxTri.style.display="flex"
                 boxTri.style.justifyContent="flex-start"
                 boxTri.style.gap="1.5em"
                
                 boxTri.appendChild(textTri).innerText="Trier par"
                boxTri.appendChild(listeTri)

                listeTri.style.backgroundColor="#901C1C"
                listeTri.style.color="white"
                listeTri.style.borderRadius="5px"
                listeTri.style.width="170px"
                listeTri.style.fontWeight="700"               
                
                                
                listeTri.appendChild(popularite).innerText="popularité"
                listeTri.appendChild(date).innerText="Date"
                listeTri.appendChild(titre).innerText="Titre"
               
               
               

              

              
                textTri.style.fontWeight="700"


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
                                      
                        
                        box.style.width="30%"
                        box.style.height="30%"
                        box.style.alignItems="center"
                                              
                      
                        box.appendChild(picture).src= "img/"+media[p].image
                        
                        if (media[p].image== undefined){
                            box.removeChild(picture)
                            box.appendChild(video).src="img/"+media[p].video
                            
                        }
                       
                    
                      
                        video.style.width="100%"
                        video.style.height="300px"
                        video.style.objectFit="cover"
                        video.setAttribute("type", "video/mp4")
                        video.setAttribute("allow", "autoplay")
                        video.setAttribute("controls", "true")
                        video.style.borderRadius="5px"  
                       
                        picture.style.objectFit="cover";
                        picture.style.overflow="hidden"
                        picture.style.width="100%"
                        picture.style.height="300px"
                        picture.style.borderRadius="5px"  
                        box.appendChild(text)
                        text.appendChild(picturesName).innerText=media[p].title
                        text.appendChild(boxLikes)
                        boxLikes.appendChild(numberLikes).innerText=media[p].likes    
                        boxLikes.appendChild(heart)

                        
                        
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
                     box.id=media[p].title
                     
                   
                     
                        //on créer les filtres de présentation des photos
                       
                        listeTri.addEventListener("input", (e)=> {
                            
                              {
                                    if(listeTri.value== "popularité") {
                                        
                                        box.style.order="-"+media[p].likes
                                       
                                   }
                            }
                                    if (listeTri.value=="Date"){
                                       
                                        box.style.order="-"+box.className.replace("-","")
                                      
                                    }

                                    if (listeTri.value=="Titre") {

                                        for(let j=0;j<box.id.length;j++){
                                            box.id.replace(" ","")
                                           box.style.order=box.id.charCodeAt()
                                           box.style.order+=box.id[j].charCodeAt()
                                         
                                        }
                                    }

                        })
                               
                        
                        //Carousel
                               
                               

                              class Carousel {


         /**
         * @param {HTMLElement} element
         * @param {Object} options
         * @param {Object} options, slidesToScroll nombre d'elements à faire défiler.
         * @param {Object} options, slidesVisible nombre d'elements visible
         *          
         */
          
         
         constructor (element, options = {}) {
                    
            this.element = element
            this.options = Object.assign ({}, {
                slidesToScroll:3,
                slidesVisible:3
            }, options) 

            let children = [].slice.call(element.children)
            console.log(box.picture)
           this.currentItem = 0
           this.root = this.createDivWithClass("carousel")
           this.panorama = this.createDivWithClass('carousel__container')
           
           this.root.appendChild(this.panorama)
           this.element.appendChild(this.root)
            console.log(children)
         this.items = children.map((child) => {
               let item = this.createDivWithClass("carousel__item")
            
               item.appendChild(child)
                this.panorama.appendChild(item)
                return item
            })
            this.setStyle()
            this.createNavigation()
           console.log("ok")
         
        } 
        /**
         * applique les bonnes dimensions aux élements du carousel
         */

        setStyle () {
            let ratio = this.items.length / this.options.slidesVisible
            this.panorama.style.width=(ratio * 100)+"%"
            this.items.forEach(item => item.style.width =((100 / this.options.slidesVisible) / ratio) + "%")
            
        }

        createNavigation () {

            let nextButton = this.createDivWithClass('carousel__next')
            let prevButton = this.createDivWithClass('carousel__prev')
            this.root.appendChild(nextButton)
            this.root.appendChild(prevButton)
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
            let translateX= index * -100/ this.items.length
            this.panorama.style.transform ="translate3d(" + translateX + "%,0,0)";
            this.currentItem = index
           

        }


        /**
         * 
         * @param {string} className 
         * @returns {HTMLElement}
         */

        createDivWithClass (className) {
            let div = document.createElement('div')
            div.setAttribute('class', className)
            return div

        }
      } 
     picture.addEventListener('click', launchCarousel)
     video.addEventListener('click', launchCarousel)

     function launchCarousel() {
        
    
     main.removeChild(createDiv)
     main.removeChild(boxTri)
     main.removeChild(section)
      
     
      new Carousel (document.querySelector("#container"), {

        slidesToScroll:1,
        slidesVisible:1,

      })
    }
                         
                       


                    }}
                 

}}


getData()


  