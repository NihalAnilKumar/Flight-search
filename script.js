const airports = [
    { name: 'Tirupati', code: 'TIR', fullName: 'Tirupati International Airport', lat: 13.6324, lon: 79.4119 },
    { name: 'Visakhapatnam', code: 'VTZ', fullName: 'Visakhapatnam International Airport', lat: 17.7215, lon: 83.2203 },
    { name: 'Guwahati', code: 'GAU', fullName: 'Lokpriya Gopinath Bordoloi International Airport', lat: 26.1061, lon: 91.5859 },
    { name: 'Jorhat', code: 'JRH', fullName: 'Jorhat Airport', lat: 26.7313, lon: 94.1750 },
    { name: 'Patna', code: 'PAT', fullName: 'Jay Prakash Narayan Airport', lat: 25.5911, lon: 85.0880 },
    { name: 'Raipur', code: 'RPR', fullName: 'Swami Vivekananda Airport', lat: 21.1809, lon: 81.7399 },
    { name: 'Goa', code: 'GOI', fullName: 'Dabolim Airport (Goa)', lat: 15.3801, lon: 73.8397 },
    { name: 'Ahmedabad', code: 'AMD', fullName: 'Sardar Vallabhbhai Patel International Airport', lat: 23.0777, lon: 72.6348 },
    { name: 'Surat', code: 'STV', fullName: 'Surat International Airport', lat: 21.1148, lon: 72.7411 },
    { name: 'Shimla', code: 'SLV', fullName: 'Shimla Airport', lat: 31.0815, lon: 77.0682 },
    { name: 'Ranchi', code: 'IXR', fullName: 'Birsa Munda Airport', lat: 23.3149, lon: 85.3219 },
    { name: 'Jamshedpur', code: 'IXW', fullName: 'Sonari Airport', lat: 22.8118, lon: 86.1673 },
    { name: 'Bengaluru', code: 'BLR', fullName: 'Kempegowda International Airport (Bangalore)', lat: 13.1986, lon: 77.7066 },
    { name: 'Mangaluru', code: 'IXE', fullName: 'Mangalore International Airport', lat: 12.9613, lon: 74.8900 },
    { name: 'Kannur', code: 'CNN', fullName: 'Kannur International Airport', lat: 11.9165, lon: 75.5179 },
    { name: 'Kochi', code: 'COK', fullName: 'Cochin International Airport', lat: 10.1520, lon: 76.3902 },
    { name: 'Kozhikode', code: 'CCJ', fullName: 'Kozhikode International Airport', lat: 11.1395, lon: 75.9553 },
    { name: 'Thiruvananthapuram(Trivandrum)', code: 'TRV', fullName: 'Thiruvananthapuram International Airport (Trivandrum)', lat: 8.4821, lon: 76.9203 },
    { name: 'Bhopal', code: 'BHO', fullName: 'Raja Bhoj Airport', lat: 23.2875, lon: 77.3385 },
    { name: 'Gwalior', code: 'GWL', fullName: 'Rajmata Vijaya Raje Scindia Airport', lat: 26.2968, lon: 78.2274 },
    { name: 'Indore', code: 'IDR', fullName: 'Devi Ahilya Bai Holkar Airport', lat: 22.7253, lon: 75.8014 },
    { name: 'Mumbai(Bombay)', code: 'BOM', fullName: 'Chhatrapati Shivaji Maharaj International Airport (Bombay)', lat: 19.0887, lon: 72.8679 },
    { name: 'Nagpur', code: 'NAG', fullName: 'Dr. Babasaheb Ambedkar International Airport', lat: 21.0900, lon: 79.0543 },
    { name: 'Pune', code: 'PNQ', fullName: 'Pune Airport', lat: 18.5822, lon: 73.9197 },
    { name: 'Shillong', code: 'SHL', fullName: 'Shillong Airport', lat: 25.7030, lon: 91.9784 },
    { name: 'Dimapur', code: 'DMU', fullName: 'Dimapur Airport', lat: 25.8835, lon: 93.7712 },
    { name: 'Bhubaneswar', code: 'BBI', fullName: 'Biju Patnaik International Airport', lat: 20.2520, lon: 85.8173 },
    { name: 'Amritsar', code: 'ATQ', fullName: 'Sri Guru Ram Dass Jee International Airport', lat: 31.7064, lon: 74.8063 },
    { name: 'Jaipur', code: 'JAI', fullName: 'Jaipur International Airport', lat: 26.8241, lon: 75.8005 },
    { name: 'Jodhpur', code: 'JDH', fullName: 'Jodhpur Airport', lat: 26.2515, lon: 73.0460 },
    { name: 'Gangtok', code: 'PYG', fullName: 'Pakyong Airport', lat: 27.3280, lon: 88.6180 },
    { name: 'Chennai', code: 'MAA', fullName: 'Chennai International Airport', lat: 12.9940, lon: 80.1717 },
    { name: 'Coimbatore', code: 'CJB', fullName: 'Coimbatore International Airport', lat: 11.0300, lon: 77.0434 },
    { name: 'Tiruchirappalli(Trichi)', code: 'TRZ', fullName: 'Tiruchirappalli International Airport (Trichi)', lat: 10.7654, lon: 78.7098 },
    { name: 'Hyderabad', code: 'HYD', fullName: 'Rajiv Gandhi International Airport', lat: 17.2405, lon: 78.4294 },
    { name: 'Agartala', code: 'IXA', fullName: 'Maharaja Bir Bikram Airport', lat: 23.8860, lon: 91.2404 },
    { name: 'Ayodhya', code: 'AYJ', fullName: 'Maharishi Valmiki International Airport', lat: 26.7955, lon: 82.1931 },
    { name: 'Lucknow', code: 'LKO', fullName: 'Chaudhary Charan Singh International Airport', lat: 26.7614, lon: 80.8893 },
    { name: 'Varanasi', code: 'VNS', fullName: 'Lal Bahadur Shastri International Airport', lat: 25.4498, lon: 82.8590 },
    { name: 'Dehradun', code: 'DED', fullName: 'Dehradun Airport', lat: 30.1896, lon: 78.1800 },
    { name: 'Kolkata', code: 'CCU', fullName: 'Netaji Subhas Chandra Bose International Airport (Calcutta)', lat: 22.6540, lon: 88.4467 },
    { name: 'Port Blair', code: 'IXZ', fullName: 'Veer Savarkar International Airport', lat: 11.6415, lon: 92.7296 },
    { name: 'Chandigarh', code: 'IXC', fullName: 'Shaheed Bhagat Singh International Airport', lat: 30.6737, lon: 76.7887 },
    { name: 'Delhi NCR', code: 'DEL', fullName: 'Indira Gandhi International Airport', lat: 28.5562, lon: 77.1000 },
    { name: 'Srinagar', code: 'SXR', fullName: 'Srinagar International Airport', lat: 33.9871, lon: 74.7740 },
    { name: 'Jammu', code: 'IXJ', fullName: 'Jammu Airport', lat: 32.6893, lon: 74.8377 },
    { name: 'Leh', code: 'IXL', fullName: 'Kushok Bakula Rimpochee Airport', lat: 34.1367, lon: 77.5395 },
    { name: 'Agatti Island(Lakshadweep)', code: 'AGX', fullName: 'Agatti Airport (Lakshadweep)', lat: 10.8244, lon: 72.1762 },
    { name: 'Puducherry(Pondicherry)', code: 'PNY', fullName: 'Puducherry Airport (Pondicherry)', lat: 11.9680, lon: 79.8101 }
];

