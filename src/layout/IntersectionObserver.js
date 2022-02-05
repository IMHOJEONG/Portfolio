export let callback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
            entry.target.style.opacity = 1;
        }
        else{
            entry.target.style.opacity = 0;
        }
    }) 
}