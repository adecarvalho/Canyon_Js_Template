
import { theGame } from './main.js';
import { Entity } from '../lib/ezLib.js';
//
export class Rock extends Entity {
    //
    static ROCK_TYPE_UP = "UP";
    static ROCK_TYPE_DOWN = "DOWN";

    constructor(screenWidth, screenHeight, type) {
        //
        super(0, 0, theGame.getAssetManager().getImage("rockup"));

        if (type === Rock.ROCK_TYPE_DOWN) {
            this.setImage(theGame.getAssetManager().getImage("rockdown"));
            this.setBottom(screenHeight);
        }
        //
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.inflateRectBounds(0, 8);
    }
    //
    update(dt) {
        super.update(dt);
    }
    //
    render(ctx) {
        super.render(ctx);
        //
        //super.renderRectBoundsDebug(ctx);
    }
}
//end