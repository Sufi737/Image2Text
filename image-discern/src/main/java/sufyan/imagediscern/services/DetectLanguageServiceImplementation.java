package sufyan.imagediscern.services;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.time.Duration;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import com.detectlanguage.DetectLanguage;
import com.detectlanguage.Result;
import com.detectlanguage.errors.APIError;
import com.google.gson.Gson;
import com.google.gson.internal.LinkedTreeMap;
import com.google.gson.stream.JsonReader;

@Component
public class DetectLanguageServiceImplementation implements DetectLanguageService {
	
	@Value("${DetectLanguage.API_KEY}")
	private String api_key;
	
	private Gson gson;
	
	@Autowired
	DetectLanguageServiceImplementation(Gson gson) {
		this.gson = gson;
	}

	@Override
	public ArrayList<String> detectLanguage(String text) {
		text="good morning brother صباح الخير اخي";
		List<Result> results;
		ArrayList<String> resultList = new ArrayList<String>();
		try {
			DetectLanguage.apiKey = api_key;
			results = DetectLanguage.detect(text);
			List<String> languageCodes = results
					.stream()
					.map(result -> result.language).collect(Collectors.toList());
		    BufferedReader bufferedReader = new BufferedReader(new FileReader("src/main/resources/languages_list.json"));
		    ArrayList<LinkedTreeMap<String, String>> languagesList = gson.fromJson(bufferedReader, ArrayList.class);
		    List<String> languages = new ArrayList<String>();
		    for (String languageCode: languageCodes) {
		    	LinkedTreeMap<String, String> languageName = languagesList
			    		.stream()
			    		.filter((language) -> language.get("code").equals(languageCode))
			    		.findFirst()
			    		.orElse(null);
		    	languages.add(languageName.get("name"));
		    }
		    System.out.println(languages);
		} catch (APIError e) {
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		return resultList;
	}

}
