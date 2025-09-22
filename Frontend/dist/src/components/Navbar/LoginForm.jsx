// import React, { useState, useEffect, useContext } from "react";
// import "../../styles/Navbar/LoginForm.css";
// import { X } from "react-feather";
// import { RegistrationContext } from "../../Contextapi/RegistrationContext";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function LoginForm({ alwaysOpen = false }) {
//   const [isOpen, setIsOpen] = useState(alwaysOpen);

//   useEffect(() => {
//     if (alwaysOpen) setIsOpen(true);
//   }, [alwaysOpen]);

//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     phone: "",
//     course: "",
//     resume: null,
//     experience: "", // ✅ new field
//   });

//   const [errors, setErrors] = useState({});
//   const { submitRegistration, loading } = useContext(RegistrationContext) || {};

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({ ...p, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files?.[0] ?? null;
//     setFormData((p) => ({ ...p, resume: file }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     if (!formData.phone.trim()) newErrors.phone = "Phone is required";

//     if (!alwaysOpen) {
//       if (!formData.course.trim()) newErrors.course = "Please select a course";
//       if (!formData.resume) newErrors.resume = "Resume is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     const data = new FormData();
//     data.append("fullname", formData.fullname);
//     data.append("email", formData.email);
//     data.append("phone", formData.phone);
//     if (!alwaysOpen) {
//       data.append("course", formData.course);
//       if (formData.resume) data.append("resume", formData.resume);
//     }
//     if (alwaysOpen) {
//       data.append("experience", formData.experience);
//     }

//     try {
//       if (!submitRegistration) {
//         toast.warning("Submit function not available");
//       } else {
//         await submitRegistration(data);
//         toast.success("Registration successful!");
//         setFormData({
//           fullname: "",
//           email: "",
//           phone: "",
//           course: "",
//           resume: null,
//           experience: "", 
//         });
//         setErrors({});
//         if (!alwaysOpen) setIsOpen(false);
//       }
//     } catch (err) {
//       toast.error("Failed to register: " + (err?.message || "Unknown error"));
//     }
//   };

//   const renderForm = () => (
//     <div
//       className={`registration-wrapper ${alwaysOpen ? "inline" : "modal-mode"}`}
//     >
//       {!alwaysOpen && (
//         <div className="form-header">
//           <h2>Register</h2>
//           <button
//             className="close-btn"
//             onClick={() => setIsOpen(false)}
//             type="button"
//           >
//             <X size={20} />
//           </button>
//         </div>
//       )}

//       <form className="login-form" onSubmit={handleSubmit} noValidate>
//         <label>Full Name</label>
//         <input
//           type="text"
//           name="fullname"
//           value={formData.fullname}
//           onChange={handleChange}
//           placeholder="Enter your full name"
//         />
//         {errors.fullname && <span className="error">{errors.fullname}</span>}

//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//         />
//         {errors.email && <span className="error">{errors.email}</span>}

//         <label>Phone Number</label>
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Enter phone number"
//         />
//         {errors.phone && <span className="error">{errors.phone}</span>}

//         {/* ✅ Show only in inline (contact page) */}
//         {alwaysOpen && (
//           <>
//             <label>Experience</label>
//             <div className="experience-options">
//               <label>
//                 <input
//                   type="checkbox"
//                   name="experience"
//                   value="Fresher"
//                   checked={formData.experience === "Fresher"}
//                   onChange={handleChange}
//                 />
//                 Fresher
//               </label><br></br>
//               <label>
//                 <input
//                   type="checkbox"
//                   name="experience"
//                   value="Experienced"
//                   checked={formData.experience === "Experienced"}
//                   onChange={handleChange}
//                 />
//                 Experienced
//               </label>
//             </div>
//           </>
//         )}

//         {/* Extra fields only for modal */}
//         {!alwaysOpen && (
//           <>
//             <label>Courses</label>
//             <select name="course" value={formData.course} onChange={handleChange}>
//               <option value="">Select a course</option>
//               <option value="Web Development">Web Development</option>
//               <option value="Mobile Development">Mobile Development</option>
//               <option value="Software Testing">Software Testing</option>
//               <option value="AI & Data Science">AI & Data Science</option>
//               <option value="DevOps">DevOps</option>
//             </select>
//             {errors.course && <span className="error">{errors.course}</span>}

//             <label>Resume</label>
//             <input
//               type="file"
//               name="resume"
//               accept=".pdf,.doc,.docx"
//               onChange={handleFileChange}
//             />
//             {errors.resume && <span className="error">{errors.resume}</span>}
//           </>
//         )}

//         <button type="submit" className="register-btn" disabled={loading}>
//           {loading ? "Submitting..." : "Register"}
//         </button>
//       </form>
//     </div>
//   );

//   return (
//     <>
//       {!alwaysOpen && (
//         <button
//           className="login-btn"
//           onClick={() => setIsOpen(true)}
//           type="button"
//         >
//           Apply Now
//         </button>
//       )}

//       {isOpen && !alwaysOpen && (
//         <div className="form-overlay" onClick={() => setIsOpen(false)}>
//           <div className="form-content" onClick={(e) => e.stopPropagation()}>
//             {renderForm()}
//           </div>
//         </div>
//       )}

//       {alwaysOpen && renderForm()}

//       {/* Toast container */}
//       <ToastContainer position="top-right" autoClose={3000} />
//     </>
//   );
// }

// export default LoginForm;



import React, { useState, useEffect, useContext } from "react";
import "../../styles/Navbar/LoginForm.css";
import { X } from "react-feather";
import { RegistrationContext } from "../../Contextapi/RegistrationContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 function LoginForm({ alwaysOpen = false }) {
  const [isOpen, setIsOpen] = useState(alwaysOpen);

  useEffect(() => {
    if (alwaysOpen) setIsOpen(true);
  }, [alwaysOpen]);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    course: "",
    resume: null,
  });
  const [errors, setErrors] = useState({});
  const { submitRegistration, loading } = useContext(RegistrationContext) || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] ?? null;
    setFormData((p) => ({ ...p, resume: file }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.course.trim()) newErrors.course = "Please select a course";
    if (!formData.resume) newErrors.resume = "Resume is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = new FormData();
    data.append("fullname", formData.fullname);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("course", formData.course);
    if (formData.resume) data.append("resume", formData.resume);

    try {
      if (!submitRegistration) {
        toast.warning("Submit function not available");
      } else {
        await submitRegistration(data);
        toast.success("Registration successful!");
        setFormData({ fullname: "", email: "", phone: "", course: "", resume: null });
        setErrors({});
        if (!alwaysOpen) setIsOpen(false);
      }
    } catch (err) {
      toast.error("Failed to register: " + (err?.message || "Unknown error"));
    }
  };

  const renderForm = () => (
    <div className={`registration-wrapper ${alwaysOpen ? "inline" : "modal-mode"}`}>
      {!alwaysOpen && (
        <div className="form-header">
          <h2>Register</h2>
          <button className="close-btn" onClick={() => setIsOpen(false)} type="button">
            <X size={20} />
          </button>
        </div>
      )}

      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <label>Full Name</label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        {errors.fullname && <span className="error">{errors.fullname}</span>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <label>Courses</label>
        <select name="course" value={formData.course} onChange={handleChange}>
          <option value="">Select a course</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="Software Testing">Software Testing</option>
          <option value="AI & Data Science">AI & Data Science</option>
          <option value="DevOps">DevOps</option>
        </select>
        {errors.course && <span className="error">{errors.course}</span>}

        <label>Resume</label>
        <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
        {errors.resume && <span className="error">{errors.resume}</span>}

        <button type="submit" className="register-btn" disabled={loading}>
          {loading ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );

  return (
    <>
      {!alwaysOpen && (
        <button className="login-btn" onClick={() => setIsOpen(true)} type="button">
          Apply Now
        </button>
      )}

      {isOpen && !alwaysOpen && (
        <div className="form-overlay" onClick={() => setIsOpen(false)}>
          <div className="form-content" onClick={(e) => e.stopPropagation()}>
            {renderForm()}
          </div>
        </div>
      )}

      {alwaysOpen && renderForm()}

      {/* ToastContainer is global and works in both inline and modal */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
export default LoginForm




