Feature: Checking user registration if passwords do not match

  @regPage
  Scenario Outline: Checking user registration if passwords do not match
    Given I open registration page
    When I enter valid data "User1" in input Login
    When I enter valid data "password123" in input Password
    Then I Enter difference password <confirm> in input Confirm password
    And I click to the button Sign Up
    And I search error message
    Examples:
      | confirm      |
      | assword123   |
      | Password123  |
      | password12   |
      | passwor123   |
      | password 123 |
