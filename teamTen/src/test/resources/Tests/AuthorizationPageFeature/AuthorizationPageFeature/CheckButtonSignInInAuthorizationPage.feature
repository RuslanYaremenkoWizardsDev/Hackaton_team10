Feature: Check button "Sign In" in authorization page

  @authPage
  Scenario: Check button Sign In in authorization page
    Given I open authorization page
    When I check button Sign in
    When I click to the button Sign In
    Then I search error text "login length must be more then 3 symbols and less 25 symbols. Only latin characters and numberic in it"
