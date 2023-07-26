import './Filter.css';

const Filter = ({ setFilter }) => {
  const handleChange = e => {
    const searchInput = e.target;
    const typedName = searchInput.value.trim();
    setFilter(typedName);
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        className="filter-input"
        type="text"
        name="searchName"
        title="Type the contact you want to find"
        onChange={handleChange}
      />
    </div>
  );
};
export default Filter;
