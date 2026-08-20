import { useState, type FormEvent } from "react";
import { toast } from 'react-toastify';
import { FaRegIdCard } from "react-icons/fa";
import Spinner from "./spinner";


interface IntershipFormData {
  full_name: any;
  mobile_number: any;
  email: any;
  date_of_birth: any;
  gender: any;
  photo_url:any;
  country_code:any;
  duration:any;
  role:any;
  status:any;
  college_name:any;
}

 interface SubmitReview {
  created_at: any;
  full_name: any;
  mobile_number: any;
  email: any;
  date_of_birth: any;
  gender: any;
  photo_url:any;
  country_code:any;
  duration:any;
  role:any;
  status:any;
  college_name:any;
  }



export default function Internship() {
  const [file, setFile] = useState<File | null>(null);
  const [edit, setEdit] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [role, setRole] = useState("")
    const [program, setProgram] = useState("")


  const cloudName = "dababspdo"; 
  const uploadPreset = "ml_default"; 
        const [formData, setFormData] = useState<IntershipFormData>({
  full_name: "",
  mobile_number: "",
  email: "",
  date_of_birth: "",
  gender: "",
  photo_url:"",
  country_code:"+91",
  duration:"",
  role:"",
    status:"Pending",
  college_name:"",
      });



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


    const handleSubmit = (e: React.FormEvent)  => {
        e.preventDefault();

       setLoading(true);

  formData.role = program

  if (role){
formData.role = role
  }


  console.log('Submiting up with', formData);

      const submitEntry: SubmitReview = {
        created_at: new Date().toISOString(),
  full_name: formData.full_name,
  mobile_number: formData.mobile_number,
  email: formData.email,
  date_of_birth: formData.date_of_birth,
  gender: formData.gender,
  photo_url:formData.photo_url,
  country_code:formData.country_code,
  duration:formData.duration,
  role:formData.role,
  status:formData.status,
  college_name:formData.college_name,
      };
      submitGoogleForm(submitEntry)
             };


      const submitGoogleForm = async (newEntry: SubmitReview ) => {
          const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 sec timeout
      console.log(newEntry, "newEntry")
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSe1LmgwB4TSs2ied9IGplB9mYcPPk3NOdMaGJvcHhOzxoKydQ/formResponse";

    // Replace entry.X with your form field IDs
    const formData = new URLSearchParams();
    formData.append("entry.1818639581", newEntry.created_at); // example
    formData.append("entry.134765405", newEntry.full_name);
    formData.append("entry.616753163", newEntry.mobile_number);
    formData.append("entry.1752930458", newEntry.email); // replace with actual field ID
    formData.append("entry.1280640628", newEntry.date_of_birth); // replace with actual field ID
    formData.append("entry.1930614142", newEntry.gender); // replace
    formData.append("entry.1250632136", newEntry.photo_url); // replace
    formData.append("entry.1057040138", newEntry.country_code); // replace
    formData.append("entry.1513162611", newEntry.duration); // replace
    formData.append("entry.430032299", newEntry.role); // replace
    formData.append("entry.307837371", newEntry.status); // replace
    formData.append("entry.577876774", newEntry.college_name); // replace


    try {
      const response = await fetch(formUrl, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
        const result = await response.json();
    console.log('Result:', result);

      if (result.ok) {
        console.log("Form submitted successfully!");
              toast.success('Submitted successfully');

        setFormData({
  full_name: "",
  mobile_number: "",
  email: "",
  date_of_birth: "",
  gender: "",
  photo_url:"",
  country_code:"+91",
  duration:"",
  role:"",
  status:"Pending",
  college_name:"",
      })
      setFile(null)
      setRole("")
      setEdit(false)
      } else {
        console.error("Failed to submit form", response.status);
        alert("Failed to submit form. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form", err);
        if (err instanceof TypeError && err.message === "Failed to fetch") {
              toast.success('Submitted successfully');
                     setFormData({
  full_name: "",
  mobile_number: "",
  email: "",
  date_of_birth: "",
  gender: "",
  photo_url:"",
  country_code:"+91",
  duration:"",
  role:"",
  status:"Pending",
  college_name:"",
      })
      setFile(null)
      setRole("")
      setEdit(false)
  }
    }finally {
          clearTimeout(timeoutId); // clean up timeout

        setLoading(false);
  }
};

  
const createMeet = async (e: React.FormEvent) => {
        setLoading(true);

  e.preventDefault();
  formData.role = program

  if (role){
formData.role = role
  }
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 sec timeout

  console.log('Submiting up with', formData);

  // API endpoint
  // const apiUrl = 'http://localhost:8080/public/internship';
  const apiUrl = 'https://erp-iliw.onrender.com/public/internship';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        created_at: new Date().toISOString(), // current timestamp
      }),
      signal: controller.signal,
    });

    const result = await response.json();
    console.log('Result:', result);

    if (response.ok) {
      toast.success('Submitted successfully');

        setFormData({
  full_name: "",
  mobile_number: "",
  email: "",
  date_of_birth: "",
  gender: "",
  photo_url:"",
  country_code:"+91",
  duration:"",
  role:"",
  status:"Pending",
  college_name:"",
      })
      setFile(null)
      setRole("")
      setEdit(false)

    } else if (response.status === 401) {
      alert('This mobile number is already registered.');
    } else if (response.status === 400) {
      alert('This Email is already registered.');
    } else {
      console.error('Signup failed:', response);
      alert('Internal server error');
    }
  } catch (error: any) {
    if (error.name === 'AbortError') {
      alert('Request timed out');
    } else {
      console.error('Internal server error:', error);
      alert('Internal server error');
    }
  } finally {
    clearTimeout(timeoutId); // clean up timeout
        setLoading(false);

  }
};

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];

      // Validate image type
      if (!selectedFile.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }

      // Validate file size (5MB limit)
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert("Image must be less than 5MB.");
        return;
      }

      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    setLoading(true);

    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", uploadPreset);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: form,
        }
      );

      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }

      const data = await response.json();

      if (data.secure_url) {
        console.log("Uploaded Image URL:", data.secure_url);

        setFormData({
          ...formData,
          photo_url: data.secure_url,
        });

        setEdit(true);
      } else {
        throw new Error("No secure_url returned");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div style={{ padding: 20 }}>
            <Spinner visible={loading} />

      <h2
      style={{
        display:"flex",
        justifyContent:"center",
        marginBottom:"40px",
      }}
      >Internship Form</h2>
      <form onSubmit={handleSubmit}>

                                  {formData.photo_url ? (
                                  <div>
              
              <div 
                      style={{
                        display: 'flex',
                        justifyContent: "space-around",
                        alignItems: 'center',
                        padding:"10px",
                      }}
                      >
                      {formData.photo_url && (
                        <img
                          src={formData.photo_url}
                          alt="Profile Preview"
                          style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                          //   marginTop: '10px',
                          }}
                        />
                      )}
                    </div>
                                  </div>
                                ):(
                                  <div>
                                      <div style={{
                                        display:"flex",
                          fontSize:"50px",
                          justifyContent:"space-between",
                          alignItems:"center",
                          
                          
                                      }}>
                                                          <h5>College / Any ID Card</h5>

                                        
                                      < FaRegIdCard />
                          
                                      </div>
                                  </div>
                                )}



            <div style={{ marginBottom: "30px" }}>
      {edit ? (
        <div>
          <button 
                    style={{
                                          background:"rgb(56, 141, 168)",
                                          borderRadius:"10px",
                                          color:"white",
                  
                                        }}
          onClick={() => {setEdit(false), setFile(null),   setFormData(prev => ({
    ...prev,
    photo_url: ""
  }));}}>
            Re-Upload
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="file"
            accept="image/*"
                       name="photo_url"
            // value={formData.photo_url}
            required
            onChange={handleFileChange}
          />

          <button 
                    style={{
                                          background:"rgb(56, 141, 168)",
                                          borderRadius:"10px",
                                          color:"white",
                  
                                        }}
          onClick={handleUpload} disabled={loading}>
            {loading ? "Uploading..." : "Upload"}
          </button>
        </div>
      )}
    </div>

    {edit ? (
<div>
  
        {/* Full Name */}
        <div className="input-group">
          <label>Full Name</label>
          <input
                    className="career-input"

            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
        </div>



        {/* Gender */}
        <div className="input-group">
          <label>Gender</label>
          <select
                    className="career-input"

            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div className="input-group">
          <label>Date of Birth</label>
          <input
style={{
  cursor:"pointer",
  background:"white",
  color:"black"
}}
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
             onClick={(e) => (e.currentTarget as HTMLInputElement).showPicker()}

            required
          />
        </div>

                 

        {/* Email */}
        <div className="input-group">
          <label>Email</label>
          <input
          className="career-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

<div className="input-group">
          <label>Phone Number</label>

          <div style={{ display: "flex", gap: "10px" }}
          className="input-group"
          >
            <select
            className="career-input"
              name="country_code"
              value={formData.country_code}
              onChange={handleChange}
              required
              style={{ width: "120px" }}
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+971">🇦🇪 +971</option>
            </select>

            <input
                            className="career-input"

              type="tel"
              name="mobile_number"
              value={formData.mobile_number}
              onChange={handleChange}
              required
              pattern="[0-9]{7,15}"
              placeholder="Enter phone number"
              style={{ flex: 1 }}
            />
          </div>
        </div>

                {/* College Name */}
        <div className="input-group">
          <label>College Name</label>
          <input
                    className="career-input"
            type="text"
            name="college_name"
            value={formData.college_name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Choose Course */}
        <div className="input-group">
          <label>Choose Program</label>
          <select
                              className="career-input"

            name="program"
            value={program}
 onChange={(e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
  setProgram(e.target.value);
}}
required            
          >
          <option value="">Select Program</option>
          <option value="IT & Technology">IT & Technology</option>
          <option value="Marketing & Digital Media">Marketing & Digital Media</option>
                    <option value="Engineering & Logistics">Engineering & Logistics</option>
            <option value="Finance & Consulting">Finance & Consulting</option>
                              <option value="Product Management">Product Management</option>
          <option value="Human Resource Management">Human Resource Management</option>
          <option value="Business Administartion">Business Administartion</option>
                    <option value="other">Other Roles</option>

          </select>
        </div>
{program ==="other" ? (
                  <div className="input-group">
          <label>Other Role</label>
          <input
                    className="career-input"

            type="text"
            name="role"
            value={role}
            onChange={(e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
  setRole(e.target.value);
}}
            required
          />
        </div>
):(
<div></div>
)}


        {/* Choose Duration */}
        <div className="input-group">
          <label>Choose Duration</label>
          <select
                              className="career-input"

            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          >
          <option value="">Select Duration</option>
          <option value="1 Week">1 Week</option>
          <option value="2 Weeks">2 Weeks</option>
                    <option value="1 Month">1 Month</option>
            <option value="2 Months">2 Months</option>
                    <option value="3 Months">3 Months</option>
                                <option value="6 Months">6 Months</option>

          </select>
        </div>

        {/* Submit Button */}
        <div style={{ marginTop: "30px",                         display:"flex",
                                          justifyContent:"center", }}>
          <button 
          style={{
                                          background:"rgb(56, 141, 168)",
                                          borderRadius:"10px",
                                          color:"white",
                  
                                        }}
          type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
</div>
    ):(
      <div></div>
      )}


      </form>
    </div>
  );
}