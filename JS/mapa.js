<<<<<<< HEAD
bibliotecasStorage()

let map
let myMap = document.getElementById("myMap")

    function initMap() {
        let mapProp= {
            center:new google.maps.LatLng(41.373831, -8.741709),
            mapTypeId: google.maps.MapTypeId.HYBRID,
            zoom:13
        }

        map = new google.maps.Map(myMap, mapProp)
                    
        for (let i = 0; i < bibliotecas.length; i++) {
            let marker = new google.maps.Marker({
                position: { lat: parseFloat(bibliotecas[i].latitude), lng: parseFloat(bibliotecas[i].longitude) },
                //label: "00",
                map: map,
                //animation: google.maps.Animation.BOUNCE,
                title: bibliotecas[i].morada
            
            })
    
        }
        
    }

    function bibliotecasStorage(){
    
        if(localStorage.bibliotecas) {
            let tempArray = JSON.parse(localStorage.getItem("bibliotecas"))
        
            for (let i = 0; i < tempArray.length; i++) {
            
                let novaBiblioteca =  new Biblioteca (tempArray[i]._id, tempArray[i]._freguesia,  tempArray[i]._morada, tempArray[i]._latitude, tempArray[i]._longitude)
                bibliotecas.push(novaBiblioteca)       
            }
        } 
    }    
=======
bibliotecasStorage()

let map
let myMap = document.getElementById("myMap")

    function initMap() {
        let mapProp= {
            center:new google.maps.LatLng(41.373831, -8.741709),
            mapTypeId: google.maps.MapTypeId.HYBRID,
            zoom:13
        }

        map = new google.maps.Map(myMap, mapProp)
                    
        for (let i = 0; i < bibliotecas.length; i++) {
            let marker = new google.maps.Marker({
                position: { lat: parseFloat(bibliotecas[i].latitude), lng: parseFloat(bibliotecas[i].longitude) },
                //label: "00",
                map: map,
                //animation: google.maps.Animation.BOUNCE,
                title: bibliotecas[i].morada
            
            })
    
        }
        
    }

    function bibliotecasStorage(){
    
        if(localStorage.bibliotecas) {
            let tempArray = JSON.parse(localStorage.getItem("bibliotecas"))
        
            for (let i = 0; i < tempArray.length; i++) {
            
                let novaBiblioteca =  new Biblioteca (tempArray[i]._id, tempArray[i]._freguesia,  tempArray[i]._morada, tempArray[i]._latitude, tempArray[i]._longitude)
                bibliotecas.push(novaBiblioteca)       
            }
        } 
    }    
>>>>>>> d4c3ecd6ca2e0ef1e8717c0d250affedff895ae4
