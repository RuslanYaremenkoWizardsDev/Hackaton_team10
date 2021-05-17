Feature: Check authorization with not valid data

  @authPage
  Scenario: Check authorization with not valid data
    Given I open authorization page
    When I enter valid data in input Login
    Then I enter "пароль123" in input Password
    And I click to the button Sign In
    Then I search error text "Password length must be more then 6 symbols and less 25 symbols. Only latin characters and numberic in it"
