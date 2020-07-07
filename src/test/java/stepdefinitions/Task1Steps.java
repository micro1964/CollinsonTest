package stepdefinitions;

import static org.junit.Assert.assertTrue;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import vendingmachine.Item;
import vendingmachine.VendingMachineApp;
import vendingmachine_dataprovider.InventoryManager;

public class Task1Steps {
	VendingMachineApp vm = new VendingMachineApp();
	int iCountCoke=0,iCountPepsi=0,iCountSoda=0,iExpCountCoke=0,iExpCountPepsi=0,iExpCountSoda=0;
	int iAmountPaid = 0,iOutOfStockInd=-1,iRefundedAmount=-1; String strRefundMessage = "";
	
	@Given("^That the vending machine is stocked with the drinks$")
	public void that_the_vending_machine_is_stocked_with_the_drinks() throws Throwable {
		vm.resetVendingMachine("COKE", 5, "PEPSI", 5, "SODA", 5);
	}

	@When("^I put enough money in the vending machine$")
	public void i_put_enough_money_in_the_vending_machine() throws Throwable {
	    vm.getDenominations(5,0,0,0);
	}

	@When("^I the select coke for purchase$")
	public void i_the_select_coke_for_purchase() throws Throwable {
		vm.promptItemSelection(1,5,5,5);
	}

	@Then("^The transaction completes successfully$")
	public void the_transaction_completes_successfully() throws Throwable {
		int iSelection = vm.checkForSufficientFundsPaid(1,125);
	}

	@When("^I the select pepsi for purchase$")
	public void i_the_select_pepsi_for_purchase() throws Throwable {
		vm.promptItemSelection(2,5,5,5);
	}

	@When("^I the select soda for purchase$")
	public void i_the_select_soda_for_purchase() throws Throwable {
		vm.promptItemSelection(3,5,5,5);
	}

	@Given("^I put into the vending machine (\\d+) pennies$")
	public void i_put_into_the_vending_machine_pennies(int arg1) throws Throwable {
		vm.checkForSufficientFundsPaid(3,arg1);
	}

	@Given("^There are cans of coke in the vending machine$")
	public void there_are_cans_of_coke_in_the_vending_machine() throws Throwable {
		vm.resetVendingMachine("COKE", 5, "PEPSI", 5, "SODA", 5);
	}

	@When("^I request for a can of coke$")
	public void i_request_for_a_can_of_coke() throws Throwable {
		vm.promptItemSelection(1,5,5,5);
	}

	@Then("^The transaction is successful (\\d+) for coke$")
	public void the_transaction_is_successful_for_coke(int arg1) throws Throwable {
		boolean bExpectedMessage = false;
		vm.checkForSufficientFundsPaid(vm.getSelection("COKE"),arg1);
		
		String sMessage = vm.dispenseItem(vm.getSelection("COKE"),arg1);
		if(sMessage.toLowerCase().contains("transaction completed")) {
			bExpectedMessage = true;
		}
		assertTrue(bExpectedMessage);
		System.out.println("");
	}

	@Then("^The transaction is successful (\\d+) for pepsi$")
	public void the_transaction_is_successful_for_pepsi(int arg1) throws Throwable {
		boolean bExpectedMessage = false;
		vm.checkForSufficientFundsPaid(vm.getSelection("PEPSI"),arg1);
		
		String sMessage = vm.dispenseItem(vm.getSelection("PEPSI"),arg1);
		if(sMessage.toLowerCase().contains("transaction completed")) {
			bExpectedMessage = true;
		}
		assertTrue(bExpectedMessage);
	}

	@Then("^The transaction is successful (\\d+) for soda$")
	public void the_transaction_is_successful_for_soda(int arg1) throws Throwable {
		boolean bExpectedMessage = false;
		vm.checkForSufficientFundsPaid(vm.getSelection("SODA"),arg1);
		
		String sMessage = vm.dispenseItem(vm.getSelection("SODA"),arg1);
		if(sMessage.toLowerCase().contains("transaction completed")) {
			bExpectedMessage = true;
		}
		assertTrue(bExpectedMessage);
	}

	@Given("^There are cans of pepsi in the vending machine$")
	public void there_are_cans_of_pepsi_in_the_vending_machine() throws Throwable {
		vm.resetVendingMachine("COKE", 5, "PEPSI", 5, "SODA", 5);
	}

