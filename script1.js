

    

    
        let comps =document.querySelectorAll('.component');

        let srcs = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];

        let j = 0;
        
        for(let i =0; i< comps.length; i++){
            
            let rand = Math.floor(Math.random() * srcs.length);
            comps[i].querySelector('img').src=`imgs/${srcs[rand]}.png`;

            srcs.splice(rand, 1);


        }

        function play(){
                comps.forEach(item => {
                    item.addEventListener('click', event => {
                        flip(item);
                    
                    })
                })

        }
       
        let arr = [];
        let compArr= [];
        
        
        function flip(a) {
                let x = -180;
                a.querySelector('.component-inner').style.transform = `rotateY(${arr.length >1 ? 0 : -180}deg)`;    
                   
                let img1 =  a.querySelector('.component-inner').querySelector("img").src;
                arr.push(img1);
                compArr.push(a);
            
                if(arr.length>=2){
                            if(arr[0] === arr[1]){
                                arr = [];
                                compArr = [];
                            } else {
                                setTimeout(() => {
                                    compArr[0].querySelector('.component-inner').style.transform = " rotateY(0deg)";
                                        compArr[1].querySelector('.component-inner').style.transform = " rotateY(0deg)";
                                        arr = [];
                                        compArr = [];
                              }, 500);
                 }
            }

        }
