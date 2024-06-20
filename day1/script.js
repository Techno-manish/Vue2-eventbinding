new Vue({

    el:"#app",
    data:{
        count: 0
    },
    method:{
        increaseCount: function(){
            this.count++;
        },
        decreaseCount: function(){
            this.count--;
        },
       reset: function(){
        this.count=0;
       }
    }
})