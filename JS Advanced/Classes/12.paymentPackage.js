describe('Proper class creation tests', () => {
    let package = null;

    beforeEach(() => {
        package = new PaymentPackage('John', 50);
    });

    it('Creates a class instance of PaymentPackage', () => {
        expect(package instanceof PaymentPackage).to.be.true;
    });

    it('Successfully creates a name', () => {
        expect(package.name).to.equal('John');
    });

    it('Changes name successfully', () => {
        expect(package.name = 'Peter').to.equal('Peter');
    });

    it('Successfully creates a value', () => {
        expect(package.value).to.equal(50);
    });

    it('Changes value successfully', () => {
        expect(package.value = 1).to.equal(1);
    });

    it('Successfully creates VAT', () => {
        expect(package.VAT).to.equal(20);
    });

    it('Successfully creates active status', () => {
        expect(package.active).to.be.true;
    });

    it('Works with float', () => {
        expect(() => {
            package.value = 0.5
        }).to.not.throw();
    });

    it('Can be set to 0', () => {
        expect(() => {
            package.value = 0;
        }).to.not.throw();
    });
});

describe('Errors when initializing the class', () => {
    it('Throws an error when arguments aren\'t passed', () => {
        expect(() => {
            new PaymentPackage()
        }).to.throw();
    });

    it('Throws an error when name isn\t a string', () => {
        expect(() => {
            new PaymentPackage(0, 0)
        }).to.throw();

        expect(() => {
            new PaymentPackage({}, 0)
        }).to.throw();

        expect(() => {
            new PaymentPackage([], 0)
        }).to.throw();
    });

    it('Throws an error when an empty string name is passed', () => {
        expect(() => {
            new PaymentPackage('', 0)
        }).to.throw();
    });

    it('Throws an error when value isn\'t a number', () => {
        expect(() => {
            new PaymentPackage('John', 'one');
        }).to.throw();

        expect(() => {
            new PaymentPackage('John', []);
        }).to.throw();

        expect(() => {
            new PaymentPackage('John', {});
        }).to.throw();

        expect(() => {
            new PaymentPackage('John', true);
        }).to.throw();
    });

    it('Throws an error when value < 0', () => {
        expect(() => {
            new PaymentPackage('John', -1);
        }).to.throw();
    });
});

describe('VAT property tests', () => {
    let package = null;

    beforeEach(() => {
        package = new PaymentPackage('John', 0);
    });

    it('Changes VAT successfully', () => {
        it('Throws an error when VAT is set to a non-number', () => {
            expect(package.VAT = 0).to.equal(0);
        });
    });

    it('Throws an error when VAT is set to a non-number', () => {
        expect(() => {
            package.VAT = 'zero'; 
        }).to.throw();
    });

    it('Throws an error when VAT is set to a negative number', () => {
        expect(() => {
            package.VAT = -1; 
        }).to.throw();
    });
});

describe('Changing active status', () => {
    let package = null;

    beforeEach(() => {
        package = new PaymentPackage('John', 0);
    });

    it('Changes status successfully', () => {
        expect(package.active = false).to.be.false;
    });

    it('Throw an error when changing status to non-boolean', () => {
        expect(() => {
            package.active = 'true'
        }).to.throw();
    });
});

describe('toString method', () => {
    let package = null;

    beforeEach(() => {
        package = new PaymentPackage('John', 50);
    });

    it('Has a method called toString', () => {
        expect(typeof package.toString).to.equal('function');
    });

    it('Returns a string', () => {
        expect(typeof package.toString()).to.equal('string');
    });

    it('Returns correct value', () => {
        expect(package.toString()).to.equal('Package: John\n- Value (excl. VAT): 50\n- Value (VAT 20%): 60');
    });

    it('Returns correct value with inactive status', () => {
        package.active = false;
        expect(package.toString()).to.equal('Package: John (inactive)\n- Value (excl. VAT): 50\n- Value (VAT 20%): 60');
    });
});