$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botaoCancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const valorDaTarefa = $('#tarefa').val();
        const novaTarefa = $('<li></li>');

        $(`<li> ${valorDaTarefa} </li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ol');
        novatarefa.addEventListener("click", risco);})}
)

$( 'ol' ).on( "click", function() {
    $( this ).css( "text-decoration", "line-through" );
  });

