// Get the form element
const form = document.querySelector('form');

// Listen for form submission
form.addEventListener('submit', (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Get the input values
  const eventId = form.elements.event-id.value;
  const eventDate = form.elements.event-date.value;
  const name = form.elements.name.value;
  const email = form.elements.participant-email.value;
  const phone = form.elements.participant-phone.value;

  // Validate the input values
  if (!eventId || !eventDate || !name || !email || !phone) {
    alert('Please fill in all the fields.');
    return;
  }

  // Create a booking object
  const booking = {
    eventId: event-id,
    eventDate: event-date,
    name: name,
    email: participant-email,
    phone: participant-phone
  };

  // Save the booking to local storage
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  bookings.push(booking);
  localStorage.setItem('bookings', JSON.stringify(bookings));

  //confirmation message
  alert('Thank you for your booking!');
  form.reset();
});
