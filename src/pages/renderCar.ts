import { getCarColor } from '../components/carColor';
import { ICar } from '../types/interfaces';
import './../style/garage.css';

export const renderCar = ({ id, name, color }: ICar) => `
        <div class="controls-car">
          <button class="button select-btn" id="select-car-${id}">SELECT</button>
          <button class="button remove-btn" id="remove-car-${id}">REMOVE</button>
          <p class="car-name">${name}</p>
        </div>
        <div class="road"> 
            <div class="controls-engine">
              <button class="button start-engine-btn" id="start-engine-car-${id}">A</button>
              <button class="button stop-engine-btn" id="stop-engine-car-${id}" disabled>B</button>
            </div>
            <div class="car-img" id="car-img-${id}">
               ${getCarColor(color)}
            </div>
            <div class="flag" id="flag-${id}"> &#127937</div>
        </div>
        <div id="message-broke-down-engine-${id}" class = "message hidden"></div>
      `;
