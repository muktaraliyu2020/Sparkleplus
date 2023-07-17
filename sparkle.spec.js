describe('Browser Action', () => {
    it('should login page', () => {
        cy.visit('https://virtualaccounts.uat.sparkle.ng/validate')
    })

    it('should show sparkle acount number ', () => {
        cy.get('.form-control').click()
    })

    it('should click on validate button', () => {
        cy.get('form').should('be.visible')
    })
})