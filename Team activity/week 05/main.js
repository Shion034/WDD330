import Hikes from './hikes.js';
const hikes = new Hikes();
const myHike = new Hikes('hikeListId');

myHike.showHikeList()

hikes.showHikeList(hikes.parentElement, hikes.getHikeList)