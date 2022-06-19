package sufyan.imagediscern.services;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import com.detectlanguage.DetectLanguage;
import com.detectlanguage.Result;
import com.detectlanguage.errors.APIError;

@Component
public class DetectLanguageServiceImplementation implements DetectLanguageService {
	
	@Value("${DetectLanguage.API_KEY}")
	private String api_key;
	
	@Value("${DetectLanguage.REQUEST_TIMEOUT_DURATION_SECONDS}")
	private static int request_timeout_duration;
	private static final Duration REQUEST_TIMEOUT = Duration.ofSeconds(request_timeout_duration);

    private final WebClient localApiClient;

    @Autowired
    public DetectLanguageServiceImplementation(WebClient localApiClient) {
        this.localApiClient = localApiClient;
    }

	@Override
	public ArrayList<String> detectLanguage(String text) {
		List<Result> results;
		ArrayList<String> resultList = new ArrayList<String>();
		try {
			DetectLanguage.apiKey = api_key;
			results = DetectLanguage.detect(text);
			Result result = results.get(0);
			System.out.println("Language: " + result.language);
			System.out.println("Is reliable: " + result.isReliable);
			System.out.println("Confidence: " + result.confidence);
			String responseJson = localApiClient
	            .get()
	            .header("Authorization", "Bearer "+api_key)
	            .retrieve()
	            .bodyToMono(String.class)
	            .block(REQUEST_TIMEOUT);
			System.out.println(responseJson);
		} catch (APIError e) {
			e.printStackTrace();
		}
		return resultList;
	}

}
