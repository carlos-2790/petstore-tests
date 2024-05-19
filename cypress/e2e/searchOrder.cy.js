describe('Buscar la orden de compra creada', () => {
    const order = {
      id: 2,
      petId: 1,
      quantity: 1,
      shipDate: '2024-05-17T17:52:41.000Z',
      status: 'placed',
      complete: true
    };
  
    before(() => {
      cy.createOrder(order).its('status').should('eq', 200);
    });
  
    it('Debería buscar una orden de compra y verificar su existencia', () => {
      cy.getOrder(2).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 2);
      });
    });
  });
  