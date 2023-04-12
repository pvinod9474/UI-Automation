Feature: To Test Automation Exercise Test Suite

  Scenario: Register User
    Given User Launch URL
    Then Verifies that home page is visible successfully
    When Clicks on SignupORLogin button
    Then Verifies Login to your account is visible
    When Enters name and email address 
    Then Clicks Signup button
    Then Verifies that 'ENTER ACCOUNT INFORMATION' is visible
    When User Fill details like Title Name Email Password Date of birth
    When Selects checkbox Sign up for our newsletter and Receive special offers from our partners 
    Then User Fill details like First name Last name Company Address Address2 Country State City Zipcode Mobile Number
    When Clicks Create Account button
    Then Verifies that 'ACCOUNT CREATED!' is visible
    When Clicks Continue button
    Then Verifies that 'Logged in as username' is visible 
    When Clicks Delete Account button
    Then Verifies that 'ACCOUNT DELETED!' is visible and clicks Continue button

  Scenario: Login User with correct email Then password
    Given User Launch URL
    Then Verifies that home page is visible successfully
    When Clicks on SignupORLogin button
    Then Verifies Login to your account is visible
    When Enters correct email address Then password
    Then Clicks login button
    Then Verifies that 'Logged in as username' is visible
  #  Then Click 'Delete Account' button
  #  Then Verify that 'ACCOUNT DELETED!' is visible

  Scenario: Login User with incorrect email and password
    Given User Launch URL
    Then Verifies that home page is visible successfully
    When Clicks on SignupORLogin button
    Then Verifies Login to your account is visible
    When Enters incorrect email address and password
    Then Clicks login button
    Then Verify error 'Your email or password is incorrect!' is visible

  Scenario: Logout User
    Given User Launch URL
    Then Verifies that home page is visible successfully
    When Clicks on SignupORLogin button
    Then Verifies Login to your account is visible
    When Enters correct email address Then password
    Then Clicks login button
    Then Verifies that 'Logged in as username' is visible
    When Clicks Logout button
    Then Verifies Login to your account is visible

