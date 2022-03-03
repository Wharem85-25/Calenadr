export default [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2022, 3, 0),
    end: new Date(2022, 3, 1)
  },
  {
    id: 1,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3))
  },
  {
    id: 2,
    title: "Math test",
    start: new Date(2022, 2, 5),
    end: new Date(2022, 2, 6),
    desc: "Test fast",
    course: "Mathematics"
  },
  {
    id: 3,
    title: "Communication test",
    allDay: true,
    start: new Date(2022, 2, 8),
    end: new Date(2022, 2, 9),
    desc: "Long test",
    course: "Communication"
  },
];

