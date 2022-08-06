package sufyan.imagediscern.services;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Map;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.google.gson.internal.LinkedTreeMap;

@Component
public class OCRService {
	
	@Autowired
	private Gson gson;
	
	@Value("${freeOcrApiUrl}")
	private String freeOcrApiUrl;
	
	@Value("${apiKey}")
	private String apiKey;

	public String getTextFromImage(MultipartFile image) throws IOException {
		HttpClient hcl=HttpClients.createDefault();
		HttpPost h=new HttpPost(freeOcrApiUrl);
		File file = new File(image.getOriginalFilename());
		MultipartEntityBuilder builder = MultipartEntityBuilder.create();
		StringBody sb=new StringBody(new String(image.getBytes()),ContentType.IMAGE_PNG);
		builder.setMode(HttpMultipartMode.STRICT);
		builder.addBinaryBody("file", image.getInputStream(),ContentType.IMAGE_PNG,image.getOriginalFilename());
	    h.addHeader("apikey", apiKey);
	    org.apache.http.HttpEntity hc= builder.build();
	    h.setEntity(hc);
	    HttpResponse res= (HttpResponse) hcl.execute(h);
	    String result= EntityUtils.toString(res.getEntity());
	    Map<String, ArrayList<LinkedTreeMap>> resultMap = gson.fromJson(result, Map.class);
	    String text = (String) resultMap.get("ParsedResults").get(0).get("ParsedText");
		return text;
	}
}
