Feature: Check input “Password“ in authorization page

  @authPage
  Scenario: Check input Password in authorization page
    Given I open authorization page
    When I check input Password
    Then I enter "qwqwqw" in input Password
    And I check result in input password