const { DEFAULT, Character } = require("./character.js");

describe("Given a subclassed Model", () => {
  it("is defined", () => {
    expect(Character).to.not.be.undefined;
  });

  let model;
  beforeEach(() => {
    model = new Character();
  });
  afterEach(() => {
    model = null;
  });

  describe("Given a new model", async () => {
    it("can set with data on construction", async () => {
      const model = new Models.Model({ "data" : "xyz" });
      const data = await model.get("data");
      expect(data).to.equal("xyz");
    });

    it("does not leak data to another model", async () => {
      await model.set({ "name": "Floopily Doo", "int": 10, "dex": 5, "specialty": 2 });
      const model2 = new Character({ "name": "The Dude", "int": 5, "char": 8 });
      const data1 = await model.toJSON();
      const data2 = await model2.toJSON();
      expect(data1).to.deep.equal({
        "name": "Floopily Doo",
        "hit": 20,
        "int": 10,
        "dex": 5,
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
        "specialty": 2,
        "createdBy": null,
        "updatedBy": null
      });
      expect(data2).to.deep.equal({
        "name": "The Dude",
        "hit": 20,
        "int": 5,
        "dex": 1,
        "tech": 1,
        "char": 8,
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
      });
      expect(data1).to.not.equal(data2);
      expect(model._attributes).to.not.equal(model2._attributes);
      expect(model._attributes).to.deep.equal(data1);
      expect(model2._attributes).to.deep.equal(data2);
    });
  });
});
