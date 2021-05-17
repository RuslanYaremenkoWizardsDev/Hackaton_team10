Feature: Check input Login in authorization page


  @authPage
  Scenario: Check input Login in authorization page
    Given I open authorization page
    When I search input "Login"
    Then I enter "text for login input" in input login
    And I check result in input Login