import { Desks } from './app/Desks.js';
import { newTime } from './app/trelloFanction.js';
import {Modal} from './app/Modal.js'
setInterval(newTime, 1000);
new Modal().selectUser(Desks)




