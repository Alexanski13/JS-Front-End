function scheduleMeetings(input) {
  const scheduledMeetings = {};

  input.forEach((meeting) => {
    const [day, name] = meeting.split(' ');

    if (scheduledMeetings.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      scheduledMeetings[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  });

  Object.entries(scheduledMeetings).forEach(([day, name]) => {
    console.log(`${day} -> ${name}`);
  });
}

scheduleMeetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
