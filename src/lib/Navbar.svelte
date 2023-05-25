<script>
  import { onMount } from 'svelte';
</script>

<div id="Navbar"> 
  <!-- on:click={NavbarClicked} -->
  <script>
    function NavbarClicked() {
      console.log('navbarClicked');
      NavbarHeightManager('up');
    }

  </script>

  <button on:click={ResizeNavbar} id=navbarLogo style="height:1rem; background-color: rgba(0,0,0,0)"> 
    <script>
      let navbar = document.getElementById('Navbar');;
      let navbarDefaultSize;
      let navbarLogoSize;
      
      window.addEventListener
      (
        'load', 
        function(navbarDefaultSize, navbarLogoSize) 
        {  
          console.log('mounted');
    
          setTimeout(() => {
            console.log('timeoutCalled');
            let navbarDefaultSize = Math.round(document.getElementById("Navbar").getBoundingClientRect().height);
            let navbarLogoSize = Math.round(document.getElementById('navbarLogo').getBoundingClientRect().height);

            console.log(
              "logCalled",
              navbarDefaultSize, 
              navbarLogoSize
            );
          }, 300);          
        }
      );

    //----------------------------- ONCLICK  
      let ResizeNavbar = () => {
        console.log('resize called');

        console.log("navbar size: " + Math.round(document.getElementById("Navbar").getBoundingClientRect().height));
        // full sized ? shrink
        console.log(
          Math.round(navbar.getBoundingClientRect().height), 
          navbarDefaultSize,
          navbar.getBoundingClientRect().height == navbarDefaultSize);
        if (Math.round(navbar.getBoundingClientRect().height) == navbarDefaultSize) {
          console.log('shrinking');
          navbar.style.height = navbarLogoSize;
          navbar.style.overflow = hidden;
        }
        // shrunk? full size
        else if (Math.round(navbar.getBoundingClientRect().height) == navbarDefaultSize){
          console.log('explanding');
          navbar.style.height = navbarDefaultSize;
        }
        // idk what happened reset
        else {
          console.log('h e l p');
          console.warn("navbarHeightWeird, setting to auto");
          navbar.style.height = "";
          // console.log('explanding');
          // navbar.style.height = navbarLogoSize;
        };
      };
    </script>
    <img 
      src='./src/assets/logo.png'
      alt="VIWD logo"
    />
  </button>

  <link rel="stylesheet" href="./src/lib/Navbar.css" />
  {#each [
    {'Vancouver Island Web Developers': '/'},
    {'+1-(250)-216-2556': 'tel:+1-(250)-216-2556'},
    {'contact@vancouverislandwebdevelopers.com': 'mailto:contact@vancouverislandwebdevelopers.com'},
  ] as headerItem}
    <div>
      {#if typeof headerItem === 'object'}
        <a href={Object.values(headerItem)[0]}>
          {Object.keys(headerItem)[0]}
        </a>
      {:else}
        <a href={headerItem}>
          {headerItem}
        </a>
      {/if}
    </div>
  {/each}
</div>
