function getInfo() {
  const busStopID = document.querySelector("#stopId").value;
  const list = document.querySelector("ul");
  const stopName = document.querySelector("#stopName");

  list.innerHTML = "";

  fetch(getBusStopURL(busStopID))
    .then((res) => res.json())
    .then((busStop) => {
      stopName.textContent = busStop.name;

      Object.entries(busStop.buses).map(([busNumber, timeInMinutes]) => {
        const item = document.createElement("li");
        item.textContent = `Bus ${busNumber} arrives in ${timeInMinutes} minutes`;

        list.appendChild(item);
      });
    })
    .catch(() => {
      stopName.textContent = "Error";
    });

  function getBusStopURL(ID) {
    return `http://localhost:3030/jsonstore/bus/businfo/${ID}`;
  }
}
