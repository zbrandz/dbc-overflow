$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

$('.ask-question-form').on('submit', '.new-question', function(event){
  event.preventDefault();

    var url = $(this).attr('action')
    var data =$('.new-question').serialize()

    $.ajax({
      url: url,
      type: 'POST',
      data: data
    })

    .done(function(response){
      $('.question-container').prepend(response);
      $('.new-question').trigger('reset');
    })
})

$('.voting').on('submit', function(event){
  event.preventDefault();

  var url = $(this).attr('action');
  var data =$(this).serialize();

    $.ajax({
      url: url,
      type: 'POST',
      data: data
    })

      .done(function(response){
      // $(event).parent().parent().siblings().children('.show-votes h3').text(response);
      $('.show-votes h3').text(response);

      })
  })
});
