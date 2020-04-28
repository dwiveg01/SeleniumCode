
  Feature: Google Test

    Scenario Outline: Search keywords in Google
      Given Google homepage is open
      When Enter "<searchKey>" in Search box
      Then Google displays relevant search result
      Examples:
        | searchKey |
        | Namibia    |



