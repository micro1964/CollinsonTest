package vendingmachine;

import java.util.Scanner;


public class VM_App {

	static int iNoOfCoke = 5,iNoOfPepsi = 5,iNoOfSoda = 5;
	
	public static void main(String[] args) {
		
		VendingMachineApp vm = new VendingMachineApp();
		
		//Sets stock in the vending machine
		vm.resetVendingMachine("COKE", iNoOfCoke, "PEPSI", iNoOfPepsi, "SODA", iNoOfSoda);
		
		Scanner in = new Scanner(System.in);
		
		int iAmount = vm.getDenominations(in);
		
		int iSelection = vm.promptItemSelection(in,iNoOfCoke,iNoOfPepsi,iNoOfSoda);
		
		iSelection = vm.checkForSufficientFundsPaid(iSelection,iAmount);
		
		vm.dispenseItem(iSelection,iAmount);

		in.close();
	}
}
