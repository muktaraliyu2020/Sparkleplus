describe('Transfer Test', () => {
    before(function() {
        cy.visit('https://virtualaccounts.uat.sparkle.ng/login')
        cy.get('#email').type('Bull@sharklasers.com')
            cy.get('#password').type('Shola1010')
            cy.get('button[type="submit"]').click()
    })

    it('should display transfer page', () => {
        cy.get('#transfers').click()
        cy.url().should('contain', 'transfers')
        cy.get('div').should('be.visible')
    })

    it('should make a transfer', () => {
        cy.get('.btn btn-block sparkle--button__green').click()
    })
})