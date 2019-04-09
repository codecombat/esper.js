'use strict';
var expect = require('chai').expect;
var esper = require('../../../src/index.js');
var Engine = esper.Engine;

describe('Babylon', () => {
	if ( !esper.pluginList['babylon'] || esper.pluginList['babylon'] == 'opt-in'  ) {
		it('Plugin: babylon [disabled]', function() {});
		return;
	}

	it('should support class properties', () => {
		var engine = new Engine({strict: true});
		engine.evalSync(`
class Clazz {
	static x = 10
	fn() { return this.x }
}
this.result = Clazz.x;
		`);
		var result = engine.globalScope.get('result');
		expect(result.jsTypeName).to.equal("number");
	});

	it('should parse some nonsense', () => {
		var engine = new Engine({strict: true});
		var code = `

var mobs = {};
mobs.Magical = class Magical {
	constructor() {
		console.log(1)
	}
}

@Namespace(mobs.strange)
@ClientVars(name=rob, age=29)
class Demogorgon extends mobs.Magical {

	name:string = "The Demogorgon";
	health:int = 20;
	alive:bool = true;
	owner = undefined;

	constructor() {
		super()
		console.log(2)
	}

	@Verb(source=user, hidden=false)
	attack(who:obj.weapon) {
		this.health -= who.damage(this)


		if ( this.health <= 0 ) {
			this.health = 0;
			this.alive = false;
			this.say("I have died!");
		} else this.say("Ouch health now " + this.health);

	}

	say(what:string) {
		log(\`The \${this.name} says \${what}\`);
	}
}

@Namespace(obj)
class Weapon {
	attack:int = 7;
	damage(to) { return this.attack; }
}

@Enhance @Namespace(mobs.strange) class Demogorgon {
	say(what:string) {
		if ( this.alive ) return next(what);
		else log("If not dead, the " + this.name + " would have said: " + what);
	}
}

this.result=[new Demogorgon().say('wat')];
		`;
		engine.evalSync(code);
		var result = engine.globalScope.get('result');
		console.log(result)
	});
})
