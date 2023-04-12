Feature: TC-2


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