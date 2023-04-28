import React from "react";
import { useEffect } from "react";

const TextBox2 = ({
  label,
  name,
  placeholder,
  credentials,
  value,
  setValue,
  type,
  readOnly,
  disabled
}) => {
  const handleInputs = (e) => {
    // Setting name and values dynamically
    setValue({ ...credentials, [e.target.name]: e.target.value });
    // console.log(credentials.descriptio);
  };

  return (
    <>
      <div className="w-full text-left my-2">
        <label className="text-base1 font-normal block mb-1" htmlFor={name}>
          {label}
        </label>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleInputs}
          className="w-full bg-lightgrey rounded-xl p-[10px] outline-none"
          readOnly={readOnly}
          style={{cursor: `${disabled ? 'not-allowed' : 'inherit'}`}}
        />
      </div>
    </>
  );
};

export default TextBox2;
