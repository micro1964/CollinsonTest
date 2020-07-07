package stepdefinitions;

import static org.junit.Assert.assertTrue;

import java.util.HashMap;
import java.util.Map;

import citybikes_api.ApiUtilities;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Task2Steps {
	static String strUrl="",strLocation="",strCountry="",strLongitude="",strLatitude="";
	
	static int iResponseCode=0;
	static boolean bPassed = false;
	
	static Map<?,?> gMap = new HashMap<String,Object>();
	
	ApiUtilities request = new ApiUtilities();
	
	@Given("^City Bikes Api Url is active$")
	public void city_Bikes_Api_Url_is_active() throws Throwable {
	    strUrl = "http://api.citybik.es/v2/networks";
	}

	@When("^I run the unfiltered api$")
	public void i_run_the_unfiltered_api() throws Throwable {
		iResponseCode=request.getResponseCodeOfApi(strUrl);
	}

	@Then("^The expected success response code is returned$")
	public void the_expected_success_response_code_is_returned() throws Throwable {
		if(iResponseCode==200) {
			bPassed = true;
		}
		assertTrue(bPassed);
	}

	@Given("^I have a specific location (.*?)$")
	public void i_have_a_specific_location(String sLocation) throws Throwable {
		strLocation = sLocation;
	}

	@When("^I run the api filtered by location$")
	public void i_run_the_api_filtered_by_location() throws Throwable {
		String filteredLocation = strUrl+"/"+strLocation;
		gMap=request.runApiFilteredByLocation(filteredLocation, "location");
	}

	@When("^I extract the country returned by the api$")
	public void i_extract_the_country_returned_by_the_api() throws Throwable {
		strCountry = (String) gMap.get("city");
		
		System.out.println("City returned is: "+strCountry);
	}

	@Then("^I verify that the country (.*?) is as expected$")
	public void i_verify_that_the_country_is_as_expected(String sCountry) throws Throwable {
		bPassed = false;
		if(strCountry.toLowerCase().contentEquals(sCountry.toLowerCase())) {
			bPassed = true;
		}
		assertTrue(bPassed);
	}

	@Then("^I verify the the latitude londitude values are returned$")
	public void i_verify_the_the_latitude_londitude_values_are_returned() throws Throwable {
		bPassed = false;
		strLongitude = (String) gMap.get("longitude");
		strLatitude = (String) gMap.get("latitude");
		
		if(strLatitude.length()>3 &&strLongitude.length()>3) {
			bPassed = true;
		}
		System.out.println("The Longitude returned is: "+strLongitude);
		System.out.println("The Latitude returned is: "+strLatitude);
		
		assertTrue(bPassed);
	}

}
