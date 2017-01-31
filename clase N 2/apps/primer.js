new Vue({
  el:'#app',
  data:{
    films:[
      {id:1,nombre:'Dans la vie on ne ble de ce que l on est.',seen:false},
      {id:2,nombre:'Dans la vie on ne ble de est.', seen:true},
      {id:3,nombre:'Dans la vie on ne ble de ce que l le on est.',seen:false},
    ],
  },
  methods:{
    guardarFilms:function(nombre){
      if(nombre.trim()){
        this.films.push({nombre:nombre,seen:false});
        this.phrase = ' ';
      }

    },
    eliminarFilms:function(nombre){
      let index = this.films.indexOf(nombre)
      this.films.splice(index, 1);
    },
    toggleFilms:function(nombre){

    }
  }
});
