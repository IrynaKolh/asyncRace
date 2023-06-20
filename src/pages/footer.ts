import './../style/footer.css';

export default function createFooter() {
  const footer = <HTMLElement>document.createElement('FOOTER');
  footer.setAttribute('class', 'footer');
  document.body.appendChild(footer);
  footer.innerHTML = `
          <div class="footer-wrap">
          <div>
            <a
              href="https://rs.school/"
              target="_blank"
              rel="noreferrer"
              class="rs-link"
            >
              <img src="./img/rs_school_js.png" class="rss-img" alt="RS School">
            </a>
          </div>
          <div>
            <a
              href="https://rollingscopes.com/"
              target="_blank"
              rel="noreferrer"
              class="copy-link"
            >
              &copy; Rolling Scopes School, 2022
            </a>
          </div>
          <div>
            <a 
              class="github-link" 
              href="https://github.com/irynakolh" 
              target="_blank"
            >
              github 2022
            </a>
          </div>    
          </div>   
   `;
}
