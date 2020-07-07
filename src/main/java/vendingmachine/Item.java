package vendingmachine;

public enum Item {
	COKE("COKE", 25), PEPSI("PEPSI", 35), SODA("SODA", 45); 
	private String productName; 
	private int cost; 
	
	private Item(String productName, int cost){ 
		this.productName = productName; this.cost = cost; 
	} 
	public String getBrandName(){ 
		return productName; 
	} 
	public int getPrice(){ 
		return cost; 
	} 
}
