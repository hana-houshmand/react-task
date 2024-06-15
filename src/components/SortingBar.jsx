import { useState } from "react";

function SortingBar({ children }) {
  return <div className="nav-container">{children}</div>;
}

export default SortingBar;

export function StatusButton({ setStatus, status }) {
  return (
    <div className="status">
      <span>وضعیت</span>

      <button
        value="all"
        className={` button-secondary ${"all"=== status && "button-active"}`}
        onClick={(e) => setStatus(e.target.value)}
      >
        همه
      </button>
      <button
        value="OPEN"
        className={` button-secondary ${"OPEN" === status && "button-active"}`}
        onClick={(e) => setStatus(e.target.value)}
      >
        باز
      </button>
      <button
        value="CLOSED"
        className={` button-secondary ${ "CLOSED" === status && "button-active"}`}
        onClick={(e) => setStatus(e.target.value)}
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
        <option value="web development">طراحی وب</option>
        <option value="design-ui/ux"> طراحی ui ux</option>
        <option value="all">همه</option>
      </select>
    </div>
  );
}
