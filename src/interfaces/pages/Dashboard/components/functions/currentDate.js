const currentDate = new Date();
// gets the current day
export const currentDay = currentDate.toLocaleDateString("en-US", {
  weekday: "long",
});

const date = new Date();
export const currentTime = date.toLocaleTimeString("es-ES", {
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
});
