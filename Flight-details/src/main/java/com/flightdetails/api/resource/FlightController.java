package com.flightdetails.api.resource;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.flightdetails.api.exception.ResourceNotFoundException;
import com.flightdetails.api.repository.FlightRepository;
import com.flightdetails.api.service.SequenceService;
import com.flightdetials.api.model.Flight;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/flight")
public class FlightController {
	@Autowired
	private FlightRepository repository;
	
	@Autowired
	private SequenceService service;
	
	@PostMapping("/addFlight")
	public Flight save(@RequestBody Flight flight){
		//generate sequence
		flight.setId(service.getSequenceNumber(Flight.SEQUENCE_NAME));
		return repository.save(flight);
	}

    @GetMapping("/findAllFlights")
    public List<Flight> getAllFlight() {
        return repository.findAll();
    }
	
	/*@PostMapping("/addFlight")
	public String saveFlight(@RequestBody Flight flight) {
		repository.save(flight);
		return "Added flight with id : " + flight.getId() ;
		
	}
	
	@GetMapping("/findAllFlights")
	public List<Flight> getFlights() {
		return repository.findAll();
	}*/

	/*@GetMapping("/findAllFlights/{id}")
	public Optional<Flight> getFlight(@PathVariable int id) {
		return repository.findById(id);
			
	}*/
	
	@GetMapping("/findAllFlights/{id}")
	public ResponseEntity<Flight> getFlightById(@PathVariable(value = "id") int id) throws ResourceNotFoundException {
		Flight flight = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Flight does not exist with id:" + id));
		return ResponseEntity.ok().body(flight);
			
	}
	
	@GetMapping("/Flight/{flightName}")
	public List<Flight> getFlightss(@PathVariable String flightName) {
		return repository.findByTo(flightName);
			
	}
	
	@GetMapping("/Flights/{from}")
	public List<Flight> getFlight(@PathVariable String from) {
		return repository.findByFrom(from);
			
	}
	
	@GetMapping("/Flight/{to}")
	public List<Flight> getFlights(@PathVariable String to) {
		return repository.findByTo(to);
			
	}
	
	@GetMapping("/Flight/{from}/{to}/{date}")
	public List<Flight> getFlights(@PathVariable String from , String to, String date){
		return repository.findByFromAndToAndDate(from, to, date);
	}
	
	
	@PutMapping("/flights/{id}")
	public ResponseEntity<Flight> updateFlight(@PathVariable int id, @RequestBody Flight flightDetails) {
		Flight flight = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Flight does not exist with id:" + id ));
				
		flight.setId(flightDetails.getflightId());
		flight.setFlightName(flightDetails.getFlightName());
		flight.setFrom(flightDetails.getFrom());
		flight.setTo(flightDetails.getTo());
		flight.setDate(flightDetails.getDate());
		flight.setTime(flightDetails.getTime());
		flight.setPrice(flightDetails.getPrice());
		
		Flight updatedFlight = repository.save(flight);
		return ResponseEntity.ok(updatedFlight);
		
	}

	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteFlight(@PathVariable int id) throws Exception {
		repository.deleteById(id);
		return ResponseEntity.ok("Flight deleted with id : " + id);
	}
	
	

}
