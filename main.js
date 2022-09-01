import { Desks } from './app/Desks.js';
import { newTime } from './app/trelloFanction.js';
setInterval(newTime, 1000);
new Desks(1).initialRender()




