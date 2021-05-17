Feature: Checking the registration of a new user with a registered user name

  @regPage
  Scenario Outline: Checking the registration of a new user with a registered user name
    When I open registration page
    Then I enter valid data <login> in input Login
    Then I enter valid data <password> in input Password
    Then I enter valid data <confirm> in input Confirm password
    Then I click to the button Sign Up
    And I search error message "user with this login is already registered"
    Examples:
      | login | password  | confirm   |
      | Roman | password1 | password1 |
      | Roman | password1 | password1 |

