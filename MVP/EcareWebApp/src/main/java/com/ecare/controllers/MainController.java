package com.ecare.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class MainController {

	@GetMapping("")
	public String home() {
		return "home.jsp";
	}

	@GetMapping("/prototype")
	public String prototype() {
		return "prototype.jsp";
	}

	@GetMapping("/guide")
	public String guide() {
		return "guide.jsp";
	}

	@GetMapping("/roadmap")
	public String roadmap() {
		return "roadmap.jsp";
	}

	// Comment out bottom getters after successful tests
	
	 @GetMapping("/test") public String test() { return "test/home-test.jsp"; }
	 
	 @GetMapping("/arells") public String arells() { return "test/arells.jsp"; }
	 
	 @GetMapping("/arells-roadmap") public String arellsRoadmap() { return "test/arells-roadmap.jsp"; }
	  
	 @GetMapping("/prototype-test") public String prototypeTest() { return
	 "test/prototype-test.jsp"; }
	  
	 @GetMapping("/guide-test") public String guideTest() { return
	 "test/guide-test.jsp"; }
 
	 @GetMapping("/roadmap-test") public String roadmapTest() { return
	 "test/roadmap-test.jsp"; }
	 

}
