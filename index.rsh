'reach 0.1';
const common = {
    notify: Fun([UInt, UInt], Null)
}

export const main = Reach.App(() => {
    const C = Participant('Contractor', {
        swapperAddress: Address,
        price: UInt,
        deadline: UInt,
        ...common
        // Specify Alice's interact interface here
    });
    const S = Participant("Swapper", {
        Swap: Fun([Bool], Null),
        ...common
    })
    init();
    // The first one to publish deploys the contract

    C.only(() => {
        const address = declassify(interact.swapperAddress);
        const Price = declassify(interact.price);
        check(Price >= 1, "Price must be greater than 1 Algo")
        const deadlineTime = (declassify(interact.deadline))
    })
    C.publish(Price, address, deadlineTime).pay(Price)

    const allowedAddress = new Set()
    allowedAddress.insert(address)

    commit()


    S.only(() => {
        check(allowedAddress.member(this), "You are not a The main address");
        const SwapPrice = Price * 2
    })
    S.pay(SwapPrice).publish(SwapPrice)

    transfer(Price).to(S)
    transfer(SwapPrice).to(C)

    // each([S, C], () => interact.notify(true));
    S.interact.notify(Price, SwapPrice)
    C.interact.notify(SwapPrice, Price)

    commit();
    const deadline = relativeTime(deadlineTime);
    C.publish()
    transfer(balance()).to(C)
    commit()
        // The second one to publish always attaches
        // const [shouldContinue, amount] = parallelReduce([true, Price])
        //     .invariant(balance() == amount)
        //     .while(shouldContinue)
        //     .api(S.acceptSwap,
        //         () => {
        //             check(this === address, "You are unable to call the contract")
        //         },
        //         () => Price,
        //         (k) => {
        //             k(true);
        //             transfer(Price).to(this)
        //             transfer(Price).to(C)
        //             return [false, amount - Price - Price]
        //         }
        //     )
        //     .timeout(deadline, () => {
        //         const [
        //             [], k
        //         ] = call(S.notify);
        //         k(true);
        //         transfer(balance()).to(C)
        //         return [false, 0]
        //     });
        // transfer(balance()).to(C)
        // commit();
        // write your program here
    exit();
});