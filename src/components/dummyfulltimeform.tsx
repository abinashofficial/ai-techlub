import { useState } from "react";
import { toast } from 'react-toastify';
import { FaRegIdCard } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";




interface IntershipFormData {
  full_name: any;
  mobile_number: any;
  email: any;
  date_of_birth: any;
  gender: any;
  photo_url:any;
  country_code:any;
  role:any;
}

export default function Fulltimeform() {
  const [file, setFile] = useState<File | null>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
    const [uploading, setUploading] = useState<boolean>(false);



 
        const [formData, setFormData] = useState<IntershipFormData>({
  full_name: "",
  mobile_number: "",
  email: "",
  date_of_birth: "",
  gender: "",
  photo_url:"",
  country_code:"+91",
  role:"",
      });



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




  
const createMeet = async (e: React.FormEvent) => {
  if (formData.photo_url ==="") {
    alert("Please upload your resume before submitting the form.");
    return;
  }
        setLoading(true);

  e.preventDefault();

      toast.success('Submited successfully');


        setFormData({
  full_name: "",
  mobile_number: "",
  email: "",
  date_of_birth: "",
  gender: "",
  photo_url:"",
  country_code:"+91",
  role:"",
      })
        setLoading(false);
        setEdit(false);

                                  



  
};

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];

    //   // Validate image type
    //   if (!selectedFile.type.startsWith("image/")) {
    //     alert("Please select a valid image file.");
    //     return;
    //   }

      // Validate file size (5MB limit)
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert("File must be less than 5MB.");
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




    try {
         setUploading(true);
          setFormData({
          ...formData,
          photo_url: "dummy_url", // Replace with actual URL after upload
        });

    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Please try again.");
    } finally {
        setUploading(false);
        setEdit(true);
    }
  };


  return (
    <div style={{ padding: 20 }}>
      <h2
      style={{
        display:"flex",
        justifyContent:"center",
        marginBottom:"40px",
      }}
      >Application Form</h2>
      <form onSubmit={createMeet}>

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
<FaCheckCircle  style={{
                                        display:"flex",
                          fontSize:"50px",
                          justifyContent:"space-between",
                          alignItems:"center",
                          
                          
                                      }}/>
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
                                                          <h5>Resume</h5>

                                        
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
          onClick={() => setEdit(false)}>
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
            // accept="image/*"
            onChange={handleFileChange}
          />

          <button 
                    style={{
                                          background:"rgb(56, 141, 168)",
                                          borderRadius:"10px",
                                          color:"white",
                  
                                        }}
          onClick={handleUpload} disabled={uploading}>
            {uploading ? "Uploading..." : "Upload"}
            
          </button>
        </div>
      )}
    </div>

        {/* First Name */}
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

        {/* Choose Course
        <div className="input-group">
          <label>Choose Role</label>
          <select
                              className="career-input"

            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
          <option value="">Select Program</option>
          <option value="Internship">Internship</option>
          <option value="Full-time">Full-time</option>
          </select>
        </div> */}

                {/* Role */}
        <div className="input-group">
          <label>Role</label>
          <input
          className="career-input"
            type="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
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

      </form>
    </div>
  );
}