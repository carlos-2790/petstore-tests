describe('Verificar el inventario de ventas', () => {
    it('Debería obtener el inventario de ventas', () => {
      cy.request('GET', 'https://petstore.swagger.io/v2/store/inventory')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('sold');
        });
    });
  });
  