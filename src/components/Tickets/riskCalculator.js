export const calculateRisk = (allTickets, allComments, thisTicket, tickets) => {
  let fraudRisk = 0;

  // if the ticket is the only ticket of the author, add 10%
  const authorTickets = allTickets.filter(
    ticket => ticket.author === thisTicket.author
  ).length;

  //calculate time of creation
  const timeOfCreation = thisTicket.createdAt;
  const hourOfCreation = parseInt(timeOfCreation.slice(11, 13));
  const commentsNumber = allComments.filter(
    comment => comment.author !== thisTicket.author
  ).length;

  // if a ticket is X% cheaper than the average price, add X% to the risk
  const ticketsPrices = tickets.map(ticket => parseInt(ticket.price));
  const ticketsAveragePrice = ticketsPrices.reduce((total, price) => {
    return (total += price / ticketsPrices.length);
  }, 0);

  //calculate difference
  let percentageDifference =
    100 * (Number(thisTicket.price) / ticketsAveragePrice);

  if (percentageDifference < 100) {
    //cheaper
    fraudRisk += 100 - percentageDifference;
  } else {
    // _ if a ticket is X% more expensive than the average price, deduct X% from the risk, with a maximum of 10% deduction
    if (percentageDifference > 110) {
      //difference greater than 10%, then set the limit to 10%
      percentageDifference = 110;
    }
    fraudRisk -= 100 - percentageDifference;
  }

  // if the ticket is the only ticket of the author, add 10%
  if (authorTickets === 1) {
    fraudRisk += 10;
  }

  //if the ticket was added during business hours (9-17), deduct 10% from the risk, if not, add 10% to the risk
  if (hourOfCreation >= 9 && hourOfCreation <= 17) {
    // 9 <= hourOfCreation <= 17
    fraudRisk -= 10; //fraudRisk = fraudRisk - 10
  } else {
    fraudRisk += 10;
  }

  //if there are >3 comments on the ticket, add 5% to the risk
  if (commentsNumber > 3) {
    fraudRisk += 5;
  }

  // The minimal risk is 5% (there's no such thing as no risk) and the maximum risk is 95%.
  //final result
  //fraudRisk = 4
  // max(5, 4) = 5
  // min(5, 95) = 5

  //fraudRisk = 98
  // max(5,98) = 98
  // min(98, 95) = 95

  //fraudRisk = 50
  // max(5,50) = 50
  // min(50,95) = 50
  let checkMin = Math.max(5, fraudRisk);
  let finalRisk = Math.min(checkMin, 95);

  return finalRisk;
};
