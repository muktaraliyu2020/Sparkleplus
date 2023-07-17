describe('sparkle login', () => {
    before(function() {
        cy.visit('https://virtualaccounts.uat.sparkle.ng/login')
        cy.get('#email').type('Bull@sharklasers.com')
            cy.get('#password').type('Shola1010')
            cy.get('button[type="submit"]').click() 
    })

    it('should display Account page', () => {
       cy.get('#accounts').click()
    })
})