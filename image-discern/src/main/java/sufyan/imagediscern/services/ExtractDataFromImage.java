package sufyan.imagediscern.services;

import java.awt.image.BufferedImage;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(BeanDefinition.SCOPE_PROTOTYPE)
public class ExtractDataFromImage implements ExtractData{
	
	@Autowired
	private TesseractService tesseractService;
	
	@Autowired
	private UrlService urlService;
	
	@Autowired
	private DetectLanguageService detectLanguageService;
	
	@Override
	public Map<String, ArrayList<String>> extractData(Map<String, Boolean> selectedOptions, BufferedImage image) {
		Map<String, ArrayList<String>> resultSet = new HashMap<String, ArrayList<String>>();
		ArrayList<String> text = new ArrayList<String>();
		ArrayList<String> urls = new ArrayList<String>();
		ArrayList<String> detected_languages = new ArrayList<String>();
		if (selectedOptions.get("text")) {
			text.add(tesseractService.getTextFromImage(image));
		}
		if (selectedOptions.get("url") && !text.isEmpty()) {
			urls = urlService.extractUrls(text.get(0));
		}
		if (selectedOptions.get("detect_language") && !text.isEmpty()) {
			detected_languages = detectLanguageService.detectLanguage(text.get(0));
		}
		resultSet.put("text", text);
		resultSet.put("url", urls);
		resultSet.put("translate_to_eng", null);
		resultSet.put("detected_languages", detected_languages);
		return resultSet;
	}
}
