const R = require('ramda')

const item_list = [
    {id: 'carte', value: 4, weight: 1},
    {id: 'clavier', value: 44, weight: 1},
    {id: 'souris', value: 41, weight: 1},
    {id: 'écran', value: 17, weight: 1},
    {id: 'bureau', value: 65, weight: 1},
    {id: 'chaise', value: 84, weight: 1},
    {id: 'tour', value: 16, weight: 1},
    {id: 'bouton', value: 27, weight: 1},
    {id: 'manette', value: 39, weight: 1},
    {id: 'internet', value: 66, weight: 1},
];
//// JAI FAIT CHANGEMENT

// Ma version
const getRandomElement = (arr, number) => arr.sort(() => 0.5 - Math.random()).slice(0,number);

const G0 = getRandomElement(item_list,5);

console.log("Génération 0 :",G0)


// Version du prof avec ramda de merde la

const consolePrettyList = R.tap(
    R.pipe(R.pluck('id'), R.join(', '),console.log)
);
const initGen = (list) => {
    R.pipe(
        R.flip(R.repeat)(5),
        R.map(R.sort(() => Math.random() - 0.5)),
        R.map(consolePrettyList)
    )(list);
};

initGen(item_list)

const cloneGen = () => {};

const getOneAtRandom = () => candidates[Math.random() * 100 % candidates.length];
const mute1 = R.when(() => Math.random() - 0.95 > 0, getOneAtRandom());
const mute2 = () => {};
const fixPop = () => {};
const scoreOne = R.pipe(R.slice(0, 5), R.pluck('value'),)
const scorePop = R.pipe(R.map(scoreOne), R.sum);

const pip0 = initGen(candidates);
const y = cloneGen(x)

y[2] = 'azeczaeqzceqc'

console.log(x);
console.log(y);