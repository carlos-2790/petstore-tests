describe('Consultar una orden de compra', () => {
    const order = {
      id: 1,
      petId: 1,
      quantity: 1,
      shipDate: '2024-05-17T17:52:41.000Z',
      status: 'placed',
      complete: true
    };
  
    before(() => {
      cy.createOrder(order).its('status').should('eq', 200);
    });
  
    it('Debería obtener los detalles de una orden existente', () => {
      cy.getOrder(1).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
      });
    });
  });
  