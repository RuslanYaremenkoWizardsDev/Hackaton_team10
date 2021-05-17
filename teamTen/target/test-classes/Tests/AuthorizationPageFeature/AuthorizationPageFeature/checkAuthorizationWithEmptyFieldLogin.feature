Feature: Check authorization with empty field “Login“

  @authPage
  Scenario: Check authorization with empty field “Login“
    Given I open authorization page
    When I enter valid data in input Password
    When I enter valid data in input Login
    Then I click to the button Sign In
    And I search error text "login length must be more then 3 symbols and less 25 symbols. Only latin characters and numberic in it"