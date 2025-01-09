//
import { getRandomInteger } from '../lib/ezLib.js';
import { Pillar } from './pillar.js';
import { Plane } from './plane.js';
//
export class PillarManager {
	//
	static TYPE_MOVING_UP = 1;
	static TYPE_MOVING_DOWN = 2;
	static TYPE_MOVING_NONE = 0;

	constructor(screenWidth, screenHeight) {
		//
		this.pillarUp = new Pillar(screenWidth, screenHeight, Pillar.PILLAR_TYPE_UP);
		this.pillarDown = new Pillar(screenWidth, screenHeight, Pillar.PILLAR_TYPE_DOWN);
		this.speed = 400;
		this.typeMovingPillar = PillarManager.TYPE_MOVING_NONE;
		this.newWave();
	}
	//
	isWinPoints() {
		switch (this.typeMovingPillar) {
			case PillarManager.TYPE_MOVING_DOWN:
				if (this.pillarDown.getRight() <= 0) {
					this.pillarDown.reset();
					return true;
				}
				break;
			//
			case PillarManager.TYPE_MOVING_UP:
				if (this.pillarUp.getRight() <= 0) {
					this.pillarUp.reset();
					return true;
				}
				break;
			//
			case PillarManager.TYPE_MOVING_NONE:
				return false;
			//
			default:
				break;
		}
		return false;
	}
	//
	newWave() {
		if (this.pillarUp.getState() == Pillar.PILLAR_STATE_IDLE && this.pillarDown.getState() == Pillar.PILLAR_STATE_IDLE) {
			this.winPoint = false;

			const val = getRandomInteger(0, 100);
			//todo
		}
	}
	//
	reset() {
		this.pillarDown.reset();
		this.pillarUp.reset();
	}
	//
	isCollidePlane(plane) {
		if (plane.getState() !== Plane.STATE_LIVE) {
			return false;
		}
		//
		if (this.pillarUp.collidesWithRectBounds(plane) || this.pillarDown.collidesWithRectBounds(plane)) {
			return true;
		}
		return false;
	}
	//
	update(dt) {
		this.pillarDown.update(dt);
		this.pillarUp.update(dt);
	}
	//
	render(ctx) {
		this.pillarUp.render(ctx);
		this.pillarDown.render(ctx);
	}
}
//end

