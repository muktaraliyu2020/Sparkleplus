describe('Settings Test', () => {
    before(function() {
        cy.visit('https://virtualaccounts.uat.sparkle.ng/login')
        cy.get('#email').type('Bull@sharklasers.com')
            cy.get('#password').type('Shola1010')
            cy.get('button[type="submit"]').click()
    })

    it('should display settings page', () => {
        cy.get('#settings').click()
        cy.url().should('contain', 'settings/profile')
    })

    it('should display your profile', () => {
        cy.get('nav[class= "nav nav-tabs"]').find('a')
        cy.get('div[class= "col-md-5 my-3"]').find('input')
        cy.get('div[class= "position-relative"]').find('input')
    })
    it('should display bussiness profile', () => {
        cy.get('nav[class= "nav nav-tabs"]').find('a')
    })
})