const AIRPLANE_SPEED = 850;

function displayRecommendations(input, list) {
    const suggestions = filterAirports(input);
    list.innerHTML = '';
    suggestions.forEach(airport => {
        const option = document.createElement('option');
        option.value = `${airport.code} (${airport.fullName})`;
        list.appendChild(option);
    });
    if (suggestions.length === 0) {
        const option = document.createElement('option');
        option.value = 'Airport/City not serviced by the airline';
        list.appendChild(option);
    }
}

function filterAirports(input) {
    const searchTerm = input.toLowerCase();
    const filteredAirports = airports.filter(airport => {
        const airportName = airport.fullName.toLowerCase();
        return airportName.includes(searchTerm);
    });

    return filteredAirports;
}


function displayFlightResults() {
    const tripType = document.getElementById('trip-type').value;
    const originInputValue = document.getElementById('origin').value.trim().toLowerCase();
    const destinationInputValue = document.getElementById('destination').value.trim().toLowerCase();

    const originCode = originInputValue.substring(0, originInputValue.indexOf(' '));
    const destinationCode = destinationInputValue.substring(0, destinationInputValue.indexOf(' '));

    calculateAndDisplayFlights(originCode, destinationCode, 'flight-results-container', tripType);

    if (tripType === 'Round-Trip') {
        const returnDate = document.getElementById('return-date').value;
        const returnResultsContainer = document.getElementById('return-flight-results-container');
        if (returnResultsContainer) {

            returnResultsContainer.style.display = 'block';
            calculateAndDisplayFlights(destinationCode, originCode, 'return-flight-results-container', returnDate, tripType);
        } else {
            console.error("Return flight results container not found.");
        }
    }
}

