package com.flightdetails.api;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

//import org.junit.Test;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.web.client.HttpClientErrorException;

import com.flightdetails.api.repository.FlightRepository;
import com.flightdetials.api.model.Flight;





@SpringBootTest(classes = FlightDetailsApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ExtendWith(SpringExtension.class)

public class FlightDetailsApplicationTests {
	
	@Autowired
    private TestRestTemplate restTemplate;

    @LocalServerPort
    private int port;

    private String getRootUrl() {
        return "http://localhost:" + port;
    }

	@Test
	public void contextLoads() {
	}

	 @Test
	   public void testUpdateFlight() {
	       int id = 1;
	       Flight flight = restTemplate.getForObject(getRootUrl() + "/flights/" + id, Flight.class);
	       flight.setId(1);
	       flight.setFlightName("Indigo");
	       flight.setFrom("Chennai");
	       flight.setTo("Pune");
	       flight.setDate("2021-04-20");
	       flight.setTime("10:20:00");
	       flight.setPrice(1000);
	       
	       restTemplate.put(getRootUrl() + "/flights/" + id, flight);
	       Flight updatedFlight = restTemplate.getForObject(getRootUrl() + "/flights/" + id, Flight.class);
	       assertNotNull(updatedFlight);
	   }
	   
	   @Test
	   public void testGetAllFlight() {
	   HttpHeaders headers = new HttpHeaders();
	      HttpEntity<String> entity = new HttpEntity<String>(null, headers);
	      ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/findAllflights",
	      HttpMethod.GET, entity, String.class);  
	      assertNotNull(response.getBody());
	  }

	  @Test
	  public void testGetFlightById() {
		  Flight flight = restTemplate.getForObject(getRootUrl() + "/findAllFlights/1", Flight.class);
	      System.out.println(flight.getFlightName());
	      assertNotNull(flight);
	  }
	  
	  @Test
	    public void testGetFlightsByFrom() {
		  Flight flight = restTemplate.getForObject(getRootUrl() + "/findflight/Chennai", Flight.class);
	      System.out.println(flight.getFrom());
	      assertNotNull(flight);
	  }
	  
	  @Test
	    public void testGetFlightsByTo() {
		  Flight flight = restTemplate.getForObject(getRootUrl() + "/findflight/Hydrabad", Flight.class);
	      System.out.println(flight.getTo());
	      assertNotNull(flight);
	  }

	   @Test
	   public void testDeleteFlight() {
	        int id = 2;
	        Flight flight = restTemplate.getForObject(getRootUrl() + "/delete/" + id, Flight.class);
	        assertNotNull(flight);
	        restTemplate.delete(getRootUrl() + "/delete/" + id);
	        try {
	        	flight = restTemplate.getForObject(getRootUrl() + "/delete/" + id, Flight.class);
	        } catch (final HttpClientErrorException e) {
	             assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
	        }
	   
	}
	
	
}
