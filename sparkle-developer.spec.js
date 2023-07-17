describe('Developer Tests', () => {
    before(function() {
        cy.visit('https://virtualaccounts.uat.sparkle.ng/login')
        cy.get('#email').type('Bull@sharklasers.com')
            cy.get('#password').type('Shola1010')
            cy.get('button[type="submit"]').click()
    })

    it('should desplay developer page', () => {
        cy.get('#developer').click()
        cy.url().should('contain', 'developer')
        // cy.get('.text-right').should('be.visible')
    })

    it('should display copy button', () => {
        cy.get('div[class= "col-md-3"]').find('button')
    })

    it('should display generate API keys', () => {
        cy.get('div').should('be.visible')
    })

    it('should display View Docs', () => {
        cy.get('div[class= "text-right"]').find('a')
    })
})