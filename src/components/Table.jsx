function Table({ projects }) {
  return (
    <table>
      <thead>
        <tr>
          <th>شماره</th>
          <th>عنوان پروژه</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>وضعیت</th>
          <th>دسته بندی</th>
        </tr>
      </thead>
      <tbody>
        <ShowProjects projects={projects} />
      </tbody>
    </table>
  );
}

export default Table;

function ShowProjects({ projects }) {
  const projectFlat = [...projects].flat();
  return projectFlat.map((p) => {
    return (
      <tr key={p._id}>
        <td>{p._id}</td>
        <td>{p.title}</td>
        <td>{p.budget}</td>
        <td>{new Date(p.deadline).toLocaleString("fa-IR")}</td>
        <td>
          <span className={p.status === "OPEN" ? "green" : "red"}>
            {" "}
            {p.status}
          </span>
        </td>
        <td>{p.category.title}</td>
      </tr>
    );
  });
}
