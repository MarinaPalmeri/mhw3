document.addEventListener('DOMContentLoaded', function() {
  console.log("Script caricato!");
    // VARIABILI //
    const navbar = document.querySelector('.navbar');
    const dropdownContainer = document.querySelector('.dropdown-container');
    const navItems = document.querySelectorAll('.nav-item');
    const navIcons = document.querySelectorAll('.nav-icon');
    const appleLogo = document.querySelector('.apple-logo');
    const scrollerTracks = document.querySelectorAll('.scroller-track');
    
    let isOriginalLogo = true;
    const originalLogoPath = appleLogo.src;
    const alternateLogoPath = "icona_apple_colore.png";
  
    // LOGO APPLE //
    appleLogo.addEventListener('click', function() {
      if (isOriginalLogo) {
        this.src = alternateLogoPath;
      } else {
        this.src = originalLogoPath;
      }
      isOriginalLogo = !isOriginalLogo;
    });
  
    // NAVBAR//
    function setupNavItemHover(item) {
      item.addEventListener('mouseenter', () => {
        item.classList.add('nav-item-highlight');
        if (item.id === 'icona_ricerca' || item.id === 'icona_bag') {
          item.style.transform = 'scale(1.1)';
        }
      });
      
      item.addEventListener('mouseleave', () => {
        item.classList.remove('nav-item-highlight');
        if (item.id === 'icona_ricerca' || item.id === 'icona_bag') {
          item.style.transform = 'scale(1)';
        }
      });
    }
  
    navItems.forEach(setupNavItemHover);
    navIcons.forEach(setupNavItemHover);
  
    // DROPDOWN //
    const dropdownGenerators = {
      store: createStoreDropdown,
      mac: createMacDropdown,
      ipad: createIpadDropdown,
      iphone: createIphoneDropdown,
      watch: createWatchDropdown,
      vision: createVisionDropdown,
      airpods: createAirpodsDropdown,
      tv: createTvDropdown,
      entertainment: createEntertainmentDropdown,
      accessories: createAccessoriesDropdown,
      support: createSupportDropdown,
      search: createSearchDropdown,
      bag: createBagDropdown
    };
  
    // FUNZIONI DROPDOWN //
    function createStoreDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Shop';
      
      const ul = document.createElement('ul');
      ['Shop the latest', 'Mac', 'iPad', 'iPhone', 'Apple Watch', 'Apple Vision Pro', 'Accessories'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createMacDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Shop Mac';
      
      const ul = document.createElement('ul');
      ['Explore All Mac', 'MacBook Air', 'MacBook Pro', 'iMac', 'Mac Mini', 'Mac Studio', 'Mac Pro', 'Displays'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createIpadDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Explore iPad';
      
      const ul = document.createElement('ul');
      ['Explore All iPad', 'iPad Pro', 'iPad Air', 'iPad', 'iPad Mini', 'Apple Pencil', 'Keyboards'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createIphoneDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Explore iPhone';
      
      const ul = document.createElement('ul');
      ['Explore All iPhone', 'iPhone 16 Pro', 'iPhone 16', 'iPhone 16e', 'iPhone 15'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createWatchDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Explore Watch';
      
      const ul = document.createElement('ul');
      ['Explore All Apple Watch', 'Apple Watch Series 10', 'Apple Watch Ultra 2', 'Apple Watch SE', 'Apple Watch Nike', 'Apple Watch Hermès'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createVisionDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Explore Vision';
      
      const ul = document.createElement('ul');
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = 'Explore Apple Vision Pro';
      li.appendChild(a);
      ul.appendChild(li);
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createAirpodsDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Explore AirPods';
      
      const ul = document.createElement('ul');
      ['Explore All AirPods', 'AirPods 4', 'AirPods Pro 2', 'AirPods Max'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createTvDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Explore TV & Home';
      
      const ul = document.createElement('ul');
      ['Explore All TV & Home', 'Apple TV', 'HomePod', 'Accessories'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createEntertainmentDropdown() {
    const dropdownContent = document.createElement('div');
    dropdownContent.className = 'dropdown-content';
    
    const section = document.createElement('div');
    section.className = 'dropdown-section';
    
    const h3 = document.createElement('h3');
    h3.textContent = 'Explore Entertainment';
    
    const ul = document.createElement('ul');
    ['Apple Music', 'Apple TV+', 'Apple Arcade', 'Apple Fitness+'].forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = item;
      if (item === 'Apple Music') {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          fetchMusicData();
          document.getElementById('music-section').style.display = 'block';
          window.scrollTo({
            top: document.getElementById('music-section').offsetTop,
            behavior: 'smooth'
          });
        });
      }
      li.appendChild(a);
      ul.appendChild(li);
    });
    
    section.append(h3, ul);
    dropdownContent.appendChild(section);
    return dropdownContent;
  }
  
  // FUNZIONE MUSICA - API DENTRO NAVBAR //
  function fetchMusicData() {
    const url = 'https://itunes.apple.com/search?term=pop&media=music&entity=album&limit=6';
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('music-results');
        container.innerHTML = '';
        
        data.results.forEach(album => {
          const card = document.createElement('div');
          card.className = 'music-card';
          card.innerHTML = `
            <img src="${album.artworkUrl100.replace('100x100', '300x300')}" 
                 alt="${album.collectionName}" 
                 class="music-cover">
            <div class="music-info">
              <h3>${album.collectionName}</h3>
              <p>${album.artistName}</p>
            </div>
          `;
          container.appendChild(card);
        });
      })
      .catch(error => {
        console.error("Error fetching music:", error);
        document.getElementById('music-results').innerHTML = 
          '<p style="color:white">Music unavailable. Please try later.</p>';
      });
  }
  
  function createAccessoriesDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Shop Accessories';
      
      const ul = document.createElement('ul');
      ['Shop All Accessories', 'Mac', 'iPad', 'iPhone', 'Apple Watch', 'Apple Vision Pro', 'AirPods', 'TV & Home'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createSupportDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      
      const section = document.createElement('div');
      section.className = 'dropdown-section';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Explore Support';
      
      const ul = document.createElement('ul');
      ['iPhone', 'Mac', 'iPad', 'Watch', 'Apple Vision Pro', 'AirPods', 'Music', 'TV'].forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
      });
      
      section.append(h3, ul);
      dropdownContent.appendChild(section);
      return dropdownContent;
  }
  
  function createSearchDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      dropdownContent.dataset.dropdownContent = 'search';
      
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Search apple.com';
      input.className = 'search-input';
      
      dropdownContent.appendChild(input);
      return dropdownContent;
  }
  
  function createBagDropdown() {
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      dropdownContent.dataset.dropdownContent = 'bag';
      
      const h3 = document.createElement('h3');
      h3.textContent = 'Your Bag is Empty';
      
      const p = document.createElement('p');
      p.textContent = 'Start shopping to add items to your bag.';
      
      dropdownContent.append(h3, p);
      return dropdownContent;
  }
  

