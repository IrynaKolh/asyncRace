import './../style/header.css';

export default function createHeader() {
  const header = <HTMLElement>document.createElement('HEADER');
  header.setAttribute('class', 'header');
  document.body.appendChild(header);
  header.innerHTML = `
    <div class="menu">
      <button class="garage-btn active-btn" id="garage-menu">TO GARAGE</button>
      <button class="winners-btn" id="winners-menu">TO WINNERS</button>
    </div>
  `;
}
