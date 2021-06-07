package com.booking.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.booking.api.model.Bookings;

@Repository
public interface BookingsRepository extends MongoRepository<Bookings, Integer> {

}
