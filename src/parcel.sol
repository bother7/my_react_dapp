pragma solidity ^0.4.19;

contract ParcelFactory {

  event newParcel(uint parcelId, string name, uint dna);

  mapping (uint => address) public parcelOwner;
  mapping (uint => string) public region;

  Parcel[] public parcels;

  struct Parcel {
    string name;
    uint dna;
  }

  function _createParcel(uint _dna, string _name) internal {
    uint id = parcels.push(Parcel(_name, _dna)) - 1;
    parcelOwner[id] = msg.sender;
    newParcel(id, _name, _dna);
  }

}
