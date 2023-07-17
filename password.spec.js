describe('password Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('should click on the signin button', () => {
        cy.get('#signin_button').click()
    })

    it('should click on forgotten password', () => {
        cy.get('.offset3 > a').click()
    })

    it('should fill the email form', () => {
        cy.get('#user_email').type("test.email@mail.com")
    })

    it('should submit the form', () => {
        cy.contains('Send Password').click()
    })
})