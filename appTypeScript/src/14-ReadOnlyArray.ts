const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// Solo deja hacer operaciones que no muten el array

// numbers.push(6);
// numbers.unshift(0);
// numbers.pop();
numbers.map((n) => n * 2);
