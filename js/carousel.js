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
            console.log(children)
           this.currentItem = 0
           this.root = this.createDivWithClass("carousel")
           this.panorama = this.createDivWithClass('carousel__container')
           
           this.root.appendChild(this.panorama)
           this.element.appendChild(this.root)

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
      document.addEventListener('DOMContentLoaded', function () {
      
      
      new Carousel (document.querySelector("#container"), {

        slidesToScroll:1,
        slidesVisible:1,
      })
    })