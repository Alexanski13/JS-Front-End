function storeAddressInfo(input) {
  const addressBook = {};

  for (const entry of input) {
    const [name, address] = entry.split(":");

    addressBook[name] = address.trim();
  }

  const sortedEntries = Object.entries(addressBook).sort(([nameA], [nameB]) =>
    nameA.localeCompare(nameB)
  );

  for (const [name, address] of sortedEntries) {
    console.log(`${name} -> ${address}`);
  }
}
