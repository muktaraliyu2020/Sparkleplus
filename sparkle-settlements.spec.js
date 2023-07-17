describe('Settlement Test', () => {
    before(function() {
        cy.visit('https://virtualaccounts.uat.sparkle.ng/login')
        cy.get('#email').type('Bull@sharklasers.com')
            cy.get('#password').type('Shola1010')
            cy.get('button[type="submit"]').click()
    })

    it('should display settlement page', () => {
        cy.get('#settlements').click()
        cy.get('div').should('be.visible')
    })
    it('should display page title', () => {
        cy.get('h1').should('be.visible')
    })
})