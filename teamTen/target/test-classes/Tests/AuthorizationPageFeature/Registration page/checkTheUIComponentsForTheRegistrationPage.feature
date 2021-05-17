Feature: Check the UI components for the registration page

  @regPage
  Scenario: Check the UI components for the registration page
    Given I open registration page
    Then I check form Sign Up
    Then I check input Login
    Then I check input Password
    Then I check input Confirm password
    Then I check button Sign Up
    Then I check link Sign In
    Then I check link Guest
