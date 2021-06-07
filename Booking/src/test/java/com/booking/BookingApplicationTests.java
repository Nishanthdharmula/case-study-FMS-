package com.booking;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

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

import com.booking.api.BookingApplication;
import com.booking.api.model.Bookings;


@SpringBootTest(classes = BookingApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ExtendWith(SpringExtension.class)
public class BookingApplicationTests {
	
	@Autowired
    private TestRestTemplate restTemplate;

    @LocalServerPort
    private int port;

    private String getRootUrl() {
        return "http://localhost:" + port;
    }

	@Test
	void contextLoads() {
	}
	
	@Test
	   public void testUpdateBooking() {
	       int id = 1;
	       Bookings booking = restTemplate.getForObject(getRootUrl() + "/booking/" + id, Bookings.class);
	       booking.setBookingId(1);
	       booking.setFlightId("1");
	       booking.setFirstNames("Chennai");
	       booking.setLastNames("Pune");
	       booking.setContact("2021-04-20");
	       booking.setGender("10:20:00");
	       booking.setBookingAmount(1000);
	       booking.setPnr(2);
	       
	       restTemplate.put(getRootUrl() + "/booking/" + id, booking);
	       Bookings updatedFlight = restTemplate.getForObject(getRootUrl() + "/booking/" + id, Bookings.class);
	       assertNotNull(updatedFlight);
	   }

   
   
   @Test
   public void testGetAllBookings() {
   HttpHeaders headers = new HttpHeaders();
      HttpEntity<String> entity = new HttpEntity<String>(null, headers);
      ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/findAllBookings",
      HttpMethod.GET, entity, String.class);  
      assertNotNull(response.getBody());
  }

  @Test
  public void testGetBookingById() {
	  Bookings booking = restTemplate.getForObject(getRootUrl() + "/findBookings/1", Bookings.class);
      System.out.println(booking.getFirstNames());
      assertNotNull(booking);
  }

   @Test
   public void testDeleteBooking() {
        int id = 2;
        Bookings flight = restTemplate.getForObject(getRootUrl() + "/delete/" + id, Bookings.class);
        assertNotNull(flight);
        restTemplate.delete(getRootUrl() + "/delete/" + id);
        try {
        	flight = restTemplate.getForObject(getRootUrl() + "/delete/" + id, Bookings.class);
        } catch (final HttpClientErrorException e) {
             assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
        }
   
}

}
