class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>            
        <a class="nav-link home" href="index.html">CASTLES IN THE AIR</a>
        <a class="nav-link" href="about.html">About</a>
        <a class="nav-link" href="samples.html">Samples</a>
        <a class="nav-link" href="extras.html">Extras</a>
        <a class="nav-link" href="reviews.html">Reviews</a>
        <a class="nav-link" href="buy.html">Buy now</a>        
      </nav>
    `;
  }
}
customElements.define('nav-header', Nav);