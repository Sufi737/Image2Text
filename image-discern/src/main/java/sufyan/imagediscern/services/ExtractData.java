package sufyan.imagediscern.services;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public interface ExtractData {
	public Map<String, ArrayList<String>> extractData(Map<String, Boolean> selectedOptions, MultipartFile imageBase64);
}
