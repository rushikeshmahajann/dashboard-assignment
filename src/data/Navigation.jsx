import Squares from "../../icons/Squares";
import History from "../../icons/History.jsx";
import Calendar from "../../icons/Calendar.jsx";
import Appointment from "../../icons/Appointment.jsx";
import Statistics from "../../icons/Statistics.jsx";
import Chat from "../../icons/Chat.jsx";
import Support from "../../icons/Support.jsx";

export const navigation = [
  {
    category: "General",
    subItems: [
      {
        title: "Dashboard",
        id: 1,
        icon: <Squares />,
      },
      {
        title: "History",
        id: 2,
        icon: <History />,
      },
      {
        title: "Calendar",
        id: 3,
        icon: <Calendar />,
      },
      {
        title: "Appointments",
        id: 4,
        icon: <Appointment />,
      },
      {
        title: "Statistics",
        id: 5,
        icon: <Statistics />,
      },
    ],
  },
  {
    category: "Tools",
    subItems: [
      {
        title: "Chat",
        id: 6,
        icon: <Chat />,
      },
      {
        title: "Support",
        id: 7,
        icon: <Support />,
      },
    ],
  },
];
