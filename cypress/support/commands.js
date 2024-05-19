Cypress.Commands.add('createOrder', (order) => {
    return cy.request('POST', 'https://petstore.swagger.io/v2/store/order', order);
  });
  
  Cypress.Commands.add('getOrder', (orderId) => {
    return cy.request('GET', `https://petstore.swagger.io/v2/store/order/${orderId}`);
  });
  
  Cypress.Commands.add('deleteOrder', (orderId) => {
    return cy.request('DELETE', `https://petstore.swagger.io/v2/store/order/${orderId}`);
  });
  