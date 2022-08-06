package sufyan.imagediscern.rest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import sufyan.imagediscern.services.ExtractData;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RequestMapping("/image")
public class ImageUpload {
	
	@Autowired
	private ExtractData extractData;
	
	@Autowired
	private Gson gson;

	@PostMapping("/extract")
	public Map<String, ArrayList<String>> upload(
			@RequestParam(value = "image") MultipartFile image,
			@RequestParam(value = "selectedOptions") String selectedOptions
	) throws IOException {
		Map<String, Boolean> selectedOptionsMap = gson.fromJson(selectedOptions, Map.class);
        Map<String, ArrayList<String>> resultSet = new HashMap<String, ArrayList<String>>();
        resultSet = extractData.extractData(selectedOptionsMap, image);
        return resultSet;
	}
}
