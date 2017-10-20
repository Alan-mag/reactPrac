// person.js
// named export isAdult

const isAdult = (age) => {
    return (age >= 18) ? "They are an adult." : "They are not an adult.";
};

const canDrink = (age) => {
    return (age >= 21) ? "They can drink." : "They cannot drink.";
};

const isSeniorCitizen = (age) => { // note name difference from app.js
    return (age >= 65) ? "They are a senior." : "They are not a senior.";
};

export { isAdult, canDrink , isSeniorCitizen as default };