package sufyan.imagediscern.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;

@Configuration
@ComponentScan({"sufyan.imagediscern", "net.sourceforge.tess4j"})
public class Config {

	@Bean
	public ITesseract TesseractService() {
		return new Tesseract();
	}
}
