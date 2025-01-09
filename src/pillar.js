//
import { Entity } from '../lib/ezLib.js';
import { theGame } from './main.js';
//
export class Pillar extends Entity {
	//
	static PILLAR_TYPE_UP = 'UP';
	static PILLAR_TYPE_DOWN = 'DOWN';
	//
	static PILLAR_STATE_IDLE = 'IDLE';
	static PILLAR_STATE_MOVING = 'MOVING';
	//
	constructor(screenWidth, screenHeight, type) {
		//
		super(0, 0, theGame.getAssetManager().getImage('pillarup'));

		if (type === Pillar.PILLAR_TYPE_DOWN) {
			this.setImage(theGame.getAssetManager().getImage('pillardown'));
			this.setBottom(screenHeight);
		}
		//
		this.screenWidth = screenWidth;
		this.screenHeight = screenHeight;
		//
		this.inflateRectBounds(30, 20);
		//
		this.reset();
	}

	//
	move(speed) {
		//todo
	}
	//
	reset() {
		//todo
	}
	//
	update(dt) {
		super.update(dt);
	}
	//
	render(ctx) {
		super.render(ctx);
		//super.renderRectBoundsDebug(ctx);
	}
}
//end

