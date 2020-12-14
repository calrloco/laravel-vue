<template>
    <div class="card">
        <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
          <p class="card-text">{{content}}</p>
           <p class="card-text">{{price}}$</p>
        </div>
        
    </div>
</template>
<script>
export default {
    // per i props va sempre usato il kebabcase ////
    //props passed to child component are reads only from parent component u shouldent attempt to change it here
   props:{
   'title':String,
   'content':String,
   'price':Number,
   } ,
   //mounted component
   
   mounted(){
       
   } 
}
</script>