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

  xit("with mock can return something", () => {
    model.mock = true;
    model.url = "/info";
    model.fetch({"success": () => { model.set("x", "x") }});
    expect(model.get("x")).to.equal("x");
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
});
