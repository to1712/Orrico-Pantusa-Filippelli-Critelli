/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    //
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            //document.body.classList.toggle('sb-sidenav-toggled');
            document.getElementById("home").classList.toggle('sb-sidenav-toggled')
            //localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
            localStorage.setItem('sb|sidebar-toggle', document.getElementById("home").classList.contains('sb-sidenav-toggled'));
        });
    }

});

/*window.addEventListener('DOMContentLoaded', event => {

  // Toggle the side navigation
  const navlink = document.body.querySelector('nav-link collapsed');
  if (navlink) {
      // Uncomment Below to persist sidebar toggle between refreshes
      // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
      //     document.body.classList.toggle('sb-sidenav-toggled');
      // }
      navlink.addEventListener('click', event => {
          event.preventDefault();
          //document.body.classList.toggle('sb-sidenav-toggled');

          document.getElementById("open").classList.toggle("collapsed");
          document.getElementById("open").classList.remove("collapsed");
          //localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
          localStorage.setItem('collapse', document.getElementById("collapseLayouts").classList.contains('collapse'));
      });
  }

});*/

window.addEventListener('DOMContentLoaded', event => {
  let isExpanded = false;
  document.getElementById("open").addEventListener("click", event => {
  if(isExpanded){
  document.getElementById("open").classList.add("collapsed");
  document.getElementById("open").setAttribute("aria-expanded", "false");
  document.getElementById("collapseLayouts").classList.remove("show");
  isExpanded = false;
  }else{
  document.getElementById("open").classList.remove("collapsed");
  document.getElementById("open").setAttribute("aria-expanded", "true");
  document.getElementById("collapseLayouts").classList.add("show");
  isExpanded = true;
  }
  });
  });






