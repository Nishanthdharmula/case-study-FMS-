package com.flightdetails.api.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.flightdetials.api.model.Flight;

public interface FlightRepository extends MongoRepository<Flight, Integer>{

	public List<Flight> findByFrom(String from);
	
	public List<Flight> findByFlightName(String flightName);
	
	public List<Flight> findByTo(String to);
	
	List<Flight> findByFromAndToAndDate(String from, String to, String date);
	
	Flight findByid(int id);
}
