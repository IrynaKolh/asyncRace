import { createCarsList } from './garagePage';
import { createWinnersList } from './winnersPage';
import './../style/main.css';

export default function createMain() {
  const main = <HTMLElement>document.createElement('MAIN');
  main.setAttribute('class', 'main');
  document.body.appendChild(main);
  main.innerHTML = `
     <div class="garage block">
      <div class="forms">
        <form class="form" id="create">
          <input type="text" class="input" id="create-name" name="name" >
          <input type="color" class="color" id="create-color" name="color" value = #ffffff>
          <button class="button" id="create-btn" type="submit">CREATE</button>
        </form>
        <form class="form" id="update">
          <input type="text" class="input" id="update-name" name="name" disabled>
          <input type="color" class="color" id="update-color" name="color" value = #ffffff disabled>
          <button class="button" id="update-btn" type="submit" disabled>UPDATE</button>
        </form>
      </div>
      <div class="controls-btns">
        <button class="button race-btn" id="race"> RACE </button>
        <button class="button reset-btn" id="reset" disabled>RESET</button>
        <button class="button generator-btn" id="generator">GENERATE CARS</button>
      </div> 
      <div class="garage-race"> ${createCarsList()}</div>      
    </div>
    
    <div class="winner hidden"> ${createWinnersList()}</div> 
    <div class="pagination">
      <button class="button prev-button" id="prev">PREV</button>
      <button class="button next-button" id="next">NEXT</button>
    </div>
`;
}
