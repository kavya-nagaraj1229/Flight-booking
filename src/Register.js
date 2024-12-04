// src/FlightBookingForm.js
import React, { useState } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";

const FlightBookingForm = () => {
  const basePrice = 1000;
  const [numPassengers, setNumPassengers] = useState(1);
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [showAlert, setShowAlert] = useState(false);
  
  // States for Name and District
  const [name, setName] = useState('');
  const [district, setDistrict] = useState('');

  // Handle the number of passengers change and update the total price
  const handlePassengerChange = (e) => {
    const passengers = parseInt(e.target.value, 10);
    setNumPassengers(passengers);
    setTotalPrice(basePrice * passengers);
  };

  // Handle Name change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Handle District change
  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setShowAlert(true);
  };

  return (
    <Container className="mt-5">
      <h2>Flight Booking Form</h2>

      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>Booking Successful!</Alert.Heading>
          <p>Your flight has been booked successfully.</p>
        </Alert>
      )}

      <Form onSubmit={handleSubmit} className="mt-4">
        {/* Name Field */}
        <Form.Group controlId="name">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </Form.Group>

        {/* District Field */}
        <Form.Group controlId="district">
          <Form.Label>District</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your district"
            value={district}
            onChange={handleDistrictChange}
            required
          />
        </Form.Group>

        {/* Number of Passengers */}
        <Form.Group controlId="numPassengers">
          <Form.Label>Number of Passengers</Form.Label>
          <Form.Control
            type="number"
            value={numPassengers}
            onChange={handlePassengerChange}
            min="1"
            required
          />
        </Form.Group>

        {/* Flight Class */}
        <Form.Group controlId="flightClass" className="mt-3">
          <Form.Label>Choose Flight Class</Form.Label>
          <Form.Control as="select">
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </Form.Control>
        </Form.Group>

        {/* Price Details */}
        <div className="mt-3">
          <h4>Price Details</h4>
          <p>Price per passenger: <i class="fa-solid fa-indian-rupee-sign"></i>{basePrice}</p>
          <p>Total Price: <i class="fa-solid fa-indian-rupee-sign"></i>{totalPrice}</p>
        </div>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="mt-3">
          Book Flight
        </Button>
      </Form>
    </Container>
  );
};

export default FlightBookingForm;
