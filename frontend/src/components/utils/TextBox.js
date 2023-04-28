import React from "react";

const TextBox = ({ label, name, placeholder, value, type, onChange, handleBlur, errors}) => {


  // let flag = false;
  // let name1, name2;
  // if (name.includes(".")) {
  //   flag = true;
  //   name1 = name.split(".")[0];
  //   name2 = name.split(".")[1];
  // }

  return (
    <>
      <div className="w-full text-left my-2">
        <label className="text-base1 font-normal block mb-1" htmlFor={name}>
          {label}
          {errors && errors[name] ? <p className="text-[red] inline-block pl-1">*</p> : null}

          {/* {flag && errors.address && errors.address[name2] ? <p className="text-[red] inline-block pl-1">*</p> : null} */}

        </label>
        <input
          name={name}
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={onChange}
          onBlur={handleBlur}
          className="w-full bg-lightgrey h-[40px] rounded-xl p-3 outline-none"
        />
      </div>
    </>
  );
}
// } else if (choice) {
//     return (
//       <>
//         <div className="">
//           <label
//             htmlFor="country"
//             className="text-base1 font-normal block mb-1 text-left"
//           >
//             Country
//           </label>
//           <select
//             onChange={handleInputs}
//             value={value}
//             name={name}
//             id="selectbox"
//             className="bg-lightgrey h-[40px] rounded-xl"
//           >
//             <option>USA  +1  &hellip;</option>
//           </select>
//         </div>
//       </>
//     );
//   }
// };

export default TextBox;
