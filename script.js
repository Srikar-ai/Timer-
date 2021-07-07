
g=()=>{
    var x=document.getElementById('mydate').value;
    document.getElementById("legend").disabled = true;
    Init(x)
    
}



getmyInfo=(endtime)=>{

    
    const total=Date.parse(endtime)-Date.parse(new Date());
    if(total<=0){
        return {total:0,days:0,hour:0,min:0,sec:0};
    }
    const sec=Math.floor((total/1000)%60);
    const min=Math.floor((total/1000/60)%60);
    const hour=Math.floor((total/(1000*60*60))%24);
    const days=Math.floor((total/(1000*60*60*24)));
    return {total,days,hour,min,sec};
    }


Init=(endtime)=>{
    let k=document.querySelector('.day1');
    let l=document.querySelector('.hour');
    let m=document.querySelector('.minu');
    let n=document.querySelector('.seco');  



updateClock=()=>{

    let t=getmyInfo(endtime); 
    k.innerText=t.days;
    l.innerText=('0'+t.hour).slice(-2);
    m.innerText=('0'+t.min).slice(-2);
    n.innerText=('0'+t.sec).slice(-2);
    if (t.total<=0){
        clearInterval(timeinterval);
    }
    


}
updateClock()
let timeinterval=setInterval(updateClock,1000);
}
