// Store the current month and year
let currentMonth = 0; // January (0-based index)
let currentYear = 2025;

// Function to generate the calendar for a given month and year
function generateCalendar(month, year) {
    const calendarBody = document.getElementById("calendar-body");
    const calendarTitle = document.getElementById("calendar-title");

    // Set the title (e.g., "January 2025")
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    calendarTitle.textContent = `${months[month]} ${year}`;

    // Clear the previous calendar
    calendarBody.innerHTML = "";

    // Get the first day of the month (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
    const firstDay = new Date(year, month, 1).getDay();

    // Get the number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("day-cell", "disabled");
        calendarBody.appendChild(emptyCell);
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement("div");
        dayCell.classList.add("day-cell");
        dayCell.textContent = day;

        // Add event listener to each day cell
        dayCell.onclick = () => alert(`You selected ${months[month]} ${day}, ${year}`);
        
        calendarBody.appendChild(dayCell);
    }
}

// Function to change the month (next or previous)
function changeMonth(direction) {
    currentMonth += direction;
    
    // If month goes out of bounds, adjust year
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    // Generate the new calendar for the updated month and year
    generateCalendar(currentMonth, currentYear);
}

// Initialize the calendar with the current month and year (January 2025)
generateCalendar(currentMonth, currentYear);
