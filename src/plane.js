//
import { theGame } from './main.js';
import { Entity, AnimationSprite, ParticulesGenerator } from '../lib/ezLib.js';
//
export class Plane extends Entity {
	//static
	static STATE_LIVE = 'LIVE';
	static STATE_TOUCHED = 'TOUCHED';
	static STATE_INVINCIBLE = 'INVINCIBLE';
	//
	static GRAVITY = 5;
	static JUMP_MODULE = -3;
	//
	constructor(screenWidth, screenHeight, xini = 0, yini = 0) {
		super(xini, yini, theGame.getAssetManager().getImage('plane'));

		this.screenWidth = screenWidth;
		this.screenHeight = screenHeight;

		this.setState(Plane.STATE_LIVE);

		this.inflateRectBounds(4, 4);
	}
	//
	reset() {
		//todo
	}
	//
	stop() {
		//todo
	}
	//
	jump() {
		//todo
	}
	//
	limites() {
		//todo
	}
	//
	touched() {
		//todo
	}
	//
	update(dt) {
		super.update(dt);
		//
		const dy = this.getVelocityY() + Plane.GRAVITY * dt;
		const yp = this.getPositionY() + dy;
		//
		this.setVelocityXY(0, dy);
		this.setPositionY(yp);
		//
		this.limites();
	}
	//
	render(ctx) {
		const st = this.getState();
		//
		super.render(ctx);
		//super.renderRectBoundsDebug(ctx);
	}
}
//end class

