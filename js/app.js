(function($){
  //Main será nossa classe principal
  class Main {
    //Aqui iremos chamar as configurações principais
    setup(){
      this.setupNav() //configurar a navbar
    }
    setupNav(){
      //sempre que for clicado em um link da navbar
      $("#top-nav li a").click(function(ev){
        ev.preventDefault() //impedir que o click normal seja ativado, para que possamos substituir o evento de click pelo nosso próprio
        let div = $(this).attr('href') //div a qual queremos ir, ele vai pegar isso da propriedade href
        let speed = 600; //velocidade da animação
        $('html,body').animate({ //fazer um scroll animado, indo para a div que o link está apontando
            scrollTop: $(div).offset().top - 50
        }, speed);
      })
    }
  }
  let app = new Main() //instanciar nossa classe main
  app.setup() //executar o setup definido acima
})(jQuery)
