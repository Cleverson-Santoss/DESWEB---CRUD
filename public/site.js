//ESSE CODIGO RODA NO NAVEGADOR (FRONT-END)
//Clouser - função java-script autoexecutavel
(function(){
    $('#clientes').on('click','.js-delete', function(){
        //CALLBACK
        let botaoclicado = $(this)
        $('#btnsim').attr('data-id', botaoclicado.attr('data-id'))
        $('#meumodal').modal('show')
    })
    $('btnsim').on('click',function(){
        let botaoclicado = $(this)
        let codcliente = botaoclicado.attr('data-id')
        //CHAMAR O BACKEND
        $.ajax({
            url: '/clientes/delete/' + codclientes, 
            method: 'Get',
            success: function(){
                window.location.href='/clientes'
            }
        })
    })


})()