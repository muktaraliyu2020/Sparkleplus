describe('working with input', () => {
    it('should load a login page', () => {
        cy.visit('https://virtualaccounts.uat.sparkle.ng/login')
        cy.url().should('include', 'login')
    })

    it('should fill username', () => {
        cy.get('#email').clear()
        cy.get('#email').type('Bull@sharklasers.com')
    })

    it('should fill password',() => {
        cy.get('#password').clear()
        cy.get('#password').type('Shola1010')
    })

    it('should submit the login form', () => {
        cy.get('button[type="submit"]').click()
        cy.get('h1').should('be.visible')
    })

    it('should display overview', () => {
        cy.get('h1').should('be.visible')
    })

    it('should display Account page', () => {
        cy.get('h1').click()
        cy.contains('View Customers').click()
    })
})