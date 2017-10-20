console.log('utils.js is running');

export const square = (a) => {
    return a * a;
};

export const add = (a,b) => a + b;

const subtract = (a, b) => a - b;

export default subtract;

// export default (a, b) => a - b; // another example without func name

//export { square, add, subtract as default };

// exports - default export and named exports
