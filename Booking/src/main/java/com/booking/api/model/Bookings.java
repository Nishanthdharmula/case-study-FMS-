package com.booking.api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Booking")
public class Bookings {
	
	@Transient
    public static final String SEQUENCE_NAME = "booking_sequence";
	@Transient
    public static final String SEQUENCE_PNR = "bookingpnr_sequence";
	@Id
	private int bookingId;
	private String firstNames;
	private String lastNames;
	private String contact;
	private String gender;
    private int pnr;
    private String flightId;
    private double bookingAmount=0;
	public int getBookingId() {
		return bookingId;
	}
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}
	public String getFirstNames() {
		return firstNames;
	}
	public void setFirstNames(String firstNames) {
		this.firstNames = firstNames;
	}
	public int getPnr() {
		return pnr;
	}
	public void setPnr(int pnr) {
		this.pnr = pnr;
	}
	public String getFlightId() {
		return flightId;
	}
	public void setFlightId(String flightId) {
		this.flightId = flightId;
	}
	public double getBookingAmount() {
		return bookingAmount;
	}
	public void setBookingAmount(double bookingAmount) {
		this.bookingAmount = bookingAmount;
	}
	
	public String getLastNames() {
		return lastNames;
	}
	public void setLastNames(String lastNames) {
		this.lastNames = lastNames;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public static String getSequenceName() {
		return SEQUENCE_NAME;
	}
	public static String getSequencePnr() {
		return SEQUENCE_PNR;
	}
	

	public Bookings(int bookingId, String firstNames, String lastNames, String contact, String gender, int pnr,
			String flightId, double bookingAmount) {
		super();
		this.bookingId = bookingId;
		this.firstNames = firstNames;
		this.lastNames = lastNames;
		this.contact = contact;
		this.gender = gender;
		this.pnr = pnr;
		this.flightId = flightId;
		this.bookingAmount = bookingAmount;
	}
	public Bookings() {
		super();
	}
	

}