	@When("^I request for a can of pepsi$")
	public void i_request_for_a_can_of_pepsi() throws Throwable {
		vm.promptItemSelection(2,5,5,5);
	}

	@Given("^There are cans of soda in the vending machine$")
	public void there_are_cans_of_soda_in_the_vending_machine() throws Throwable {
		vm.resetVendingMachine("COKE", 5, "PEPSI", 5, "SODA", 5);
	}

	@When("^I request for a can of soda$")
	public void i_request_for_a_can_of_soda() throws Throwable {
		vm.promptItemSelection(3,5,5,5);
	}

	@Given("^I put into the vending machine (\\d+)$")
	public void i_put_into_the_vending_machine(int arg1) throws Throwable {
		iAmountPaid = arg1;
		
		vm.checkForSufficientFundsPaid(1,arg1);
		
		vm.dispenseItem(1,arg1);
	}

	@Then("^The vending machine gives back (\\d+) for coke amount paid (\\d+)$")
	public void the_vending_machine_gives_back_for_coke_amount_paid(int arg1, int arg2) throws Throwable {
		boolean bCorrectChange = false;
		vm.checkForSufficientFundsPaid(vm.getSelection("COKE"),arg2);
		
		String [] sMessage = vm.dispenseItem(vm.getSelection("COKE"),arg2).split("\\.");
		
		bCorrectChange = vm.extractChangeFromMessage(sMessage[1], arg1);
		assertTrue(bCorrectChange);
	    System.out.println(sMessage);
	    System.out.println();
	}
	
	@Then("^The vending machine gives back (\\d+) for pepsi amount paid (\\d+)$")
	public void the_vending_machine_gives_back_for_pepsi_amount_paid(int arg1, int arg2) throws Throwable {
		boolean bCorrectChange = false;
		vm.checkForSufficientFundsPaid(vm.getSelection("PEPSI"),arg2);
		
		String[] sMessage = vm.dispenseItem(vm.getSelection("PEPSI"),arg2).split("\\.");
		bCorrectChange = vm.extractChangeFromMessage(sMessage[1], arg1);
		assertTrue(bCorrectChange);
	}
	
	@Then("^The vending machine gives back (\\d+) for soda amount paid (\\d+)$")
	public void the_vending_machine_gives_back_for_soda_amount_paid(int arg1, int arg2) throws Throwable {
		boolean bCorrectChange = false;
		vm.checkForSufficientFundsPaid(vm.getSelection("SODA"),arg2);
		
		String[] sMessage = vm.dispenseItem(vm.getSelection("SODA"),arg2).split("\\.");
		bCorrectChange = vm.extractChangeFromMessage(sMessage[1], arg1);
		assertTrue(bCorrectChange);
	}
	
	/*
	@Then("^The vending machine gives back (\\d+) for (\\d+) amount paid (\\d+)$")
	public void the_vending_machine_gives_back(int arg1,String arg2,int arg3) throws Throwable {
		
		vm.checkForSufficientFundsPaid(vm.getSelection(arg2),arg3);
		
		String sMessage = vm.dispenseItem(vm.getSelection(arg2),arg3);
	    System.out.println(arg1);
	    System.out.println();
	}
	*/

	@Given("^No balance of coke in the vending machine$")
	public void no_balance_of_coke_in_the_vending_machine() throws Throwable {
		vm.resetVendingMachine("COKE", 0, "PEPSI", 5, "SODA", 5);
	}

	@Given("^I put following (\\d+) of coke into the vending machine$")
	public void i_put_following_of_coke_into_the_vending_machine(int arg1) throws Throwable {
		vm.resetVendingMachine("COKE", arg1, "PEPSI", 5, "SODA", 5);
	}

	@When("^I get the inventory of coke$")
	public void i_get_the_inventory_of_coke() throws Throwable {
		iCountCoke=InventoryManager.countItemInTheInventoryJsonFile(Item.COKE.getBrandName());
	}

	@Then("^The Number of coke in vending machine matches (\\d+)$")
	public void the_Number_of_coke_in_vending_machine_matches(int arg1) throws Throwable {
		boolean bExpectedCountMatch = false;
		if(iCountCoke==arg1) {
			bExpectedCountMatch = true;
	    }
		
		assertTrue(bExpectedCountMatch);
	}

