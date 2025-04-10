const toMainPage = document.getElementById("toMainPage");
toMainPage.addEventListener("click", () => {
  location.pathname = "/index.html";
});

const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 74,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
];

const typeSelect = document.getElementById("type");
const categorySelect = document.getElementById("category");
const distanceSelect = document.getElementById("distance");
const eventsContainer = document.getElementById("events");

function showEvents() {
  eventsContainer.innerHTML = "";
  const type = typeSelect.value;
  const category = categorySelect.value;
  const distance = distanceSelect.value;

  let filteredEvents = eventsStore.filter((event) => {
    if (category !== "all" && event.category !== category) {
      return false;
    }
    if (distance !== "all") {
      if (distance === "25" && event.distance > 25) return false;
      if (distance === "50" && event.distance > 50) return false;
      if (distance === "100" && event.distance > 100) return false;
    }
    if (type !== "all" && event.type !== type) {
      return false;
    }
    return true;
  });

  eventsContainer.innerHTML = "";
  filteredEvents.forEach((event) => {
    const eventElement = document.createElement("div");
    eventElement.classList.add("event");
    eventElement.innerHTML = `
            <img src=${event.image} alt=${event.title}/>
            <div class="event-info">
              <p class="event-date">${formatEventDate(event.date)}<p>
              <h3>${event.title}</h3>
              <p class="event-category">${event.category}</p>
              ${
                event.type === "online"
                  ? `<div class="event-online">
                      <img src="assets/img/svg/camera.svg" alt="Camera icon"
                        class="event-online-icon"/>
                      <span>Online Event</span>
                    </div>`
                  : ""
              }
              ${
                event.attendees !== undefined
                  ? `<p class="event-attendees">${event.attendees} attendees</p>`
                  : ""
              }
            </div>
      `;
    eventsContainer.appendChild(eventElement);
  });
}

function formatEventDate(date) {
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
    timeZoneName: "short",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date).toUpperCase();
}

categorySelect.addEventListener("change", showEvents);
typeSelect.addEventListener("change", showEvents);
distanceSelect.addEventListener("change", showEvents);
showEvents();
