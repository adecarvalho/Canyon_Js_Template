//
import { ScoreManager } from '../lib/ezLib.js';
import { theGame, theMusicPlayer } from './main.js';
//
export class PlayStage {
	//
	constructor(screenWidth, screenHeight) {
		this.screenWidth = screenWidth;
		this.screenHeight = screenHeight;

		this.inputManager = theGame.getInputManager();
	}
	//
	onEnter(datas) {
		//
		setTimeout(() => {
			//theMusicPlayer.play('./assets/musics/alliance.mp3', 0.4, true);
		}, 100);

	}
	//
	onExit() {
		if (theMusicPlayer != undefined) {
			theMusicPlayer.stop();
		}
	}
	//
	input() {
		//jump
		if (this.inputManager.isKeyPressed('Space')) {
			//
		}
	}
	//
	collisions() {
		//todo
	}
	//
	checkIsGameOver() {
		//todo
	}
	//
	update(dt) {
		//
		this.input();
		//
		this.collisions();
		//
		this.checkIsGameOver();
	}
	//
	render(ctx) {
		//todo
	}
}
//end