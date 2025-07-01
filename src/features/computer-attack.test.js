import { generateRandomCoords } from "./computer-attack"

describe("Generate random coords", () => {
    test("coords return array with 2 indices", () => {
        expect(generateRandomCoords()).toHaveLength(2)
    })

    test("coords are lower than 10", () => {
        expect(generateRandomCoords()[0]).toBeLessThan(10);
        expect(generateRandomCoords()[1]).toBeLessThan(10);
    })
    
    test("coords are not negative", () => {
        expect(generateRandomCoords()[0]).toBeGreaterThan(-1);
        expect(generateRandomCoords()[1]).toBeGreaterThan(-1);
    })

    test("coords are whole integers", () => {
        let coords = generateRandomCoords();
        expect(Number.isInteger(coords[0])).toBe(true);
        expect(Number.isInteger(coords[1])).toBe(true);
    })

    test("coords are different each time function is called", () => {
        let results = new Set();
        for(let i = 0; i < 100; i++) {
            results.add(JSON.stringify(generateRandomCoords()));
        }
        expect(results.size).toBeGreaterThan(1)
    })
    
    test("coords generated are sufficienty varied", () => {
        let results = new Set();
        const iterations = 100;

        for(let i = 0; i < iterations; i++) {
            results.add(JSON.stringify(generateRandomCoords()));
        }

        const uniquenessRatio = results.size / iterations;

        //50% is acceptable
        expect(uniquenessRatio).toBeGreaterThan(0.5)
    }) 

})