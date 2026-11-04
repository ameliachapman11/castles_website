class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>            
        <a class="nav-link home" href="index.html" title="Castles in the Air home page">CASTLES IN THE AIR</a>
        <a class="nav-link" href="about.html" title="About the book and its contents">About</a>
        <a class="nav-link" href="samples.html" title="Browse some samples of the book">Samples</a>
        <a class="nav-link" href="extras.html" title="Extended commentaries and supplements">Extras</a>
        <a class="nav-link" href="reviews.html" title="Comments and reviews from readers">Reviews</a>
        <a class="nav-link" href="buy.html" title="Buy the book from Lulu.com">Buy now</a>        
      </nav>
    `;
  }
}
customElements.define('nav-header', Nav);