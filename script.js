
        let comps =document.querySelectorAll('.hidden');

        
        let arr = [];
        let compArr= [];
        
        
        function play(){

            let srcs = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
           
            for(let i =0; i< comps.length; i++){
                let rand = Math.floor(Math.random() * srcs.length);
                comps[i].parentElement.querySelector('img').src=`imgs/${srcs[rand]}.png`;
                srcs.splice(rand, 1);
            }
    
                comps.forEach(item => {
                    item.addEventListener('click', event => {
                        // flip(item);
                        flip(item);
                    })
                })

                document.getElementById('intro').style.opacity = '0'
                document.getElementById('intro').style.zIndex = '-1'
        }


        function again(){
            
            let srcs = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
        
            for(let i =0; i< comps.length; i++){
                let rand = Math.floor(Math.random() * srcs.length);
                comps[i].parentElement.style.transform = `rotateY(${0}deg)`;
                comps[i].parentElement.querySelector('img').src=`imgs/${srcs[rand]}.png`;
                srcs.splice(rand, 1);
                comps[i].parentElement.parentElement.style.opacity = "1";
            }

        }

  
        function flip(a) {
                a.parentElement.style.transform = `rotateY(${arr.length >1 ? 0 : -180}deg)`;    
                let img1 =  a.parentElement.querySelector("img").src;
                arr.push(img1);
                compArr.push(a);
            
                if(arr.length>=2){
                            if(arr[0] === arr[1]){
                              
                                setTimeout(() => {
                                    compArr[0].parentElement.parentElement.style.opacity = "0"; 
                                    compArr[1].parentElement.parentElement.style.opacity = "0";
                                    arr = [];
                                    compArr = [];
                              }, 500);
                      
                            
                            } else {
                                setTimeout(() => {
                                    compArr[0].parentElement.style.transform = " rotateY(0deg)";
                                        compArr[1].parentElement.style.transform = " rotateY(0deg)";
                                        arr = [];
                                        compArr = [];
                              }, 500);
                 }
            }

        }
