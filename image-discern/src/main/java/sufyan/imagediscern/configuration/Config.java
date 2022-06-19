package sufyan.imagediscern.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

import com.google.gson.Gson;

import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;

@Configuration
@ComponentScan({"sufyan.imagediscern", "net.sourceforge.tess4j"})
public class Config {
	
	@Value("${DetectLanguage.LANGUAGES_ENDPOINT}")
	private String languageListEndpoint;

	@Bean
	public ITesseract TesseractService() {
		return new Tesseract();
	}
	
	@Bean
	public Gson GsonService() {
		return new Gson();
	}
	
	@Bean
	public WebClient detectLanguageClient() {
	    return WebClient.create(languageListEndpoint);
	}
	
}
