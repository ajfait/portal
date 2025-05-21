import React from "react";

const ProfileCard = () => {
  return (
    <div className="text-neutral-800 bg-neutral-200 border border-neutral-800 rounded-md m-5 p-5">
      <img
        src="/profile-image-default.png"
        alt="Person"
        style={{ maxHeight: "150px" }}
      />
      <div className="m-2">
        <h2 className="text-xl font-bold">Name, Role</h2>
        <p>Phone Number</p>
        <p>Email Address</p>
      </div>
      <div className="m-2">
        <button
          className="bg-neutral-800 text-neutral-300 font-semibold p-3 mt-5 rounded-sm hover:bg-neutral-300 hover:text-neutral-800 hover:border border-neutral-800"
          type="submit"
          name="update_person_submission"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
