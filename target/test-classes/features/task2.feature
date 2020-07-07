#Author: Reginald Williams

#Summary: City Bikes Api Testing

@CB_API
Feature: City Bikes API Tests 
  As a biker I would like to know the exact location of city bikes around the world in a given application.

  @CB_API01
  Scenario: The City Bikes Api Returns 200 Response Code
    Given City Bikes Api Url is active
    When I run the unfiltered api
    Then The expected success response code is returned

  @CB_API02
  Scenario Outline: The City Bikes Api Filtered By Location Returns Expected City, Longitude & Latitude
    Given I have a specific location <name>
    When I run the api filtered by location
    And I extract the country returned by the api
    Then I verify that the country <value> is as expected
    And I verify the the latitude londitude values are returned

    Examples: 
      | name  				| value 		|
      | visa-frankfurt| frankfurt	|