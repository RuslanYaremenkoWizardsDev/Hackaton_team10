Feature: Check that it is impossible to register a user using an invalid login

  @regPage
  Scenario Outline: Check that it is impossible to register a user using an invalid login
    Given I open registration page
    When I enter not valid data <login> in input Login
    When I enter valid data <password> in input Password
    Then I enter valid data <confirm> in input Confirm password
    And I click to the button Sign Up
    And I search error message "login length must be more then 3 symbols and less 25 symbols. Only latin characters and numberic in it"

    Examples:
      | login   | password | confirm |
      | RA      | 123456   | 123456  |
      | Ян      | 123456   | 123456  |
      | 12      | 123456   | 123456  |
      | ОГО_ГО  | 123456   | 123456  |
      |         | 123456   | 123456  |
      | 12USA!! | 123456   | 123456  |