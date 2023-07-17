describe('Facebook Test', () => {
    it('should display login page', () => {
        cy.visit('https://web.facebook.com/?_rdc=1&_rdr')
        cy.url().should('contain', 'rdc=1&_rd')
        // cy.get('#email').type('muhammadmuktaraliyu001@gmail.com')
        // cy.get('#pass').type('Shola1010')
       // cy.get('#u_0_5_5Z').should('be.visible')
    })

    it('should login the page', () => {
        cy.get('#email').type('muhammadmuktaraliyu001@gmail.com')
        cy.get('#pass').type('Shola1010')
        cy.get('div').should('be.visible')
        cy.get('form').should('be.visible')
    })

    it('should display forgotten password', () => {
        cy.get('button[value= "1"]').should('be.visible')
    })
})