package vendingmachine_dataprovider;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import vendingmachine.VendingMachineApp;


public class InventoryManager {

	/**
	 * Populates the JSON File used to hold data for the Vending Machine
	 * 
	 * @param sBrand1 - COKE CAN
	 * @param iCount1 - No of Cans In The Vending Machine
	 * @param sBrand2 - PEPSI CAN
	 * @param iCount2 - No of Cans In The Vending Machine
	 * @param sBrand3 - SODA CAN
	 * @param iCount3 - No of Cans In The Vending machine
	 * @param sFileNameAndPath
	 * @author reggy williams
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public static void createInventories(String sBrand1, int iCount1,
			String sBrand2, int iCount2, 
			String sBrand3, int iCount3,
			String sFileNameAndPath) {
		// First Item
		JSONObject inventoryDetails = new JSONObject();
		inventoryDetails.put("brand", sBrand1);
		inventoryDetails.put("count", iCount1);

		JSONObject inventoryListObject = new JSONObject();
		inventoryListObject.put("products", inventoryDetails);

		// Second Item
		JSONObject inventoryDetails2 = new JSONObject();
		inventoryDetails2.put("brand", sBrand2);
		inventoryDetails2.put("count", iCount2);

		JSONObject inventoryListObject2 = new JSONObject();
		inventoryListObject2.put("products", inventoryDetails2);

		// Third Item
		JSONObject inventoryDetails3 = new JSONObject();
		inventoryDetails3.put("brand", sBrand3);
		inventoryDetails3.put("count", iCount3);

		JSONObject inventoryListObject3 = new JSONObject();
		inventoryListObject3.put("products", inventoryDetails3);

		// Add products to list
		JSONArray inventoryList = new JSONArray();
		inventoryList.add(inventoryListObject);
		inventoryList.add(inventoryListObject2);
		inventoryList.add(inventoryListObject3);

		// Write JSON file
		try (FileWriter file = new FileWriter(sFileNameAndPath)) {
			file.write(inventoryList.toJSONString());
			file.flush();
			} 
		catch (IOException e) {
			e.printStackTrace();
			}
		}
	
	/**
	 * Reads the JSON File that holds data for the vending machine
	 * @param sFileName - Name of the JSON File
	 * @return - ArrayList of parsed Inventory
	 * @author reggy
	 */
	@SuppressWarnings("unchecked")
    public static ArrayList<String> readInventories(String sFileName) 
    {
		ArrayList<String> list = new ArrayList<String>();
		
        //JSON parser object to parse read file
        JSONParser jsonParser = new JSONParser();
         
        String sFile = VendingMachineApp.VENDING_MACHINE_JSON_FILE;
        try (FileReader reader = new FileReader(sFile))
        {
            //Read JSON file
            Object obj = jsonParser.parse(reader);
 
            JSONArray inventoryList = (JSONArray) obj;
            //System.out.println(inventoryList);
             
            for(int i=0; i < inventoryList.size(); i++) {
               list.add(inventoryList.get(i).toString());
            }
            
            //Iterate over inventory array
            inventoryList.forEach( products -> parseInventoryObject( (JSONObject) products ) );
 
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        
        return list;
    }
 
	/**
	 * Parses the JSON Object that holds data in the Vending Machine
	 * 
	 * @param products - The are the products for sale in the Vending machine
	 * @author reggy williams
	 */
    private static void parseInventoryObject(JSONObject products) 
    {
        //Get products object within list
        JSONObject inventoryObject = (JSONObject) products.get("products");
         
        //Get product brand
        String strItem = inventoryObject.get("brand").toString();    
         
        //Get count 
        String strCount = (String) inventoryObject.get("count").toString();    

    }
    
    /**
     * Counts the number of specified item held in the Vending machine
     * @param strItem - Specified Product to be counted
     * @param strJsonFileName - Name of JSON file that holds the data held in the Vending machimne
     * @return - Count of Specified Product
     */
    public static int countItemInTheInventoryJsonFile(String strItem) {
    	int iCount = 0;
    	
    	ArrayList<String> arrayListProducts = InventoryManager.readInventories(VendingMachineApp.VENDING_MACHINE_JSON_FILE);

		for(int x=0;x<arrayListProducts.size();x++) {
			if(arrayListProducts.get(x).toLowerCase().contains(strItem.toLowerCase())) {
			String sLine = arrayListProducts.get(x).replace("{\"products\":{", "").replaceAll("\"", "").replaceAll("}", "").replace(",brand:"+strItem, "").replace("count:", "");
			if(!sLine.isEmpty()) {
				iCount = Integer.parseInt(sLine);
				}
			}
		}
		
		return iCount;
    }
    
    /**
     * Counts the specified Inventory in the Vending machine
     * @param strItem - Specific Item in Vending machine to be counted
     * @return - Count of Specified Items
     */
    public static int getNumberOfItemInVendingMachine(String strItem) {
		int iCount = 0;
		
		iCount = InventoryManager.countItemInTheInventoryJsonFile(strItem.toUpperCase());
		
		return iCount;	
		
	}
	
    /**
     * Checks if Specified Item is held in the Vending machine
     * 
     * @param sItem - Specified Item to be checked in the Vending Machine
     * @return - True or False
     */
    public static boolean isItemInStock(String sItem) {
		boolean isInStock = false;
		if(getNumberOfItemInVendingMachine(sItem)>0){
			isInStock = true;
		}
		return isInStock;
	}
	
}
