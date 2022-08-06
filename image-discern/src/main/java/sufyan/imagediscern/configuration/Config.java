package sufyan.imagediscern.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.google.gson.Gson;

@Configuration
@ComponentScan({"sufyan.imagediscern", "net.sourceforge.tess4j"})
public class Config {
	
	@Bean
	public Gson GsonService() {
		return new Gson();
	}
	
}