	@Given("^No balance of pepsi in the vending machine$")
	public void no_balance_of_pepsi_in_the_vending_machine() throws Throwable {
		vm.resetVendingMachine("COKE", 5, "PEPSI", 0, "SODA", 5);
	}

	@Given("^I put following (\\d+) of pepsi into the vending machine$")
	public void i_put_following_of_pepsi_into_the_vending_machine(int arg1) throws Throwable {
		vm.resetVendingMachine("COKE", 5, "PEPSI", arg1, "SODA", 5);
	}

	@When("^I get the inventory of pepsi$")
	public void i_get_the_inventory_of_pepsi() throws Throwable {
		iCountPepsi=InventoryManager.countItemInTheInventoryJsonFile(Item.PEPSI.getBrandName());
	}

	@Then("^The Number of pepsi in vending machine matches (\\d+)$")
	public void the_Number_of_pepsi_in_vending_machine_matches(int arg1) throws Throwable {
		boolean bExpectedCountMatch = false;
		if(iCountPepsi==arg1) {
			bExpectedCountMatch = true;
	    }
		
		assertTrue(bExpectedCountMatch);
	}

	@Given("^No balance of soda in the vending machine$")
	public void no_balance_of_soda_in_the_vending_machine() throws Throwable {
		vm.resetVendingMachine("COKE", 5, "PEPSI", 5, "SODA", 0);
	}

	@Given("^I put following (\\d+) of soda into the vending machine$")
	public void i_put_following_of_soda_into_the_vending_machine(int arg1) throws Throwable {
		vm.resetVendingMachine("COKE", 5, "PEPSI", 5, "SODA", arg1);
	}

	@When("^I get the inventory of soda$")
	public void i_get_the_inventory_of_soda() throws Throwable {
		iCountSoda=InventoryManager.countItemInTheInventoryJsonFile(Item.SODA.getBrandName());
	}

	@Then("^The Number of soda in vending machine matches (\\d+)$")
	public void the_Number_of_soda_in_vending_machine_matches(int arg1) throws Throwable {
	    boolean bExpectedCountMatch = false;
		if(iCountSoda==arg1) {
			bExpectedCountMatch = true;
	    }
		
		assertTrue(bExpectedCountMatch);
	}
	
	
	@When("^I purchase a can of coke$")
	public void i_purchase_a_can_of_coke() throws Throwable {
		vm.promptItemSelection(1,5,5,5);
		iExpCountCoke = 5;
	}

	@Then("^the number of coke has reduced by one$")
	public void the_number_of_coke_has_reduced_by_one() throws Throwable {
		boolean bReducedCount = false;
		iCountCoke=InventoryManager.countItemInTheInventoryJsonFile(Item.COKE.getBrandName());
		if(iExpCountCoke - iCountCoke == 1) {
			bReducedCount = true;
		}
		assertTrue(bReducedCount);

	}

	@When("^I purchase a can of pepsi$")
	public void i_purchase_a_can_of_pepsi() throws Throwable {
		vm.promptItemSelection(2,5,5,5);
		iExpCountPepsi = 5;
	}

	@Then("^the number of pepsi has reduced by one$")
	public void the_number_of_pepsi_has_reduced_by_one() throws Throwable {
		boolean bReducedCount = false;
		iCountPepsi=InventoryManager.countItemInTheInventoryJsonFile(Item.PEPSI.getBrandName());
		if(iExpCountPepsi - iCountPepsi == 1) {
			bReducedCount = true;
		}
		assertTrue(bReducedCount);
	}

	@When("^I purchase a can of soda$")
	public void i_purchase_a_can_of_soda() throws Throwable {
		vm.promptItemSelection(3,5,5,5);
		iExpCountSoda = 5;
	}

	@Then("^the number of soda has reduced by one$")
	public void the_number_of_soda_has_reduced_by_one() throws Throwable {
		boolean bReducedCount = false;
		iCountSoda=InventoryManager.countItemInTheInventoryJsonFile(Item.SODA.getBrandName());
		if(iExpCountSoda - iCountSoda == 1) {
			bReducedCount = true;
		}
		assertTrue(bReducedCount);
	}

