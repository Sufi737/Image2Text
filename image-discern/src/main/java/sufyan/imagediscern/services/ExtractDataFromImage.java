package sufyan.imagediscern.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
@Scope(BeanDefinition.SCOPE_PROTOTYPE)
public class ExtractDataFromImage implements ExtractData{
	
	@Autowired
	private OCRService ocrService;
	
	@Autowired
	private UrlService urlService;
	
	@Autowired
	private DetectLanguageService detectLanguageService;
	
	@Override
	public Map<String, ArrayList<String>> extractData(Map<String, Boolean> selectedOptions, MultipartFile image) {
		Map<String, ArrayList<String>> resultSet = new HashMap<String, ArrayList<String>>();
		ArrayList<String> text = new ArrayList<String>();
		ArrayList<String> urls = new ArrayList<String>();
		ArrayList<String> detected_languages = new ArrayList<String>();
		String imageText;
		try {
			imageText = ocrService.getTextFromImage(image);
			if (selectedOptions.get("text")) {
				text.add(imageText);
			}
			if (selectedOptions.get("url")) {		
				urls = urlService.extractUrls(imageText);
			}
			if (selectedOptions.get("detect_language")) {
				detected_languages = detectLanguageService.detectLanguage(imageText);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		resultSet.put("text", text);
		resultSet.put("url", urls);
		resultSet.put("detected_languages", detected_languages);
		return resultSet;
	}
}
