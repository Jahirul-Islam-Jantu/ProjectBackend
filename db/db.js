const Ticket = require("../models/ticket");
class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   * create and sava a new ticket
   * @param {string} username
   * @param {number} price
   * @returns {Ticket} return a ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }
  /**
   * create multiple ticket for a single user
   * @param {string} username
   * @param {number} price
   * @param {number} quantity 3
   * @returns {Array<Ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }
  //find ticket
  find() {
    return this.tickets;
  }
  /**
   *
   * @param {string} ticketId
   */
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       *
       * @param {Ticket} ticket
       * @returns {Ticket}
       */
      (ticket) => ticket.id === ticketId
    );
    return ticket;
  }
  /**
   *
   * @param {string} username
   */
  findByUsername(username) {
    const tickets = this.tickets.filter(
      (ticket) => ticket.username === username
    );
    return tickets;
  }
  /**
   *
   * @param {string} ticketId
   * @param {username:string, price: mumber} ticketBody
   * @returns {Ticket}
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.updatedAt = new Date();

    return ticket;
  }
  /**
   *
   * @param {string} ticketId
   */
  deleteTicket(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);
    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
  /**
   *
   * @param {number} winnerCount
   * @returns {Array<Ticket>}
   */
  draw(winnerCount) {
    let indexes = new Array(winnerCount);
    for (let i = 0; i < indexes.length; i++) {
      let index = Math.floor(Math.random() * this.tickets.length);
      while (indexes.includes(index)) {
        index = Math.floor(Math.random() * this.tickets.length);
      }
      indexes.push(index);
    }

    console.log("indexes", indexes);
    const winners = indexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDB();
module.exports = myDB;
