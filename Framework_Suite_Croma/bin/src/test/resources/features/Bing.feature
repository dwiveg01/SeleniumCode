
  Feature: Bing Test

    Scenario Outline: Search keywords in Bing
      Given Bing homepage is open
      When Enter "<searchKey>" in Bing Search box
      Then Bing displays relevant search result

      Examples:
        | searchKey |
        | Austria   |
        | Germany   |


