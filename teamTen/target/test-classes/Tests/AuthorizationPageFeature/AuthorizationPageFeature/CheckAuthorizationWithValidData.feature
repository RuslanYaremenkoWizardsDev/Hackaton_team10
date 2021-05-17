Feature: Check authorization with valid data

  @authPage
  Scenario: Check authorization with valid data
    Given I open authorization page
    When I enter valid data in input Login
    When I enter valid data in input Password
    When I click to the button Sign In
    Then I check that the Main page has opened