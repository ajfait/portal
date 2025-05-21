import React from "react";

const AddPersonForm = () => {
  return (
    <form className="text-neutral-800 bg-neutral-200 border border-neutral-800 rounded-md m-5 p-5">
      <h1 className="text-3xl font-bold">Add Person</h1>
      <div className="relative m-2 mt-5">
        <input
          className="peer border border-neutral-800 rounded-md mr-2 field-sizing-fixed w-sm placeholder-transparent"
          type="text"
          name="first_name"
          id="first_name"
          minlength="2"
          maxlength="50"
          placeholder="First Name"
        />
        <label
          className="absolute left-0 -top-5.5 transition-all peer-placeholder-shown:text-neutral-700 peer-placeholder-shown:top-0.5 peer-placeholder-shown:left-1.5 peer-focus:left-0 peer-focus:-top-5.5"
          for="first_name"
        >
          First Name
        </label>
      </div>
      <div className="relative m-2 mt-5">
        <input
          className="peer border border-neutral-800 rounded-md mr-2 field-sizing-fixed w-sm placeholder-transparent"
          type="text"
          name="last_name"
          id="last_name"
          minlength="2"
          maxlength="50"
          placeholder="Last Name"
        />
        <label
          className="absolute left-0 -top-5.5 transition-all peer-placeholder-shown:text-neutral-700 peer-placeholder-shown:top-0.5 peer-placeholder-shown:left-1.5 peer-focus:left-0 peer-focus:-top-5.5"
          for="last_name"
        >
          Last Name
        </label>
      </div>
      <div className="relative m-2 mt-5">
        <input
          className="peer border border-neutral-800 rounded-md mr-2 field-sizing-fixed w-sm placeholder-transparent"
          type="tel"
          name="phone"
          id="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Phone Number"
        />
        <label
          className="absolute left-0 -top-5.5 transition-all peer-placeholder-shown:text-neutral-700 peer-placeholder-shown:top-0.5 peer-placeholder-shown:left-1.5 peer-focus:left-0 peer-focus:-top-5.5"
          for="phone"
        >
          Phone Number
        </label>
      </div>
      <div className="relative m-2 mt-5">
        <input
          className="peer border border-neutral-800 rounded-md mr-2 field-sizing-fixed w-sm placeholder-transparent"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <label
          className="absolute left-0 -top-5.5 transition-all peer-placeholder-shown:text-neutral-700 peer-placeholder-shown:top-0.5 peer-placeholder-shown:left-1.5 peer-focus:left-0 peer-focus:-top-5.5"
          for="email"
        >
          Email Address
        </label>
      </div>
      <div className="relative m-2 mt-10">
        <select
          className="border border-neutral-800 rounded-md mr-2 field-sizing-fixed w-sm"
          id="role"
          name="role"
        >
          <option value=""></option>
          <option value="Foster">Foster</option>
          <option value="Volunteer">Volunteer</option>
        </select>
        <label className="absolute left-0 -top-5.5" for="role">
          Role
        </label>
      </div>
      <div className="m-2">
        <fieldset>
          <legend>Preferences</legend>
          <div>
            <input
              className="mr-2"
              type="checkbox"
              value="Pregnant"
              id="prefer_pregnant"
              name="preferences"
            />
            <label for="prefer_pregnant">Pregnant / nursing moms</label>
          </div>
          <div>
            <input
              className="mr-2"
              type="checkbox"
              value="Bottle"
              id="prefer_bottle"
              name="preferences"
            />
            <label for="prefer_bottle">Bottle fed kittens</label>
          </div>
          <div>
            <input
              className="mr-2"
              type="checkbox"
              value="Weaned"
              id="prefer_weaned"
              name="preferences"
            />
            <label for="prefer_weaned">Weaned kittens</label>
          </div>
          <div>
            <input
              className="mr-2"
              type="checkbox"
              value="Medical"
              id="prefer_medical"
              name="preferences"
            />
            <label for="prefer_medical">Medical needs</label>
          </div>
        </fieldset>
      </div>
      <div className="m-2">
        <fieldset>
          <legend>Admin</legend>
          <div>
            <input
              className="mr-2"
              type="radio"
              value="false"
              name="admin"
              id="admin_no"
              checked
            />
            <label for="admin_no">No</label>
          </div>
          <div>
            <input
              className="mr-2"
              type="radio"
              value="true"
              name="admin"
              id="admin_yes"
            />
            <label for="admin_yes">Yes</label>
          </div>
        </fieldset>
      </div>
      <div className="m-2">
        <button
          className="bg-neutral-800 text-neutral-300 font-semibold p-3 mt-5 rounded-sm hover:bg-neutral-300 hover:text-neutral-800 hover:border border-neutral-800"
          type="submit"
          name="add_person_submission"
        >
          Add Person
        </button>
      </div>
    </form>
  );
};

export default AddPersonForm;
