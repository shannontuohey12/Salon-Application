// Get the current user from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    const appointment = JSON.parse(localStorage.getItem('appointment'));
    // Get the thank you message element
    const thankYouMessage = document.getElementById('thankYouMessage');

    // If the user exists, display a personalized thank you message
    if (user) {
        thankYouMessage.textContent = `Thank you for booking an appointment, ${user.firstName}!`;
    } else {
        thankYouMessage.textContent = 'Thank you for booking an appointment!';
    }

    if (appointment) {
        const thankYouParagraph = document.getElementById('thankYouParagraph');
        thankYouParagraph.textContent += ` Your appointment for ${appointment.service} on ${appointment.appointmentDate} at ${appointment.appointmentTime} has been received.`;
    }