import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import SortingBar, {
  SelectCategory,
  SelectDate,
  StatusButton,
} from "./components/SortingBar";

const projects = [
  {
    _id: 1,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "CLOSED",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 10000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 2,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2022-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },

  {
    _id: 3,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "CLOSED",
    category: {
      id: 3,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2021-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 4,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "OPEN",
    category: {
      id: 4,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 10000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2020-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
];

function App() {
  const [isHidden, setIsHidden] = useState(false);
  const [sortDate, setSortDate] = useState("latest");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState(projects);
  const [activeButton, setActiveButton] = useState("1");

  const deepCopy = JSON.parse(JSON.stringify(projects));

  let sortedProject = projects;

  if (sortDate === "earliest") {
    sortedProject = projects.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
    console.log(sortedProject);
  }

  if (sortDate === "latest") {
    sortedProject = projects.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  if (category === "webDevelopment")
    sortedProject = projects.filter(
      (p) => p.category.englishTitle === "web development"
    );

  if (category === "designing")
    sortedProject = projects.filter(
      (p) => p.category.englishTitle === "design-ui/ux"
    );
  if (category === "all") sortedProject = status;

  const handleOpenStatus = (value) => {
    setActiveButton(value);
    const sortedStatus = projects.filter((p) => p.status === "OPEN");
    setStatus(sortedStatus);
  };

  const handleCloseStatus = (value) => {
    setActiveButton(value);
    console.log(value);
    const sortedStatus = projects.filter((p) => p.status === "CLOSED");
    setStatus(sortedStatus);
  };

  const handleAllStatus = (value) => {
    setActiveButton(value);
    console.log(value);
    setStatus(projects);
  };

  const handleClick = () => {
    setIsHidden(true);
  };

  return (
    <>
      <h1>لیست پروژه ها</h1>
      <button className={isHidden ? "display" : "button"} onClick={handleClick}>
        نشان دادن پروژه ها
      </button>

      <div>
        {isHidden ? (
          <SortingBar>
            <StatusButton
              activeButton={activeButton}
              onAllStatus={handleAllStatus}
              onCloseStatus={handleCloseStatus}
              onOpenStatus={handleOpenStatus}
            />
            <SelectDate sortDate={sortDate} setSortDate={setSortDate} />
            <SelectCategory category={category} setCategory={setCategory} />
          </SortingBar>
        ) : (
          ""
        )}
        {isHidden ? <Table projects={sortedProject} /> : ""}
      </div>
    </>
  );
}

export default App;
