console.log("hello");
    // Get the hamburger button and the collapsed menu
    let z = document.getElementsByClassName("kmb-dropdown-menu");
    const c = document.getElementsByClassName('kmb-horizontal-menu-navbar-collapse');
    console.log(z);                 
    // Add a click event listener to the hamburger button
    function hello(){
        console.log("clicked.....");
        console.log(z[0]);
        let x= z[0].classList.contains("kmb-visible-menu");
        if(x){
            z[0].classList.remove('kmb-visible-menu')
            c[0].classList.remove('kmb-collapsed-menu')
        }
        else{
             z[0].classList.add('kmb-visible-menu')
            c[0].classList.add('kmb-collapsed-menu')
        }
       
    }

   