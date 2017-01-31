new Vue({
  el:'#app',
  ready:function(){
    this.phraseSelect();
  },
  data:{
    elegirCita ='',
    citas:[
      'Dans la vie on ne ble de ce que l on est.',
      'Dans la vie on ne ble de est.',
      'Dans la vie on ne ble de ce que l le on est.',
    ],
  },
  methods:{
    phraseSelect:function(){
      var cita = this.citas[Math.floor(Math.ramdon() * this.citas.length)]
      this.elegirCita = cita;
    },
  },
});
