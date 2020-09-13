import * as _ from 'lodash';

import './scss/index.scss';

import {
  headerMenu
} from './header/headerMenu';


const $root: any = document.querySelector('#root')
// console.log($root);


headerMenu($root);
// function component() {

// const element = document.createElement('div');
// console.log('hi');

// Lodash, currently included via a script, is required for this line to work
// element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// element.classList.add('hello');

// return element;
// }

// document.body.appendChild(component());