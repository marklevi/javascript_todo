$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html()); //assigns template to todoTemplate

  function bindEvents() {

    $('.add').on('click', function(){
      var todoHtml = buildTodo($('.todo').val()); // altered template with todo replaced in h2
      $('.todo_list').append(todoHtml); //appends altered template to the div

      $('.delete').on('click', function(){
        //==>> check this out! $(e.currentTarget).closest('.todo').remove()
        $(this).closest('.todo').remove() //climbs up the dom to find closest class "todo"
      }) // line 12 could have also been written as $(e.currentTarget).closest('.todo').remove()

      $('.complete').on('click', function() {
        var h2 = $(this).parent().parent().siblings(); //climbs up the dom to find target
        h2.addClass("todo complete"); //adds CSS class to the tag h2
      })
    })
  }
    // })
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements


  //Create functions to add, remove and complete todos

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }


  bindEvents();
});
