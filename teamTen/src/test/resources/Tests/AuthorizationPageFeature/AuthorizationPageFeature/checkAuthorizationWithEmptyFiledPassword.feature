Feature: Check authorization with empty field “Password“

  @authPage
  Scenario: Check authorization with empty field “Password“
    Given I open authorization page
    When I enter valid data in input Login
    Then I click to the button Sign In
    And I search error text "Password length must be more then 6 symbols and less 25 symbols. Only latin characters and numberic in it"
