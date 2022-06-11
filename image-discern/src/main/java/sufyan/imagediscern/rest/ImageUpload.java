package sufyan.imagediscern.rest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/image")
public class ImageUpload {

	@PostMapping("/upload")
	public String upload() {
		return "endpoint working";
	}
}
