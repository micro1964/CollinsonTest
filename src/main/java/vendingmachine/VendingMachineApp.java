package vendingmachine;

import java.io.File;
import java.util.Scanner;

import vendingmachine_dataprovider.InventoryManager;

public class VendingMachineApp {

	final static private String DATA_PROVIDER_LOCATION = System.getProperty("user.dir")+File.separator+"src"+File.separator+
			"main"+File.separator+"java"+File.separator+"vendingmachine_dataprovider"+File.separator;
	
	final static public String VENDING_MACHINE_JSON_FILE = DATA_PROVIDER_LOCATION+File.separator+"InventoryList.json";
	
	static public boolean OutOfStock = false;
	
	/**
	 * Takes in the money for the Vending Machine App
	 * @param in - User Input
	 * @return - Amount Received
	 * @author reggy williams
	 */
	public int getDenominations(Scanner in) {
		
		int iAmount;

		System.out.println("YOU WILL BE PROMPTED TO SPECIFY THE TYPE OF COINS ENTERED & HOW MANY OF EACH");
		System.out.println("HOW MANY QUARTERS (25 Pence each Quarter)? Please Enter 0 If None: ");
		int iQuarters = in.nextInt();

		System.out.println("HOW MANY DIMES (10 Pence each Dime)? Please Enter 0 If None: ");
		int iDimes = in.nextInt();

		System.out.println("HOW MANY NICKLES (5 Pence each Nickle)? Please Enter 0 If None: ");
		int iNickles = in.nextInt();

		System.out.println("HOW MANY PENNIES (1 Pence each Penny)? Please Enter 0 If None: ");
		int iPennies = in.nextInt();

		iAmount = iQuarters * Coin.QUARTER.getAmount() + iDimes * Coin.DIME.getAmount() + 
				iNickles * Coin.NICKLE.getAmount() + iPennies * Coin.PENNY.getAmount();
		System.out.println("Amount paid = "+iAmount);

		return iAmount;
	}
	
	/**
	 *  API to take money into the Vending Machine App
	 *  
	 * @param iQuarters - Quarters Input
	 * @param iDimes - Dimes Input
	 * @param iNickles - Nickles Input
	 * @param iPennies - Pennies Input
	 * @return - Amount Processed
	 * @author reggy williams
	 */
	public int getDenominations(int iQuarters,int iDimes,int iNickles,int iPennies) {
		int iAmount;
		iAmount = iQuarters * Coin.QUARTER.getAmount() + iDimes * Coin.DIME.getAmount() + 
				iNickles * Coin.NICKLE.getAmount() + iPennies * Coin.PENNY.getAmount();
		System.out.println("Amount paid = "+iAmount);

		return iAmount;
	}
	
	/**
	 * Processes User Selection of Products
	 * 
	 * @param in - User Input Via Scanner
	 * @param iNoOfCoke - No of COKE Cans
	 * @param iNoOfPepsi - No of PEPSI Cans
	 * @param iNoOfSoda - No of SODA Cans
	 * @return - Item Selected
	 * @author reggy williams
	 */
	public int promptItemSelection(Scanner in,int iNoOfCoke,int iNoOfPepsi,int iNoOfSoda) {
		String strProduct = "";
		System.out.println("ENTER BTW (1 to 3) TO CHOOSE ITEM...");
		System.out.println("0 - To Cancel Request");
		System.out.println("1 - "+Item.COKE.getBrandName()+"......"+Item.COKE.getPrice()+" Pence");
		System.out.println("2 - "+Item.PEPSI.getBrandName()+"....."+Item.PEPSI.getPrice()+" Pence");
		System.out.println("3 - "+Item.SODA.getBrandName()+"......"+Item.SODA.getPrice()+" Pence");

		int iSelection = in.nextInt();
		
		switch (iSelection) {
		case 0:
		case 1:
			strProduct = Item.COKE.getBrandName();
			if(!InventoryManager.isItemInStock(strProduct)){
				System.out.println(strProduct+ " IS OUT OF STOCK. RETRY TRANSACTION WITH ANOTHER SELECTION!");
				iSelection = 0;
			}
			else {
				resetVendingMachine("COKE", iNoOfCoke -1, "PEPSI", iNoOfPepsi, "SODA", iNoOfSoda);
				}
			break;
		case 2:
			strProduct = Item.PEPSI.getBrandName();
			if(!InventoryManager.isItemInStock(strProduct)){
				System.out.println(strProduct+ " IS OUT OF STOCK. RETRY TRANSACTION WITH ANOTHER SELECTION!");
				iSelection = 0;
			}
			else {
				resetVendingMachine("COKE", iNoOfCoke, "PEPSI", iNoOfPepsi - 1, "SODA", iNoOfSoda);
			}
			break;
		case 3:
			strProduct = Item.SODA.getBrandName();
			if(!InventoryManager.isItemInStock(strProduct)){
				System.out.println(strProduct+ " IS OUT OF STOCK. RETRY TRANSACTION WITH ANOTHER SELECTION!");
				iSelection = 0;
			}
			else {
				resetVendingMachine("COKE", iNoOfCoke, "PEPSI", iNoOfPepsi, "SODA", iNoOfSoda-1);
			}
			break;
		default:
			System.out.println("INVALID SELECTION! PLEASE SELECT NUMBER BETWEEN 1 & 3");
		}

		return iSelection;
	}
	
