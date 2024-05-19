describe('Eliminar una orden de compra', () => {
    const order = {
      id: 3,
      petId: 1,
      quantity: 1,
      shipDate: '2024-05-17T17:52:41.000Z',
      status: 'placed',
      complete: true
    };
  
    before(() => {
      cy.createOrder(order).its('status').should('eq', 200);
    });
  
    it('Debería eliminar una orden de compra existente', () => {
      cy.deleteOrder(3).then((response) => {
        expect(response.status).to.eq(200);
        cy.request({
          method: 'GET',
          url: 'https://petstore.swagger.io/v2/store/order/3',
          failOnStatusCode: false
        }).then((getResponse) => {
          expect(getResponse.status).to.eq(404);
        });
      });
    });
  });
  