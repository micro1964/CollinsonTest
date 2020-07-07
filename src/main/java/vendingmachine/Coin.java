package vendingmachine;

public enum Coin {
	PENNY("PENNY",1), NICKLE("NICKLE",5), DIME("DIME",10), QUARTER("QUARTER",25); 
	
	private int amount; 
	private String denomination;
	
	private Coin(String denomination, int amount){ 
		this.denomination = denomination; this.amount = amount; 
	} 
	
	public int getAmount(){ 
		return amount; 
		} 
	
	public String getDenomination(){ 
		return denomination; 
	} 
}
