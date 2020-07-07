#Author: Reginald Williams

#Summary : Vending Machine Tests

@VM
Feature: Vending Machine Tests
  As a vending machine user, I want to purchase different drinks
  
  @VM1
  Scenario Outline: Purchase the various type of drinks
    Given That the vending machine is stocked with the drinks
    When I put enough money in the vending machine
    And I the select <brand> for purchase
    Then The transaction completes successfully

    Examples: 
      | brand | 
      | coke  |
      | pepsi |
      | soda  |
  
  @VM2
  Scenario Outline: Vending Machine Accepts Correct Denominations
    Given I put into the vending machine <money> pennies
    And There are cans of <product> in the vending machine
    When I request for a can of <product>
    Then The transaction is successful <money> for <product>   
    
    Examples:
    	|money|product|
    	|25   |coke   |
    	|35   |pepsi  |
    	|45   |soda   |
    	
    @VM3
    Scenario Outline: Vending Machine Gives Correct Change
    Given I put into the vending machine <money>
    And There are cans of <product> in the vending machine
    When I request for a can of <product>
    Then The vending machine gives back <change> for <product> amount paid <money>
    And The transaction is successful <money> for <product>
    
    Examples:
    	|money|product|change|
    	|75   |coke   |50    |
    	|75   |pepsi  |40    |
    	|75   |soda   |30    |
    	|50   |coke   |25    |
    	|50   |pepsi  |15    |
    	|50   |soda   |5     |
    	|150  |coke   |125   |
    	|150  |pepsi  |115   |
    	|150  |soda   |105   |
    
    @VM4
    Scenario Outline: Vending Machine Stocks Can Be Updated Correctly
    Given No balance of <product> in the vending machine
    And I put following <number> of <product> into the vending machine
    When I get the inventory of <product>
    Then The Number of <product> in vending machine matches <total>
    
    Examples:
     |product|number|total|
     |coke   |5     |5    |
     |pepsi  |5     |5    |
     |soda   |5     |5    |


    @VM5
    Scenario Outline: Vending Machine Stocks Reduced Correctly
    Given There are cans of <product> in the vending machine
    When I purchase a can of <product>
    And I get the inventory of <product>
    Then the number of <product> has reduced by one
    Examples:
    |product|
    |coke   |
    |pepsi  |
    |soda   |
        
    @VM6
    Scenario Outline: Vending Machine Handles Funds Too Low Correctly
    Given There are cans of <product> in the vending machine
    And I put into the vending machine <money>
    Then I try to purchase a can of <product>
    Then Vending machine returns <message>
    And No of <product> in vending Machine remains the same  
    Examples:
    |product|money|message|
    |coke   |24   |you have not inserted enough money|
    |pepsi  |24   |you have not inserted enough money|
    |soda   |24   |you have not inserted enough money|
    
    @VM7
    Scenario Outline: Vending Machine Handles Out Of Stock Correctly 
    Given There are zero cans in the vending machine
    And I put into the vending machine <money>
    And I try to purchase any item
    Then Vending machine returns <message>
    And The vending machine gives back <money>
    Examples:
    |product|money|message			  |
    |coke   |100  |is out of stock|
    
    
  