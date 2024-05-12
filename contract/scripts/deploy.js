const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;
  const lockedAmount = hre.ethers.utils.parseEther("0.001");


  // Pass deployer's address as constructor argument
  const ToDo = await hre.ethers.deployContract("ToDo")

  await ToDo.deployed();
  console.log(
    `ToDo contract with ${hre.ethers.utils.formatEther(
      lockedAmount
    )} ETH and timestamp ${unlockTime} is deployed to ${ToDo.address}`
  );

  console.log("verification process...");

  await run("verify:verify", {
    address: ToDo.address,
    contract: "contracts/ToDo.sol:ToDo",
    constructorArguments: [], // Pass deployer's address here as well
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
