Feature: Check registration with a not valid password

  @regPage
  Scenario Outline: Check registration with a not valid password
    When I open registration page
    Then I enter valid data "UserTest2" in input Login
    Then I enter valid data <password> in input Password
    And I enter valid data <confirm> in input Confirm password
    Then I click to the button Sign Up
    Then I search error message "password length must be more then 6 symbols and less 25 symbols. Only latin characters and numberic in it"
    Examples:
      | password                                     | confirm                                      |
      | thisPasswordIsLongerThanTwentyFiveCharacters | thisPasswordIsLongerThanTwentyFiveCharacters |
      | password 123                                 | password 123                                 |
      | p assword1                                   | p assword1                                   |
      | Ss123                                        | Ss123                                        |
      | rom@n2503                                    | rom@n2503                                    |