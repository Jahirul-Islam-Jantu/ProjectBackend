# Lottery API

- Sell lottery ticket
- update lottery ticket
- delete lottery ticket
- get all tickets
- get tickets by id
- bulk buy (user can buy multiple ticket at a time)
- raffle draw

# Ticket:

- number (unique)
- username
- price
- timestamp

# Routes:

- /Tickets/t/:ticketId GET find single ticket
- /Tickets/t/:ticketId PATCH update ticket by id
- /Tickets/t/:ticketId delete ticket by id
- /Tickets/u/:username GET find tickets for a given user
- /Tickets/u/:username PATCH update ticket for a given user
- /Tickets/u/:username delete ticket for a given user
- /Tickets/sell -create tickets
- /Tickets/bulk -bulk sell tickets
- /Tickets/draw
- /Tickets - find all tickets
