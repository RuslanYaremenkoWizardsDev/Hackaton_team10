Feature: Сheck user registration using valid data

  @regPage
  Scenario Outline: Check user registration with using valid data
    Given I open registration page
    When I enter not valid data <login> in input Login
    Then I enter valid data <password> in input Password
    Then I enter valid data <confirm> in input Confirm password
    And I click to the button Sign Up
    Then I check form Sign In

    Examples:
      | login                   | password                 | confirm                  |
      | UserTest1               | 1234test                 | 1234test                 |
      | nub                     | 123456                   | 123456                   |
      | ThisLoginIsVeryVEryGood | ThisPasswordVeryVEryGood | ThisPasswordVeryVEryGood |
      | Postman                 | ImKillYourServer         | ImKillYourServer         |
