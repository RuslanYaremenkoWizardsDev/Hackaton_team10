Feature: Check authorization with invalid data in Password
  @authPage

  Scenario: Check that it is impossible to authorize a user using an invalid login
    When I open authorization page
    Then I enter invalid data "a" in input Login
    Then I enter "1234test" in input Password
    And I click to the button Sign In
    Then I search error text "login length must be more then 3 symbols and less 25 symbols. Only latin characters and numberic in it"