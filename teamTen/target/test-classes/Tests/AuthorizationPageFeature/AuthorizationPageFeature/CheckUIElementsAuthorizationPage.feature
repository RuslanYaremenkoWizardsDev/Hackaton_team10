Feature: Check UI elements in authorization page

  @authPage
  Scenario: Check UI elements in authorization page
    Given I open authorization page
    Then I check form "Sign in"
    Then I check input Login
    And I check input Password
    And I check button Sign in
    And I check text "Don`t have account?"
    Then I check link "Sign up"
    Then I check text "Enter like a"
    Then I check link "Guest"