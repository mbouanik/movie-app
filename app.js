
let movies = []
let id = 0
function display_movie(title, rating, id){
    $('section').append(`<div id=${id}> ${title} ${rating}/10 <button> Remove </button> </div>`)
}

$('.movie-form').on('submit', function (evt){
    evt.preventDefault()
    const title  = $('#title').val()
    const rating = $('#rating').val()
    const movie = {id, title, rating:+rating}
    $('#title').val("")
    $('#rating').val("")
    
    movies.push(movie)
    $('section').append(`<div id=${movie.id}> ${title} ${rating}/10 <button> Remove </button> </div>`)
    id++
})

$('section').on('click', 'button',function () {
    movies = movies.filter((item) => item.id != +($(this).parent().attr('id')))
    $(this).parent().remove()
    
})

$('#a-order').on('click', function() {
    movies.sort((a, b) => {
        const nameA = a.title.toLowerCase(); 
        const nameB = b.title.toLowerCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        return 0;
      })
      $('section').empty()
     if($(this).hasClass("up")){
        $(this).removeClass('up')
        $(this).addClass('down')
     }else{
        $(this).addClass('up')
     }
     if($(this).hasClass("up")){
        movies = movies.reverse()
     }
      for(movie of movies){
        display_movie(movie.title, movie.rating, movie.id)
      }

})

$('#r-order').on('click', function () {
    
    movies.sort((a, b) => a.rating - b.rating)

    $('section').empty()
     if($(this).hasClass("up")){
        $(this).removeClass('up')
        $(this).addClass('down')
     }else{
        $(this).addClass('up')
     }
     if($(this).hasClass("up")){
        movies = movies.reverse()
     }
      for(movie of movies){
        display_movie(movie.title, movie.rating, movie.id)
      }
})
