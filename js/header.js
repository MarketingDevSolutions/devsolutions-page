window.onscroll = function changeNav(){
    var navBar = document.getElementById('navBar'),
  	secondSection = document.getElementById('footer'),
          secondSectionTop = secondSection.getBoundingClientRect().top, 
          navBarHeight = navBar.getBoundingClientRect().height;

    if(secondSectionTop <= navBarHeight) {
        navBar.className =  ('navbar navbar-expand-lg fixed-top activate-menu navbar-light');
    } else if(secondSectionTop >= navBarHeight) {
        navBar.className = ('navbar navbar-expand-lg fixed-top transparent navbar-light');
	}
}