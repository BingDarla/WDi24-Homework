// Support pagination to show all results from Flickr (eventually, after a lot of scrolling).

// Prevent your code from making too many requests: only one at a time, please
// Don't request more images when you reach the last "page" of Flickr results
// Make sure you go back to the first page when searching for a new query!
// Make it beautiful
// Add other features as you see fit
// Bonus: display larger images in an attractive slideshow
// Bonus: add links back to each image's own page on Flickr.com
let page = 0;
let i=1;
let flag = true;  //until searchFlickr finishes, it will turn true;
let query = '';

const searchFlickr = function(query,num){
  // console.log(query);
  console.log('searchFlickr is called');

  //Fetch images from Flick ruseing AJAX
  const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
  $.getJSON(flickrURL,{
    method:'flickr.photos.search',
    api_key:'2f5ac274ecfac5a455f38745704ad084',
    text:query,
    page:num,
    format:'json',
  }).done(showImages).done(function(){
    flag = true;
  })

}



const showImages = function(results){
    console.log(results);
    page = results.photos.pages;
    console.log(page);
  _(results.photos.photo).each(function(photoInfo){
    // console.log(photoInfo);
    const photoURL = generateURL(photoInfo);
    const photoLURL = generateLURL(photoInfo);
    // console.log(photoURL);
    //Create a new image
    const $img = $('<img/>',{ src: photoURL});
    const $a=$('<a>',{href:photoLURL});
    // console.log($a);

    $a.attr("target","_blank");   //open the link in a new tag
    // $img.attr('src',photoURL);
    // console.log($img);
    //Set the image src to be the photoURL
    //Append the new image to the page
    $a.append($img);
    $a.appendTo('#images'); // $('#images').append($img);
  });

}
const generateURL = function(photo){

  return [
    'http://farm',
    photo.farm,
    '.static.flickr.com/',
    photo.server,
    '/',
    photo.id,
    '_',
    photo.secret,
    '_q.jpg' //change 'q' for different sizes
  ].join('');
}
//large size of photo URL
const generateLURL = function(photo){

  return [
    'http://farm',
    photo.farm,
    '.static.flickr.com/',
    photo.server,
    '/',
    photo.id,
    '_',
    photo.secret,
    '_h.jpg' //change 'q' for different sizes
  ].join('');
}

const flickrSlide = function(query,num){
  console.log(query);
  console.log('flickSlide is called');
  const slideURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
  $.getJSON(slideURL,{
    method:'flickr.photos.search',
    api_key:'2f5ac274ecfac5a455f38745704ad084',
    text:query,
    page:num,
    format:'json',
  }).done(showSlide)
}
const showSlide = function(results){
    console.log(results);
    page = results.photos.pages;
    console.log(page);
  _(results.photos.photo).each(function(photoInfo){
    // console.log(photoInfo);
    const photoURL = generateLURL(photoInfo);
    const $div = $('<div/>');
    $div.addClass('mySlides');
    const $img = $('<img/>',{ src: photoURL});
    // $img.attr('width','100%');
    $div.append($img);

    $div.appendTo('#slideshow'); // $('#images').append($img);
  });

}



$(document).ready(function(){
  $('#thumbnail').on('click',function(e){
    e.preventDefault();//stay on this page, We' ll do the AJAX request ourselves
    // console.log('form submitted');

    query = $('#query').val();
    console.log(query);
    // Clear previous results on a new search
    $('#images').empty();
     i=1;
    searchFlickr(query,i);
  });

  $('#slide').on('click',function(e){
    e.preventDefault();
    query = $('#query').val();
    console.log(query);
    $('#images').empty();
    flickrSlide(query,i);

  });
  /////slide/////////////////////
  $("#slideshow > div:gt(0)").hide();

var index = 1;
var maxindex = $('#slideshow > div').length;

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    $('ul li').removeClass('active');
    $('ul li:eq(' + index + ')').addClass('active');
    index = index < maxindex - 1 ? index + 1 : 0;
}, 3000);

for (var i = 0; i < maxindex; i++) {
    $('ul').append('<li class="' + (i == 0 ? 'active' : '') + '"></li>');
}



  $(window).on('scroll',function(){
    // console.log('scroll');
    const scrollBottom = $(document).height()-$(window).height()-$(window).scrollTop();
    // console.log(scrollBottom);
    if (scrollBottom < 600 && flag){
       if (i<page){
         i++;
         flag = false;
         console.log(`i: ${i} ${query}`);
         searchFlickr(query,i);
         console.log(`flag: ${flag}`);
       }
    }
  });

})
