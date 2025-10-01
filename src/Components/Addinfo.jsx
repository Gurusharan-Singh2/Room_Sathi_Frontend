import React, { useState } from "react";

function Addinfo() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [loc, setLoc] = useState("");
  const [gender, setGender] = useState("");
  const [savedData, setSavedData] = useState(null); // for preview

  const handleSave = () => {
    const info = { name, bio, birthday, phone, loc, gender };
    setSavedData(info); // save data to preview
  };

  return (
    <div className=" w-screen h-full  ">
      <h2 className="text-lg font-bold bg-blue-700 p-4  text-white">
        Enter Basic Information
      </h2>

      {/* FORM */}
      <div className="bg-emerald-200 p-3 pl-4 w-screen h-full ">
        <div className="p-1">
          <label htmlFor="fullname">Full Name</label> <br />
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="bg-white rounded-xl p-2"
            type="text"
            placeholder="John Doe"
            id="fullname"
          />
        </div>

        <div className="p-1 flex">
          <div className="px-1">
            <label htmlFor="birthday">Birthday</label> <br />
            <input
              onChange={(e) => setBirthday(e.target.value)}
              value={birthday}
              className="bg-white rounded-xl p-2"
              type="date"
              id="birthday"
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label> <br />
            <select
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              className="bg-white rounded-xl p-2"
              id="gender"
            >
              <option value="">--Choose--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="p-1">
          <label htmlFor="phone">Phone</label> <br />
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="bg-white rounded-xl p-2"
            type="number"
            placeholder="9876543210"
            id="phone"
          />
        </div>

        <div className="p-1">
          <label htmlFor="bio">Bio</label> <br />
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            className="bg-white rounded-xl p-2"
            placeholder="Student of B.Tech final year"
            id="bio"
          />
        </div>

        <div className="p-1">
          <label htmlFor="loc">Location</label> <br />
          <input
            onChange={(e) => setLoc(e.target.value)}
            value={loc}
            className="bg-white rounded-xl p-2"
            type="text"
            placeholder="Pari Chowk Sec-32 Noida"
            id="loc"
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-700 text-white rounded-2xl px-3 py-2 my-3"
        >
          SAVE
        </button>
      </div> 


      {savedData && (
        <div className="bg-gray-100 mt-4 p-4 rounded-xl    shadow">
          <h3 className="font-bold text-lg">Preview</h3>
          <p><b>Name:</b> {savedData.name}</p>
          <p><b>Birthday:</b> {savedData.birthday}</p>
          <p><b>Gender:</b> {savedData.gender}</p>
          <p><b>Phone:</b> {savedData.phone}</p>
          <p><b>Bio:</b> {savedData.bio}</p>
          <p><b>Location:</b> {savedData.loc}</p>
        </div>
      )}
    </div>
  );
}

export default Addinfo;
