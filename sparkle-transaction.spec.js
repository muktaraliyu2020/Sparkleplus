describe('Transaction Test', () => {
    before(function() {
        cy.visit('https://virtualaccounts.uat.sparkle.ng/login')
        cy.get('#email').type('Bull@sharklasers.com')
            cy.get('#password').type('Shola1010')
            cy.get('button[type="submit"]').click()
    })

    it('should display transaction page', () => {
        cy.get('#transactions').click()
         cy.url().should('contain', 'transactions')
        cy.get('div').should('be.visible')
        cy.get('span').should('be.visible')
        // cy.get('div[class="col-lg-3 ml-5"]').should('be.visible')
    })
})