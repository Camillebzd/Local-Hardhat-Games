async function winGame1() {
    const gameAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const contractName = "Game1";
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const tx = await game.win();

    const receipt = await tx.wait();
    const result = receipt.events[0].event;
    console.log("Game1: I'm a ", result !== undefined ? result : "Looser");
}

async function winGame2() {
    const gameAddr = "0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f";
    const contractName = "Game2";
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    await game.setX(49);
    await game.setY(1);

    const tx = await game.win();

    const receipt = await tx.wait();
    const result = receipt.events[0].event;
    console.log("Game2: I'm a ", result !== undefined ? result : "Looser");
}

async function winGame3() {
    const gameAddr = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
    const contractName = "Game3";
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const tx = await game.win(45);

    const receipt = await tx.wait();
    const result = receipt.events[0].event;
    console.log("Game3: I'm a ", result !== undefined ? result : "Looser");
}

async function winGame4() {
    const gameAddr = "0x9d4454B023096f34B160D6B654540c56A1F81688";
    const contractName = "Game4";
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const tx = await game.win(56);

    const receipt = await tx.wait();
    const result = receipt.events[0].event;
    console.log("Game4: I'm a ", result !== undefined ? result : "Looser");
}

async function winGame5() {
    const gameAddr = "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318";
    const contractName = "Game5";
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const amount = 10000;
    await game.giveMeAllowance(amount);
    await game.mint(amount);
    const tx = await game.win();

    const receipt = await tx.wait();
    const result = receipt.events[0].event;
    console.log("Game5: I'm a ", result !== undefined ? result : "Looser");
}

async function main() {
    await winGame1();
    await winGame2();
    await winGame3();
    await winGame4();
    await winGame5();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
