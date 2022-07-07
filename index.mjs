import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [contractotAccount, swapperAccount] =
await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Contractor and Swapper!');

console.log('Launching...');
const ctcContractor = contractotAccount.contract(backend);
const ctcSwapper = swapperAccount.contract(backend, ctcContractor.getInfo());

console.log('Starting backends...');

const common = {
    notify: (inputAmt, outputAmt) => {
        console.log(`You, put in ${stdlib.formatCurrency(inputAmt)} and recieved ${stdlib.formatCurrency(outputAmt)} from this swap`)
    }
}
const deadline = stdlib.connector === "CFX" ? 500 : 250;
try {
    await Promise.all([
        backend.Contractor(ctcContractor, {
            ...stdlib.hasRandom,
            ...common,
            swapperAddress: stdlib.formatAddress(swapperAccount),
            price: stdlib.parseCurrency(5),
            deadline,
            // implement Contractor's interact object here
        }),
        backend.Swapper(ctcSwapper, {
            ...common,
            Swap: () => {
                console.log(`Your address ${stdlib.formatAddress(swapperAccount)} is the authorized`)
                throw 42
            },
            ...stdlib.hasRandom,
            // implement Swapper's interact object here
        }),
    ]);
} catch (error) {
    if (error !== 42) throw error
}

console.log('Goodbye, Contractor and Swapper!');