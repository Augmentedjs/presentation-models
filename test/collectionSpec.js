const data = [ { "Name": "Bob", "ID": 123, "Email": "bob@augmentedjs.org" },
             { "Name": "Jonathan", "ID": 234, "Email": "jonathon@augmentedjs.org" },
             { "Name": "Corey", "ID": 345, "Email": "corey@augmentedjs.org" },
             { "Name": "Seema", "ID": 456, "Email": "seema@augmentedjs.org" },
             { "Name": "Jasmine", "ID": 567, "Email": "jasmine@augmentedjs.org" }
            ];
const schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "User",
    "description": "A list of users",
    "type": "object",
    "properties": {
        "Name" : {
            "description": "Name of the user",
            "type" : "string"
        },
        "ID" : {
            "description": "The unique identifier for a user",
            "type" : "integer"
        },
        "Email" : {
            "description": "The email of the user",
            "type" : "string"
        }
    },
    "required": ["ID", "Name"]
};

describe('Given an Augmented Collection', () => {
  let c;
  beforeEach(() => {
    c = new Models.Collection();
  });
  afterEach(() => {
    c = null;
  });
  it('has an augmented Collection', () => {
    expect(Models.Collection).to.not.be.undefined;
  });

  it('can check if empty', () => {
    expect(c.isEmpty()).to.be.true;
  });

  it('can populate data', () => {
    c.add(data);
    expect(c.size()).to.equal(5);
  });
  it('can sort data by key', () => {
    c.add(data);
    c.sortByKey("Name");
    var first = c.at(1);
    expect(first.get("Name")).to.equal("Corey");
  });
  it('can validate', () => {
    c.schema = schema;
    c.add(data);
    c.validate();
    //console.debug(c.validationMessages);
    expect(c.isValid()).to.be.true;
  });
  it('validation returns messages on invalid data', () => {
    c.schema = schema;
    c.add({bubba: "junk"});
    c.validate();
    //console.debug(c.validationMessages);
    expect(c.isValid()).to.be.false;
  });
});

describe('Given an Augmented Collection Backed by Local Storage', () => {
  let c;

  beforeEach(() => {
    c = new Models.LocalStorageCollection();
  });

  afterEach(() => {
    c.destroy();
    c = null;
  });

  it('has an augmented local storage Collection', () => {
    expect(Models.LocalStorageCollection).to.not.be.undefined;
  });

  it('can populate data', () => {
    c.add(data);
    expect(c.size()).to.equal(5);
  });

  it('can save and fetch data', () => {
    c.add(data);
    c.save();

    c.fetch();
    expect(c.size()).to.equal(5);
  });
});

describe('Given a Collection needing pagination', () => {
  describe('Given a PaginationFactory', () => {
    let c;
    beforeEach(() => {

    });
    afterEach(() => {
      c = null;
    });
    it('has an augmented PaginationFactory', () => {
      expect(Models.PaginationFactory).to.not.be.undefined;
    });

    it('can get a "github" API PaginatedCollection', () => {
      c = Models.PaginationFactory.getPaginatedCollection(Models.PAGINATION_API_TYPE.GITHUB);
      expect(c instanceof Models.PaginatedCollection).to.be.true;
      expect(c.paginationConfiguration.currentPageParam).to.equal('page');
    });

    it('can get a "solr" API PaginatedCollection', () => {
      c = Models.PaginationFactory.getPaginatedCollection(Models.PAGINATION_API_TYPE.SOLR);
      expect(c instanceof Models.PaginatedCollection).to.be.true;
      expect(c.paginationConfiguration.currentPageParam).to.equal('start');
    });

    it('can get a "database" API PaginatedCollection', () => {
      c = Models.PaginationFactory.getPaginatedCollection(Models.PAGINATION_API_TYPE.DATABASE);
      expect(c instanceof Models.PaginatedCollection).to.be.true;
      expect(c.paginationConfiguration.currentPageParam).to.equal('offset');
    });

    it('will not get a "nothing" API PaginatedCollection', () => {
      c = Models.PaginationFactory.getPaginatedCollection("nothing");
      expect(c instanceof Models.PaginatedCollection).to.be.false;
    });
  });
/*
    describe('Given an Augmented Collection', () => {
        var c, defConfig = {
            currentPageParam: "p",
            pageSizeParam: "pp"
        };

        var testUrl = "/tests/1",
		testMethod = "GET",
		testText = "Hello World",
		testStatus = 200,
		testHeaders = {ContentType: "text/plain", User: "Mufasa"},
		mockedResponse = null;

        beforeEach(() => {
            c = new Augmented.PaginatedCollection();
		//Augmented.Service.MockService.at(testUrl)
		//					 .on(testMethod)
		//					 .respondWithText(testText)
		//					 .respondWithStatus(testStatus)
		//					 .respondWithHeaders(testHeaders)
		//					 .register();
        });

        afterEach(() => {
            c = null;
            //Augmented.Service.MockService.clear();
        });

        it('has an augmented PaginatedCollection', () => {
            expect(Augmented.PaginatedCollection).to.not.be.undefined;
        });

        it('can create an augmented PaginatedCollection', () => {
            expect(c instanceof Augmented.PaginatedCollection).to.be.true;
        });

        it('has a configuration object', () => {
            expect(c.paginationConfiguration).not.to.equal({});
        });

        it('can set a configuration object', () => {
            c.setPaginationConfiguration(defConfig);
            expect(c.paginationConfiguration).to.equal(defConfig);
        });

        it('can fetch', () => {
            c.url = "/tests/1";
            c.mock = true;
            var ret = c.fetch();
            expect(ret).to.not.be.undefined;
        });

    });
    */
});
