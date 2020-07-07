package citybikes_api;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import org.json.JSONObject;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class ApiUtilities {
	
	String strResults;
	Map<String, Object> map = new HashMap<String, Object>();

	public int getResponseCodeOfApi(String sUrl) {
		int responseCode=0;
		OkHttpClient client = new OkHttpClient().newBuilder().build();

		try {
			Request request = new Request.Builder().url(sUrl).method("GET", null).build();
			Response response = client.newCall(request).execute();
			String strResponse = response.body().string();
            
            System.out.println(strResponse);
            
            responseCode = response.code();
		} catch (IOException e) {
			System.out.println("Error: "+e.getMessage());
		}
		return responseCode;
	}
	
	public Map<?,?> runApiFilteredByLocation(String sUrl,String strFilter) {
		OkHttpClient client = new OkHttpClient().newBuilder().build();

		try {
			Request request = new Request.Builder().url(sUrl).method("GET", null).build();
			Response response = client.newCall(request).execute();
			String strResponse = response.body().string();
            map = extractMap(strResponse,strFilter);
            System.out.println(map);
		} catch (IOException e) {
			System.out.println("Error: "+e.getMessage());
		}
		return map;
	}

	private Map extractMap(String sResults,String strFilter) throws JsonMappingException, JsonProcessingException {
		Map <String,String> mapResults = new HashMap<String, String>();
		ObjectMapper mapper = new ObjectMapper();
		JSONObject obj = new JSONObject(sResults);
		String sCompany = obj.getJSONObject("network").toString();
		JSONObject obj1 = new JSONObject(sCompany);
		map = mapper.readValue(sCompany, Map.class);
		String k;
		Object v;
		for (Entry<String, Object> entry : map.entrySet()) {
			k = entry.getKey();
			v = entry.getValue();
			if(k.contains(strFilter)) {
				System.out.println("Key: " + k + ", Value: " + v);
				String sPattern = v.toString().replace("{", "").replace("}", "");
				String [] array = sPattern.split(",");
				for(int a=0;a<array.length;a++) {
					String [] sBuffer = array[a].trim().split("=");
					
					mapResults.put(sBuffer[0], sBuffer[1].toString());
				}
				//System.out.println(map2);	
			}
		}
		return mapResults;
	}

}