	/**
	 * API to process User Selection of Products
	 * 
	 * @param iSelection - Item Selected
	 * @param iNoOfCoke - No of COKE Cans
	 * @param iNoOfPepsi - No of PEPSI Cans
	 * @param iNoOfSoda - No of SODA Cans
	 * @return - Item Selected
	 * @author reggy williams
	 */
	public int promptItemSelection(int iSelection, int iNoOfCoke,int iNoOfPepsi,int iNoOfSoda) {
		String strProduct = "";
		System.out.println("ENTER BTW (1 to 3) TO CHOOSE ITEM...");
		System.out.println("0 - To Cancel Request");
		System.out.println("1 - "+Item.COKE.getBrandName()+"......"+Item.COKE.getPrice()+" Pence");
		System.out.println("2 - "+Item.PEPSI.getBrandName()+"....."+Item.PEPSI.getPrice()+" Pence");
		System.out.println("3 - "+Item.SODA.getBrandName()+"......"+Item.SODA.getPrice()+" Pence");
		
		switch (iSelection) {
		case 0:
		case 1:
			strProduct = Item.COKE.getBrandName();
			if(!InventoryManager.isItemInStock(strProduct)){
				System.out.println(strProduct+ " IS OUT OF STOCK. RETRY TRANSACTION WITH ANOTHER SELECTION!");
				iSelection = 0;
			}
			else {
				resetVendingMachine("COKE", iNoOfCoke -1, "PEPSI", iNoOfPepsi, "SODA", iNoOfSoda);
				}
			break;
		case 2:
			strProduct = Item.PEPSI.getBrandName();
			if(!InventoryManager.isItemInStock(strProduct)){
				System.out.println(strProduct+ " IS OUT OF STOCK. RETRY TRANSACTION WITH ANOTHER SELECTION!");
				iSelection = 0;
			}
			else {
				resetVendingMachine("COKE", iNoOfCoke, "PEPSI", iNoOfPepsi - 1, "SODA", iNoOfSoda);
			}
			break;
		case 3:
			strProduct = Item.SODA.getBrandName();
			if(!InventoryManager.isItemInStock(strProduct)){
				System.out.println(strProduct+ " IS OUT OF STOCK. RETRY TRANSACTION WITH ANOTHER SELECTION!");
				iSelection = 0;
			}
			else {
				resetVendingMachine("COKE", iNoOfCoke, "PEPSI", iNoOfPepsi, "SODA", iNoOfSoda-1);
			}
			break;
		default:
			System.out.println("INVALID SELECTION! PLEASE SELECT NUMBER BETWEEN 1 & 3");
		}

		return iSelection;
	}
	