function calculateAndDisplayFlights(originInput, destinationInput, containerId, date, tripType) {
    const resultsContainer = document.getElementById(containerId);
    resultsContainer.innerHTML = '';

    const originAirport = airports.find(airport => airport.code.toUpperCase() === originInput.toUpperCase());
    const destinationAirport = airports.find(airport => airport.code.toUpperCase() === destinationInput.toUpperCase());

    console.log("Origin Airport:", originAirport, "Destination Airport:", destinationAirport);

    if (!originAirport || !destinationAirport) {
        const errorBox = document.createElement('div');
        errorBox.textContent = 'Origin or destination not found.';
        resultsContainer.appendChild(errorBox);
        return;
    }

    const distance = calculateDistance(
        originAirport.lat,
        originAirport.lon,
        destinationAirport.lat,
        destinationAirport.lon
    );

    console.log("Distance between airports:", distance);

    const flightDurationHours = distance / AIRPLANE_SPEED;
    const flightTypeHeader = document.createElement('h3');
    flightTypeHeader.classList.add('flight-type-header');
    if (tripType === 'Round-Trip') {
        flightTypeHeader.textContent = 'Returning Flights';
    } else {
        flightTypeHeader.textContent = 'Departing Flights';
    }
    resultsContainer.appendChild(flightTypeHeader);

    for (let i = 0; i < 4; i++) {
        const departureDate = new Date(document.getElementById('date').value);
        const departureTime = getRandomTimeInDate(departureDate);
        const arrivalTime = new Date(departureTime.getTime() + (flightDurationHours * 60 * 60 * 3000));

        const fuelConsumption = 4;
        const fuelPricePerLiter = 1;
        const flightCost = (distance * fuelConsumption * fuelPricePerLiter).toFixed(2);

        const flightResultBox = document.createElement('button');
        flightResultBox.classList.add('flight-result');
        flightResultBox.setAttribute('type', 'button');
        flightResultBox.addEventListener('click', function () {
            const selectedFlights = document.querySelectorAll('.flight-result.selected-flight');
            selectedFlights.forEach(flight => {
                flight.classList.remove('selected-flight');
            });
            flightResultBox.classList.toggle('selected-flight');
        });

        flightResultBox.innerHTML = `
            <div class="flight-details">
                <p><strong>Departure:</strong> ${departureTime.toLocaleString()}</p>
                <p><strong>Departure Airport:</strong> ${originAirport.fullName}</p>
                <p><strong>Arrival:</strong> ${arrivalTime.toLocaleString()}</p>
                <p><strong>Arrival Airport:</strong> ${destinationAirport.fullName}</p>
            </div>
            <div class="flight-cost">
                <p><strong>Flight Duration:</strong> ${formatDuration(flightDurationHours * 3)}</p>
                <p><strong>Flight Cost (INR):</strong> ${flightCost}</p>
            </div>
        `;

        resultsContainer.appendChild(flightResultBox);
    }

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Select Flight';
    submitButton.addEventListener('click', function () {
        const selectedFlight = document.querySelector('.flight-result.selected-flight');
        if (selectedFlight) {
            showSection('passenger-details');
        } else {
            alert('Please select a flight.');
        }
    });
    resultsContainer.appendChild(submitButton);
}

