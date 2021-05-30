
const result=document.querySelector("#result");
async function loaddata(){
    const res=await fetch('http://localhost:3001/api/pm')
    const allpms=await res.json();
    console.log(allpms)
    createui(allpms)
}

loaddata();

function createui(data){
   
   let counter=1;
    data.primeministers.forEach(element => {

        let mycounter=document.createElement('p');
        mycounter.className='mycounter';
        mycounter.innerHTML=counter;
       
        let pmcard=document.createElement('div');
         pmcard.className='card';

         let myimg=document.createElement('img');
         myimg.className='featureimage' 
         myimg.src=element['featureimage'];

        let name=document.createElement('h2');
        name.innerHTML=element['name'];

        let lifespan=document.createElement('p');
        lifespan.innerHTML='Born-Dead:'+element['born-dead'];
        
        let tof=document.createElement('p');
        tof.innerHTML=element['term of office'];

        let remark=document.createElement('p');
        remark.innerHTML=element['remark'];

        pmcard.appendChild(mycounter);
        pmcard.appendChild(myimg);
        pmcard.appendChild(name);
        pmcard.appendChild(lifespan);
        pmcard.appendChild(tof);
        pmcard.appendChild(remark);





        result.appendChild(pmcard);
        counter++;
    });
  
    
}