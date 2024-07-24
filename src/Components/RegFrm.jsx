import { useState } from "react";

export const RegFrm = () => {
  const [user, setUser] = useState({
    name: "Sajeewan",
    age: 25,
    gender: "Male",
    isMarried: true,
    country: "India",
    bio: "About yourself",
  });
  function changeHandler(e) {
    const name = e.target.name;
    // console.log(name);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUser({ ...user, [name]: value });
  }
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{user.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td>Marital Status</td>
            <td>{user.isMarried ? "Married" : "Not Married"}</td>
          </tr>
          <tr>
            <td>Contry</td>
            <td>{user.country}</td>
          </tr>
          <tr>
            <td>About yourself</td>
            <td>{user.bio}</td>
          </tr>
        </tbody>
      </table>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          value={user.name}
          onChange={changeHandler}
          name="name"
        />
        <input
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={changeHandler}
          name="age"
        />
        <div className="gender">
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              checked={user.gender == "Male"}
              value="Male"
              onChange={changeHandler}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              checked={user.gender == "Female"}
              value="Female"
              onChange={changeHandler}
            />
            Female
          </label>
        </div>
        <label htmlFor="isMarried">
          <input
            type="checkbox"
            id="isMarried"
            checked={user.isMarried}
            onChange={changeHandler}
            name="isMarried"
          />
          Is Married
        </label>
        <div className="select-div">
          <label htmlFor="country">Select Country : </label>
          <select
            name="country"
            id="country"
            value={user.country}
            onChange={changeHandler}
          >
            <option value="India">India</option>
            <option value="Us">United States</option>
            <option value="UK">United KIngdom</option>
            <option value="German">German</option>
          </select>
        </div>
        <textarea
          name="bio"
          cols="30"
          rows="5"
          placeholder="About yourself"
          onChange={changeHandler}
          value={user.bio}
        />
      </form>
    </>
  );
};
