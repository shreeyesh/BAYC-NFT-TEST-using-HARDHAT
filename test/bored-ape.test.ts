// bored-ape.test.ts
import { expect } from "chai";
import { ethers } from "hardhat";
import { beforeEach } from "mocha";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Bored Ape", () => {
  let boredApeContract: Contract;
  let owner: SignerWithAddress;
  let address1: SignerWithAddress;

  beforeEach(async () => {
    const BoredApeFactory = await ethers.getContractFactory(
      "BoredApeYachtClub"
    );
    [owner, address1] = await ethers.getSigners();
    boredApeContract = await BoredApeFactory.deploy(
      "Bored Ape Yacht Club",
      "BAYC",
      10000,
      1
    );
  });

  it("Should initialize the Bored Ape contract", async () => {
    expect(await boredApeContract.MAX_APES()).to.equal(10000);
  });

  it("Should set the right owner", async () => {
    expect(await boredApeContract.owner()).to.equal(await owner.address);
  });
});