document.getElementById('trip-type').addEventListener('change', function () {
    const tripType = this.value;
    const returnContainer = document.getElementById('return-flight-results-container');
    if (tripType === 'Round-Trip') {
        returnContainer.style.display = 'block';
    } else {
        returnContainer.style.display = 'none';
    }
});

function getRandomTimeInDate(date) {
    const randomHours = Math.floor(Math.random() * 24);
    const randomMinutes = Math.floor(Math.random() * 60);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), randomHours, randomMinutes, 0);
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

function formatDuration(hours) {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h} hours ${m} minutes`;
}

function displayBookingDetails() {
    const bookingDetailsContainer = document.getElementById('booking-details');
    const tripType = document.getElementById('trip-type').value;
    const passengers = document.getElementById('passengers').value;
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const returnDate = document.getElementById('return-date').value;

    let bookingDetailsHTML = `
    <div class="booking-info">
        <div class="booking-box">
            <p><strong>Trip Type:</strong> ${tripType}</p>
        </div>
        <div class="booking-box">
            <p><strong>Passengers:</strong> ${passengers}</p>
        </div>
        <div class="booking-box">
            <p><strong>Origin:</strong> ${origin}</p>
        </div>
        <div class="booking-box">
            <p><strong>Destination:</strong> ${destination}</p>
        </div>
        <div class="booking-box">
            <p><strong>Travel Date:</strong> ${date}</p>
        </div>
    `;

    if (tripType === 'Round-Trip') {
        bookingDetailsHTML += `
        <div class="booking-box">
            <p><strong>Return Date:</strong> ${returnDate}</p>
        </div>
    `;
    }
    bookingDetailsHTML += `</div>`;
    bookingDetailsContainer.innerHTML = bookingDetailsHTML;
}

document.getElementById('flight-btn').addEventListener('click', function(event) {
    event.preventDefault();
    var numPassengers = document.getElementById('passengers').value;
    initPassengerDetailsPage(numPassengers);
});

function initPassengerDetailsPage(numPassengers) {
    var passengerDetailsSection = document.getElementById('passenger-details');
}


document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const loadingPage = document.getElementById('loadingPage');
    const flightBtn = document.getElementById('flight-btn');

    flightBtn.addEventListener('click', function (event) {
        event.preventDefault();
        if (checkInputs()) {
            loadingPage.style.display = 'block';
            setTimeout(() => {
                loadingPage.style.display = 'none';
                showSection('flight-results');
                displayBookingDetails();
                displayFlightResults();
            }, 2000);
        }
    });

    function checkInputs() {
        const originInputValue = document.getElementById('origin').value.trim().toLowerCase();
        const destinationInputValue = document.getElementById('destination').value.trim().toLowerCase();
        const tripTypeSelect = document.getElementById('trip-type');
        const dateInput = document.getElementById('date');
        const returnDateInput = document.getElementById('return-date');

        if (originInput.value === '' || destinationInput.value === '' || dateInput.value === '') {
            alert('Please fill in all required fields.');
            return false;
        }

        const originCode = originInputValue.substring(0, originInputValue.indexOf(' '));
        const destinationCode = destinationInputValue.substring(0, destinationInputValue.indexOf(' '));

        if (originCode === destinationCode) {
            alert('Origin and destination cannot be the same. Please choose different locations.');
            return false;
        }

        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        if (selectedDate < today) {
            alert('Please select a valid future date.');
            return false;
        }

        if (tripTypeSelect.value === 'Round-Trip' && returnDateInput.value !== '') {
            const returnDate = new Date(returnDateInput.value);
            if (returnDate < selectedDate) {
                alert('Return date should be after the departure date.');
                return false;
            }
        }
        return true;
    }

    const originInput = document.getElementById('origin');
    const destinationInput = document.getElementById('destination');
    const originDatalist = document.getElementById('origin-datalist');
    const destinationDatalist = document.getElementById('destination-datalist');
    const tripTypeSelect = document.getElementById('trip-type');
    const returnDateContainer = document.getElementById('return-date-container');
    const returnDateInput = document.getElementById('return-date');
    const contactBtn = document.getElementById('contact-us-btn');
    const contactModal = document.getElementById('contact-modal');
    const modalContent = document.querySelector('.modal-content');
    const modalClose = document.querySelector('.close');
    const bookBtn = document.getElementById('book-btn');
    const checkInBtn = document.getElementById('check-in-btn');
    const servicesBtn = document.getElementById('services-btn');
    const checkInSubmitBtn = document.getElementById('check-in-submit-btn');

    function toggleReturnDateInput() {
        returnDateContainer.style.display = (tripTypeSelect.value === 'Round-Trip') ? 'block' : 'none';
    }

    tripTypeSelect.addEventListener('change', function () {
        toggleReturnDateInput();
    });

    originInput.addEventListener('input', function () {
        displayRecommendations(originInput.value, originDatalist);
    });

    destinationInput.addEventListener('input', function () {
        displayRecommendations(destinationInput.value, destinationDatalist);
    });

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
    returnDateInput.setAttribute('min', today);

    toggleReturnDateInput();

    const sections = document.querySelectorAll('.page-section');

    contactBtn.addEventListener('click', function () {
        contactModal.style.display = 'block';
    });

    modalClose.addEventListener('click', function () {
        contactModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });

    bookBtn.addEventListener('click', function () {
        showSection('book-flights');
    });

    checkInBtn.addEventListener('click', function () {
        showSection('check-in');
    });
    let isCheckedIn = false;

    checkInSubmitBtn.addEventListener('click', function (event) {
        event.preventDefault();
        if (isCheckedIn) {
            createModal('Check-In', 'You have already checked in.');
        } else {
            const scheduledFlightTime = new Date('2024-04-12T12:00:00');
            const currentTime = new Date();
            const timeDifference = scheduledFlightTime.getTime() - currentTime.getTime();
            const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
            if (hoursDifference > 24) {
                const checkInStartTime = new Date(scheduledFlightTime.getTime() - (24 * 60 * 60 * 1000));
                createModal('Check-In', 'Check-in starts at ' + checkInStartTime.toLocaleString());
            } else {
                createModal('Check-In', 'Flight Found: 48 minutes to take-off');
            }
            isCheckedIn = true;
        }
    });

    function createModal(title, message) {
        modalContent.innerHTML = '';

        const modalTitle = document.createElement('h2');
        modalTitle.textContent = title;

        const modalMessage = document.createElement('p');
        modalMessage.textContent = message;

        const closeButton = document.createElement('span');
        closeButton.innerHTML = '&times;';
        closeButton.className = 'close';
        closeButton.addEventListener('click', function () {
            contactModal.style.display = 'none';
        });

        modalContent.appendChild(closeButton);
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalMessage);

        contactModal.style.display = 'block';
    }

    const passengerDetailsPage = document.getElementById('passenger-details');
    const checkoutPage = document.getElementById('checkout');
    const passengerForm = document.getElementById('passenger-form');
    const passengerInfoContainer = document.getElementById('passenger-info-container');

    let numPassengers = 0;

    

    function validatePassengerInputs() {
        const inputs = passengerInfoContainer.querySelectorAll('input, select');
        for (const input of inputs) {
            if (input.value.trim() === '') {
                alert('Please fill in all passenger details.');
                return false;
            }
        }
        return true;
    }

    passengerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validatePassengerInputs()) {
            passengerDetailsPage.style.display = 'none';
            checkoutPage.style.display = 'block';
        }
    });

    initPassengerDetailsPage();
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
};

var flightFare = 0;
var tripType = document.getElementById('trip-type').value;
var origin = document.getElementById('origin').value;
var destination = document.getElementById('destination').value;
var passengerCount = parseInt(document.getElementById('passengers').value);
var flightDetails = '';
displayFlightResults();
var flightResultBoxes = document.querySelectorAll('.flight-result');
flightResultBoxes.forEach(box => {
    box.addEventListener('click', function () {
        var flightCost = parseFloat(box.querySelector('.flight-cost').textContent.split(': ')[1]);
        flightFare += flightCost;
        updateTotalCost();
    });
});