	/*
	@Then("^I try to purchase a can of coke$")
	public void i_try_to_purchase_a_can_of_coke() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
*/
	
	@Then("^Vending machine returns you have not inserted enough money$")
	public void vending_machine_returns_you_have_not_inserted_enough_money() throws Throwable {
		boolean bResults = false;
		
		int iSelection = vm.checkForSufficientFundsPaid(vm.getSelection("COKE"),iAmountPaid);
		String[] sMessage = vm.dispenseItem(iSelection,iAmountPaid).split("\\.");
		//bCorrectChange = vm.extractChangeFromMessage(sMessage[1], arg1);
		if(iSelection==0) {
			bResults = true;
		}
		assertTrue(bResults);
	}

	@Then("^No of coke in vending Machine remains the same$")
	public void no_of_coke_in_vending_Machine_remains_the_same() throws Throwable {
		boolean bResults = false;
		iCountCoke=InventoryManager.countItemInTheInventoryJsonFile(Item.COKE.getBrandName());
		if(iCountCoke==4) {
			bResults = true;
		}
		assertTrue(bResults);
	}

	@Then("^I try to purchase a can of pepsi$")
	public void i_try_to_purchase_a_can_of_pepsi() throws Throwable {
		vm.promptItemSelection(2,5,5,5);
	}

	@Then("^No of pepsi in vending Machine remains the same$")
	public void no_of_pepsi_in_vending_Machine_remains_the_same() throws Throwable {
		boolean bResults = false;
		iCountPepsi=InventoryManager.countItemInTheInventoryJsonFile(Item.PEPSI.getBrandName());
		if(iCountPepsi==4) {
			bResults = true;
		}
		assertTrue(bResults);
	}

	@Then("^I try to purchase a can of soda$")
	public void i_try_to_purchase_a_can_of_soda() throws Throwable {
		vm.promptItemSelection(3,5,5,5);
	}

	@Then("^No of soda in vending Machine remains the same$")
	public void no_of_soda_in_vending_Machine_remains_the_same() throws Throwable {
		boolean bResults = false;
		iCountSoda=InventoryManager.countItemInTheInventoryJsonFile(Item.SODA.getBrandName());
		if(iCountSoda==4) {
			bResults = true;
		}
		assertTrue(bResults);
	}

	@Given("^There are zero cans of coke in the vending machine$")
	public void there_are_zero_cans_of_coke_in_the_vending_machine() throws Throwable {
		boolean bResults = false;
		
		vm.resetVendingMachine("COKE", 0, "PEPSI", 0, "SODA", 0);
		
		iCountCoke=InventoryManager.countItemInTheInventoryJsonFile(Item.COKE.getBrandName());
		if(iCountCoke==0) {
			bResults = true;
		}
		assertTrue(bResults);
	}
	
	@Given("^There are zero cans in the vending machine$")
	public void there_are_zero_cans_in_the_vending_machine() throws Throwable {
		vm.resetVendingMachine("COKE", 0, "PEPSI", 0, "SODA", 0);
	}

	@Given("^I try to purchase any item$")
	public void i_try_to_purchase_any_item() throws Throwable {
		vm.resetVendingMachine("COKE", 0, "PEPSI", 0, "SODA", 0);
		iOutOfStockInd=vm.promptItemSelection(1,0,0,0);
		
	}
	
	@Given("^I try to purchase a can of coke$")
	public void i_try_to_purchase_a_can_of_coke() throws Throwable {
		vm.promptItemSelection(1,5,5,5);
	}

	@Then("^Vending machine returns is out of stock$")
	public void vending_machine_returns_is_out_of_stock() throws Throwable {
		
		String[] sMessage = vm.dispenseItem(iOutOfStockInd,iAmountPaid).split("\\.");
		iRefundedAmount = Integer.parseInt(sMessage[1].replace("CHANGE RETURNED = ", "").replace(" PENCE", "").trim());
		vm.setOutOfStockInd(iOutOfStockInd);
		assertTrue(vm.getOutOfStockInd());
	}

	@Then("^The vending machine gives back (\\d+)$")
	public void the_vending_machine_gives_back(int arg1) throws Throwable {
		boolean bResults = false;
	    if(iRefundedAmount==arg1) {
	    	bResults = true;
	    }
	    assertTrue(bResults);
	}




}
