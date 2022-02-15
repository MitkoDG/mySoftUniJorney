function ticketSorter(tickets, sorting) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price; // you can parse to Number here or on a later stage
      this.status = status;
    }
  }
  let result = [];
  tickets.map((el) => {
    let [destination, price, status] = el.split("|");
    price = Number(price);
    result.push(new Ticket(destination, price, status));
  });
  return result.sort((a, b) => {
    console.log(a[sorting]);
    if (typeof a[sorting] === "number") {
      return a[sorting] - b[sorting];
    } else {
      return a[sorting].localeCompare(b[sorting]);
    }
  });
}
ticketSorter(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
ticketSorter(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);
