///<reference path="../../../../typings/globals/jasmine/index.d.ts" />
import { Calculator } from './calculator';
describe('calculator test', () => {
    let sut: Calculator;
    beforeEach(() => {
        sut = new Calculator();

    });

    it('test add 1 + 1', () => {
        expect(sut.Add(1,1)).toBe(2);
    })

    it('test add 1 + 2', () => {
        expect(sut.Add(1,2)).toBe(1);
    })
})