// RECENSIONI - API //
function caricaRecensioni() {
  fetch('https://fakestoreapi.com/products/category/electronics')
    .then(response => response.json())
    .then(json => {
      const container = document.querySelector('#reviews');
      if (!container) {
        console.error("Elemento #reviews non trovato nel DOM");
        return;
      }

      json.slice(0, 4).forEach(prodotto => {
        const div = document.createElement('div');
        div.classList.add('recensione');

        div.innerHTML = `
          <button class="collapsible">${prodotto.title}</button>
          <div class="content">
            <img src="${prodotto.image}" alt="${prodotto.title}" width="100">
            <p>${prodotto.description}</p>
            <strong>Rating: ${prodotto.rating.rate} / 5</strong>
          </div>
        `;

        container.appendChild(div);
      });

      const coll = document.getElementsByClassName("collapsible");
      for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          const content = this.nextElementSibling;
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      }
    })
    .catch(error => {
      console.error('Errore nel recupero delle recensioni:', error);
    });
}
caricaRecensioni();

  
  
    // GESTIONE DEI DROPDOWN //
    function handleDropdown(item) {
      item.addEventListener('mouseenter', () => {
        const dropdownType = item.dataset.dropdown;
        if (dropdownGenerators[dropdownType]) {
          dropdownContainer.innerHTML = '';
          const dropdownContent = dropdownGenerators[dropdownType]();
          dropdownContainer.appendChild(dropdownContent);
          dropdownContainer.style.display = 'block';
          
          if (item.id === 'icona_ricerca' || item.id === 'icona_bag') {
            dropdownContainer.dataset.keepOpen = 'true';
          }
        }
      });
  
      item.addEventListener('mouseleave', (e) => {
        setTimeout(() => {
          if (!dropdownContainer.contains(document.querySelector(':hover')) && 
              dropdownContainer.dataset.keepOpen !== 'true') {
            dropdownContainer.style.display = 'none';
          }
        }, 100);
      });
    }
  
    navItems.forEach(handleDropdown);
    navIcons.forEach(handleDropdown);
  
    dropdownContainer.addEventListener('mouseleave', () => {
      dropdownContainer.dataset.keepOpen = 'false'; 
      dropdownContainer.style.display = 'none';
    });
  
    // SCROLLER AUTOMATICO //
    scrollerTracks.forEach(track => {
      const originalImages = track.querySelectorAll('img:not(.clone)');
      
      originalImages.forEach(img => {
        const clone = img.cloneNode(true);
        clone.classList.add('clone');
        track.appendChild(clone);
      });
  
      track.addEventListener('animationiteration', () => {
        track.style.animation = 'none';
        requestAnimationFrame(() => {
          track.style.animation = 'scroll 70s linear infinite';
        });
      });
    });



// FOOTER
    // MOSTRA/NASCONDI DETTAGLI //
const toggleFooterButton = document.getElementById('toggle-footer-details');
const footerDetails = document.getElementById('footer-details');

toggleFooterButton.addEventListener('click', () => {
  footerDetails.classList.toggle('footer-details-hidden');
  footerDetails.classList.toggle('footer-details-visible');
  
  // CAMBIA IL PULSANTE DEL TESTO //
  if (footerDetails.classList.contains('footer-details-visible')) {
    toggleFooterButton.textContent = 'Hide Details ▲';
  } else {
    toggleFooterButton.textContent = 'Show Details ▼';
  }
});
});