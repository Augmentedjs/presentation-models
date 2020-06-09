describe("Given an Abstract Model", () => {
  it("is defined", () => {
    expect(Models.Model).to.not.be.undefined;
  });

  let model;
  beforeEach(() => {
    model = new Models.Model();
  });
  afterEach(() => {
    model = null;
  });

  it("can check if empty", () => {
    expect(model.isEmpty()).to.be.true;
  });

  it("without Cross Origin Support will not make Cross Origin requests", () => {
    model.crossOrigin = false;
    expect(model.crossOrigin).to.be.false;
  });

  it("with Cross Origin Support will make Cross Origin requests", () => {
    model.crossOrigin = true;
    expect(model.crossOrigin).to.be.true;
  });

  it("can reset with data", () => {
    model.set({ "y": "y" });
    model.reset({ "x": "x" });

    expect(model.get("x")).to.equal("x");
    expect(model.get("y")).to.be.undefined;
  });

  it("can set with data", () => {
    model.set({ "x": "x" });
    expect(model.get("x")).to.equal("x");
  });

  describe("Given validation", () => {
	  beforeEach(() => {
	    model = new Models.Model();
	  });
	  afterEach(() => {
	    model = null;
	  });

		it("with no Schema does not support Validation", () => {
			expect(model.supportsValidation()).to.be.false;
		});

		it("with an empty Schema does support Validation", () => {
			model.schema = {};
			expect(model.supportsValidation()).to.be.true;
		});
	});

  describe("Given a new model", async () => {
    it("can set with data on construction", async () => {
      const model = new Models.Model( { "data" : "xyz" });
      const data = await model.get("data");
      expect(data).to.equal("xyz");
    });

    it("does not leak data to another model", async () => {
      await model.set({ "data": "123", "x": "x", "y": 2 });
      const model2 = new Models.Model({ "data" : "xyz", "x": "y" });
      const data1 = await model.toJSON();
      const data2 = await model2.toJSON();
      expect(data1).to.deep.equal({ "data": "123", "x": "x", "y": 2 });
      expect(data2).to.deep.equal({ "data" : "xyz", "x": "y" });
      expect(data1).to.not.equal(data2);
      expect(model._attributes).to.not.equal(model2._attributes);
      expect(model._attributes).to.deep.equal(data1);
      expect(model2._attributes).to.deep.equal(data2);
    });

    it("does not leak data to another model on contruction", async () => {
      model = new Models.Model({ "data": "123", "x": "x", "y": 2 });
      const model2 = new Models.Model({ "data" : "xyz", "x": "y" });
      const data1 = await model.toJSON();
      const data2 = await model2.toJSON();
      expect(data1).to.deep.equal({ "data": "123", "x": "x", "y": 2 });
      expect(data2).to.deep.equal({ "data" : "xyz", "x": "y" });
      expect(data1).to.not.equal(data2);
      expect(model._attributes).to.not.equal(model2._attributes);
      expect(model._attributes).to.deep.equal(data1);
      expect(model2._attributes).to.deep.equal(data2);
    });
  });
});
