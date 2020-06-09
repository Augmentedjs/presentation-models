const SCHEMA = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "Character",
	"description": "Character",
	"type": "object",
	"properties": {
		"name": {
			"type": "string",
			"description": "Name",
			"minLength": 1
		},
		"hit": {
			"type": "integer",
			"description": "Hit Points",
			"minimum": 1,
			"maximum": 100
		},
		"int": {
			"type": "integer",
			"description": "Intelligence",
			"minimum": 0,
			"maximum": 10
		},
		"dex": {
			"type": "integer",
			"description": "Dexterity",
			"minimum": 0,
			"maximum": 10
		},
		"tech": {
			"type": "integer",
			"description": "Technology",
			"minimum": 0,
			"maximum": 10
		},
		"char": {
			"type": "integer",
			"description": "Charisma",
			"minimum": 0,
			"maximum": 10
		},
		"const": {
			"type": "integer",
			"description": "Constitution",
			"minimum": 0,
			"maximum": 10
		},
		"body": {
			"type": "integer",
			"description": "Body",
			"minimum": 0,
			"maximum": 10
		},
		"str": {
			"type": "integer",
			"description": "Strength",
			"minimum": 0,
			"maximum": 10
		},
		"wounded": {
			"type": "integer",
			"description": "Wounded",
			"minimum": 0,
			"maximum": 10
		},
		"death": {
			"type": "integer",
			"description": "Death Save",
			"minimum": 0,
			"maximum": 10
		},
		"headarmor": {
			"type": "integer",
			"description": "Head Armor",
			"minimum": 0
		},
		"bodyarmor": {
			"type": "integer",
			"description": "Body Armor",
			"minimum": 0
		},
		"ath": {
			"type": "integer",
			"description": "Athletics",
			"minimum": 0,
			"maximum": 10
		},
		"brawl": {
			"type": "integer",
			"description": "Brawl",
			"minimum": 0,
			"maximum": 10
		},
		"conc": {
			"type": "integer",
			"description": "Concentration",
			"minimum": 0,
			"maximum": 10
		},
		"edu": {
			"type": "integer",
			"description": "Education",
			"minimum": 0,
			"maximum": 10
		},
		"evade": {
			"type": "integer",
			"description": "Evasion",
			"minimum": 0,
			"maximum": 10
		},
		"inter": {
			"type": "integer",
			"description": "Interrogation",
			"minimum": 0,
			"maximum": 10
		},
		"expert": {
			"type": "integer",
			"description": "Local Expert",
			"minimum": 0,
			"maximum": 10
		},
		"mark": {
			"type": "integer",
			"description": "Marksmanship",
			"minimum": 0,
			"maximum": 10
		},
		"melee": {
			"type": "integer",
			"description": "Melee",
			"minimum": 0,
			"maximum": 10
		},
		"perc": {
			"type": "integer",
			"description": "Perception",
			"minimum": 0,
			"maximum": 10
		},
		"pers": {
			"type": "integer",
			"description": "Persuasion",
			"minimum": 0,
			"maximum": 10
		},
		"stealth": {
			"type": "integer",
			"description": "Stealth",
			"minimum": 0,
			"maximum": 10
		},
		"class": {
			"type": "integer",
			"description": "Class",
			"minimum": 0,
			"maximum": 10
		},
		"notes": {
			"type": "string",
			"description": "Notes"
		},
		"credit": {
			"type": "integer",
			"description": "Credit",
			"minimum": 0
		},
		"specialty": {
			"type": "string",
			"description": "Specialty",
			"minLength": 1
		}
	}
};

const DEFAULT = {
  "name": "",
  "hit": 20,
  "int": 1,
  "dex": 1,
  "tech": 1,
  "char": 1,
  "const": 1,
  "body": 10,
  "str": 1,
  "wounded": 15,
  "death": 10,
  "headarmor": 0,
  "bodyarmor": 1,
  "ath": 1,
  "brawl": 1,
  "conc": 1,
  "edu": 1,
  "evade": 1,
  "inter": 1,
  "expert": 1,
  "mark": 1,
  "melee": 1,
  "perc": 1,
  "pers": 1,
  "stealth": 1,
  "class": 0,
  "notes": "",
  "credit": 0,
  "portrait": null,
  "weapons": [],
  "aug": [],
  "inven": [],
  "modify": [],
  "specialty": 0,
  "createdBy": null,
  "updatedBy": null
};

class Character extends Models.Model {
  constructor(data = {}, options = {}) {
    options.schema = SCHEMA;
    if(!options.uri) {
      options.uri = `/characters${(data.name) ? "/" + data.name : ""}`;
    }
		const copy = Object.create(DEFAULT);
    for (const key in copy) {
      if (data[key]) {
        copy[key] = data[key];
      }
    }
    super(copy, options);
  };

  static get URI() {
    return "/characters";
  };

  save(options) {
    this.uri = "/characters";
    return super.save(options);
  };

  fetch(options) {
    const name = this.get("name");
    this.uri = `/characters${(name) ? "/" + name : ""}`;
    return super.fetch(options);
  };

  /**
   * Update the model
   * @param {object} options Any options to pass
   */
  update(options) {
    const name = this.get("name");
    this.uri = `/characters${(name) ? "/" + name : ""}`;
    return super.update(options);
  };
  /**
   * Destroy the model
   * @param {object} options Any options to pass
   */
  destroy(options) {
    const name = this.get("name");
    this.uri = `/characters${(name) ? "/" + name : ""}`;
    return super.destroy(options);
  };
};

module.exports = { DEFAULT, Character };
