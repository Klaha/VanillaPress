
/**
 * Main app file.  Initializes app components.
 */


/**
 * The main app object.
 *
 */
var vanillaPress = {

  init: function() {

    // Add any functions here you want
    // to run to start the application
    removeOldStuff();
    populatePosts();
    addTitleListener();
    addPostListeners();
  }

};

vanillaPress.init();

// Add your custom code starting here:

function getAllPosts() {
  return document.querySelectorAll('.post');
}

function removeOldStuff() {
  var oldPageTitle = document.getElementById( 'pageTitle' );
  var oldPageContent = document.getElementById( 'pageContent' );

  oldPageTitle.remove();
  oldPageContent.remove();
}

function addPostListeners() {
  var posts = getAllPosts();
  for (var i = 0; i < posts.length; i++) {
    posts[i].addEventListener( 'click', getDetailedPost, false );
  }
}

function removePostListeners() {
  var posts = getAllPosts();
  for (var i = 0; i < posts.length; i++) {
    posts[i].removeEventListener( 'click', getDetailedPost, false );
  }
}

function addTitleListener() {
  var title = document.getElementById( 'siteName' );
  title.addEventListener( 'click', goBack, false );
}

function removePosts() {
  var posts = getAllPosts();

  for (var i = 0; i < posts.length; i++) {
    posts[i].remove();
  }
}

function appendToPrimary( elemento ) {
  var primary = document.querySelector( '.primary' );
  primary.appendChild( elemento );
}

function populatePosts() {
  for (var i = 0; i < posts.length; i++) {

    var container = document.createElement( 'div' );
    container.id = 'post_id#' + i;
    container.classList.add( 'post' );

    var title = document.createElement( 'h2' );
    title.id = "pageTitle";

    var link = document.createElement( 'a' );
    link.innerText = posts[i].title
    link.setAttribute( 'href', '#' + posts[i].slug );

    title.appendChild( link );

    var content = document.createElement( 'div' );
    content.id = "pageContent"
    content.innerHTML = posts[i].content;

    container.appendChild( title );
    container.appendChild( content );

    appendToPrimary( container );
  }

  var postz = getAllPosts();
  postz[ postz.length -1 ].style.borderBottom = 'none';

}

function getDetailedPost() {
  var selectedPost = this;
  selectedPost.style.borderBottom = 'none';

  removePostListeners();
  removePosts();
  appendToPrimary( selectedPost );

}

function goBack() {
  removePosts();
  populatePosts();
  addPostListeners();
}
