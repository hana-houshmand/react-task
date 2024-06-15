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
    deadline: "2024-12-23T12:55:48.740Z",
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
    deadline: "2022-12-23T12:55:48.740Z",
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
    deadline: "2021-12-23T12:55:48.740Z",
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
    deadline: "2020-12-23T12:55:48.740Z",
    createdAt: "2020-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
];

function App() {
  const [isHidden, setIsHidden] = useState(false);
  const [sortDate, setSortDate] = useState("latest");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");

  const handleSortDate = (a, b) => {
    switch (sortDate) {
      case "earliest":
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      case "latest":
        return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();

      default:
        throw new Error("sorting does not exit");
    }
  };

  const filteredData = projects
    .filter((p) => (status === "all" ? true : p.status == status))
    .filter((p) =>
      category === "all" ? true : p.category.englishTitle == category
    )
    .sort(handleSortDate);

  // if (sortDate === "earliest") {
  //   sortedProject = deepCopy.sort(
  //     (a, b) => Number(new Date(a.deadline)) - Number(new Date(b.deadline))
  //   );
  // }

  // if (sortDate === "latest") {
  //   sortedProject = deepCopy.sort(
  //     (a, b) => Number(new Date(b.deadline)) - Number(new Date(a.deadline))
  //   );
  // }

  // if (category === "webDevelopment")
  //   sortedProject = deepCopy.filter(
  //     (p) => p.category.englishTitle === "web development"
  //   );

  // if (category === "designing")
  //   sortedProject = deepCopy.filter(
  //     (p) => p.category.englishTitle === "design-ui/ux"
  //   );
  // if (category === "all") sortedProject = status;

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
            <StatusButton setStatus={setStatus} status={status} />
            <SelectDate sortDate={sortDate} setSortDate={setSortDate} />
            <SelectCategory category={category} setCategory={setCategory} />
          </SortingBar>
        ) : (
          ""
        )}
        {isHidden ? <Table projects={filteredData} /> : ""}
      </div>
    </>
  );
}

export default App;
