import { useState } from "react";

function SortingBar({ children }) {
  return <div className="nav-container">{children}</div>;
}

export default SortingBar;

export function StatusButton({
  onAllStatus,
  onOpenStatus,
  onCloseStatus,
  activeButton,
}) {
  return (
    <div className="status">
      <span>وضعیت</span>
      <button
        value="1"
        className={` button-secondary ${activeButton === "1" && "button-active"}`}
        onClick={(e) => onAllStatus(e.target.value)}
      >
        همه
      </button>
      <button
        value="2"
        className={` button-secondary ${activeButton === "2" && "button-active"}`}
        onClick={(e) => onOpenStatus(e.target.value)}
      >
        باز
      </button>
      <button
        value="3"
        className={` button-secondary ${activeButton === "3" && "button-active"}`}
        onClick={(e) => onCloseStatus(e.target.value)}
      >
        بسته
      </button>
    </div>
  );
}

export function SelectDate({ sortDate, setSortDate }) {
  return (
    <div>
      <select value={sortDate} onChange={(e) => setSortDate(e.target.value)}>
        <option value="latest">جدیدترین</option>
        <option value="earliest">قدیمی ترین</option>
      </select>
    </div>
  );
}

export function SelectCategory({ category, setCategory }) {
  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="webDevelopment">طراحی وب</option>
        <option value="designing"> طراحی ui ux</option>
        <option value="all">همه</option>
      </select>
    </div>
  );
}
