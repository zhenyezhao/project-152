update: function(){
    window.addEventListener("click", e =>{
        this.data.eventListenter= this.data.ceventListener+1;
        if (this.dataeventListeneter===1){
            const rotation= {x:0,y:20,Z:0}