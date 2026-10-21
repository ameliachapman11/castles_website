class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>Text © 2023 John Longley </p>
        <p>Cover artwork © 2023 Cat Outram</p>
        <p>Printed and distributed by Lulu Press, Inc.</p>
        <p>ISBN 978-1-7384431-0-9</p>
      </footer>
    `;
  }
}
customElements.define('site-footer', Footer);