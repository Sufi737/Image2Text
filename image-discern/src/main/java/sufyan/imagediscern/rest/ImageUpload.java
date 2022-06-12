package sufyan.imagediscern.rest;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.TesseractException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/image")
public class ImageUpload {
	@Autowired
	private ITesseract instance;

	public ImageUpload(ITesseract instance) {
		this.instance = instance;
	}
	
	@PostMapping("/upload")
	public String upload(@RequestParam(value = "image", required = false) MultipartFile image) throws IOException, TesseractException {
		byte[] imageData = image.getBytes();
		ByteArrayInputStream bais = new ByteArrayInputStream(imageData);
	    try {
	        BufferedImage bufferedImage =  ImageIO.read(bais);
			instance.setDatapath("/usr/share/tesseract-ocr/4.00/tessdata");
			String result = instance.doOCR(bufferedImage);
			System.out.println("OCR result: "+result);
			return result;
	    } catch (IOException e) {
	        throw new RuntimeException(e);
	    }
	}
}