	/**
	 * Checks that funds are sufficient for transaction
	 * @param iSelection - Selected Item
	 * @param iAmount - Amount Put Into The VendingMachineApp
	 * @return Selected Item If Sufficient else Zero Returned
	 * @author reggy williams
	 */
	public int checkForSufficientFundsPaid(int iSelection,int iAmount ) {
		int cost = 0; 
		boolean areFundsEnough = false;
		
		switch(iSelection) {
		case 1:
			cost = Item.COKE.getPrice();
			if(cost > iAmount) {
				System.out.println("THE ITEM COSTS "+cost+" YOU HAVE NOT INSERTED ENOUGH MONEY!");
				iSelection = 0;
				}
			else {
				areFundsEnough = true;
				}
			break;
		case 2:
			cost = Item.PEPSI.getPrice();
			if(cost > iAmount) {
				System.out.println("THE ITEM COSTS "+cost+" YOU HAVE NOT INSERTED ENOUGH MONEY!");
				iSelection = 0;
				}
			else {
				areFundsEnough = true;
				}
			break;
		case 3:
			cost = Item.SODA.getPrice();
			if(cost > iAmount) {
				System.out.println("THE ITEM COSTS "+cost+" YOU HAVE NOT INSERTED ENOUGH MONEY!");
				iSelection = 0;
				}
			else {
				areFundsEnough = true;
				}
			break;
			}
		
		return iSelection;
	}
	
	/**
	 * Converts specified selection to a number
	 * 
	 * @param strSelection - 1=COKE;2=PEPSI;3=SODA
	 * @return iSelection
	 * @author reggy williams
	 */
	public int getSelection(String strSelection) {
		int iSelection = 0;
		switch(strSelection.toLowerCase()) {
			case "coke":
				iSelection = 1;
			break;
			case "pepsi":
				iSelection = 2;
			break;
			case "soda":
				iSelection = 3;
			break;
		}
		return iSelection;
	}
	
	/**
	 * Dispenses select item
	 * @param iSelection - Item Selected
	 * @param iAmount - Amount Paid
	 * @return - Results Message
	 * @author reggy williams
	 */
	public String dispenseItem(int iSelection,int iAmount) {
		String strMessage="",sProduct = "",sMessage="";
		int iCost=0,iChange=0;
		
		switch(iSelection) {
		case 0:
			sProduct = "REFUND";
			iCost = 0;
			break;
		case 1:
			sProduct = Item.COKE.getBrandName();
			iCost = Item.COKE.getPrice();
			break;
		case 2:
			sProduct = Item.PEPSI.getBrandName();
			iCost = Item.PEPSI.getPrice();
			break;
		case 3:
			sProduct = Item.SODA.getBrandName();
			iCost = Item.SODA.getPrice();
			break;
		default:
			//Prompt for correct input
			break;
		}
		
		strMessage = "PLEASE COLLECT THE "+sProduct+".";
		iChange = iAmount - iCost;
		if(iChange>0) {
			sMessage = strMessage+" CHANGE RETURNED = "+iChange+" PENCE. TRANSACTION COMPLETED THANK YOU";
		}
		else {
			sMessage = strMessage+" TRANSACTION COMPLETED. THANK YOU";
			}
		System.out.println(sMessage);
		return sMessage;
	}
	
	public void resetVendingMachine(String sBrand1, int iCount1,String sBrand2, int iCount2, String sBrand3, int iCount3) {
		updateInventory(sBrand1, iCount1, sBrand2, iCount2, sBrand3, iCount3);
	}
	
	public void updateInventory(String sBrand1, int iCount1, String sBrand2, int iCount2, String sBrand3, int iCount3) {	
		InventoryManager.createInventories(sBrand1, iCount1, sBrand2, iCount2, sBrand3, iCount3, VENDING_MACHINE_JSON_FILE);
	}
	
	/**
	 * Extracts Actual Change From Message and compares it with expected change
	 * @param sMessage - Message Returned
	 * @param expectedChange
	 * @return True or False
	 * @author reggy williams
	 */
	public boolean extractChangeFromMessage(String sMessage,int expectedChange) {
		boolean bResults = false;
		
		String[] aChange = sMessage.split("=");
		int iChange =Integer.parseInt(aChange[1].replace("PENCE","").trim());
		if(iChange==expectedChange) {
			bResults = true;
		}
		
		return bResults;
	}
	
	/**
	 * Sets the OutofStock flag to True or False
	 * @param iOnorOff - indicator used to set flag: 0 = True
	 * @author reggy williams
	 */
	public void setOutOfStockInd(int iOnorOff) {
		switch(iOnorOff) {
		case 0:
			OutOfStock = true;
			break;
		default:
			OutOfStock = false;
			break;
		}
	}
	
	/**
	 * Gets the OutOfStock Flag
	 * @return - True or False
	 * @author reggy williams
	 */
	public boolean getOutOfStockInd() {
		return OutOfStock;
	}
	
}
