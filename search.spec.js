describe('Searchbox Text', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('should type into searchbox and submit with pression enter', () => {
        cy.get('#searchTerm').type('some text {enter}')
    })

    it('should show search result page', () => {
        cy.get('h2').contains('Search Results:')
    })
})