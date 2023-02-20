update: function(){
    window.addEventListener("click", e =>{
        this.data.clickCounter= this.data.clickcounter+1;
        if (this.data.clickCounter===1){
            const rotation= {x:0,y:20,Z:0}