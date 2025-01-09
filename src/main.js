
import { Game, MusicPlayer } from '../lib/ezLib.js'

import { PlayStage } from './play_stage.js';
//
const canvas = document.getElementById('game_screen');
const loading = document.getElementById('loading');
const audio_element = document.getElementById('audio_element');
//
export const theMusicPlayer = new MusicPlayer(audio_element);
//
export const theGame = new Game(canvas);
//
async function loadAssets() {
  console.log('loading assets');
  await theGame.loadImage("paysage", "./assets/images/paysage.png");
  //
  await theGame.loadSound("pickup", './assets/sounds/pickup.wav');
  //
  console.log('end loading');
  //
  setTimeout(() => {
    loading.style.display = 'none';
    const datas = { name: "ADD" };
    theGame.getStageManager().pushStage(new PlayStage(canvas.width, canvas.height), datas);
    //
    theGame.start();
  }, 500);
}
//
loadAssets();