import { useState } from "react";
import { toast } from 'react-toastify';
import { FaRegIdCard } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import {auth, googleProvider } from "./firebaseConfig";
import { useNavigate } from 'react-router-dom';
import { BsQrCodeScan } from "react-icons/bs";






interface IntershipFormData {
  full_name: any;
  mobile_number: any;
  email: any;
  gender: any;
  photo_url:any;
  country_code:any;
  purpose:any;
    branch:any;

}

interface Location {
  latitude: number;
  longitude: number;
}



// const BRANCH_LOCATIONS: Record<string, Location> = {
//   Bangalore: { latitude: 12.9716, longitude: 77.5946 },
//   Chennai: { latitude: 12.943586131794085, longitude: 80.18046553081403 },
// };

const MAX_DISTANCE_METERS = 100; // Allowed radius

export default function VisitorForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [role, setRole] = useState("")

    const navigate = useNavigate();


        const [formData, setFormData] = useState<IntershipFormData>({
  full_name: "",
  mobile_number: "",
  email: "",
  gender: "",
  photo_url:"",
  country_code:"+91",
  purpose:"",
  branch:"",
      });

      
    const handleGoogleSignIn = async(e: React.FormEvent) => {
      setLoading(true)
      e.preventDefault();
      const controller = new AbortController();
      setTimeout(() => controller.abort(), 10000); // 10 seconds timeout
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user; // The signed-in user info
        console.log('User Info:', user);

        setFormData({
            full_name:user.displayName,
            mobile_number:"",
            email:user.email,
            gender:"",
            photo_url:user.photoURL,
            country_code:"+91",
            purpose:"",
            branch:"",
        })
              setRole("user")
                    setLoading(false)

    }catch (error: any) {
      if (error.name === "AbortError") {
        setLoading(false)
        alert("Request timed out");
        return
        // setError("Request timed out");
      } 
        setLoading(false)
        alert("Internal server Error " + error);
        console.log(error, "Internal server Error")
        // setError("Failed to fetch data: " + err.message);
      return
    }

    };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleLocation = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  if (value === "Chennai") {
    setLoading(true);

    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentLocation: Location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        const chennai: Location = {
          latitude: 12.943586131794085,
          longitude: 80.18046553081403,
        };

        const dist = getDistanceFromLatLonInMeters(
          currentLocation,
          chennai
        );

        // setDistance(dist);

        if (dist <= MAX_DISTANCE_METERS) {
          setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
        } else {
          alert("❌ You are not within the company area! " + dist);
        }

        setLoading(false); // ✅ moved here
      },
      (err) => {
        alert("❌ " + err.message);
        setLoading(false); // ✅ also stop loading on error
      },
      { enableHighAccuracy: true }
    );
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};



  
const createMeet = async (e: React.FormEvent) => {
        setLoading(true);

  e.preventDefault();


  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 sec timeout

  // console.log('Submiting up with', formData);

  // API endpoint
  // const apiUrl = 'http://localhost:8080/public/visitor';
  const apiUrl = 'https://crud-production-a206.up.railway.app/public/visitor';

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
      toast.success('Registered successfully');

        setFormData({
  full_name: "",
  mobile_number: "",
  email: "",
  gender: "",
  photo_url:"",
  country_code:"+91",
  purpose:"",
  branch:"",
      })
      setRole("")

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


  // Calculate distance using Haversine formula
  const getDistanceFromLatLonInMeters = (loc1: Location, loc2: Location) => {
    const R = 6371e3; // Earth radius in meters
    const φ1 = (loc1.latitude * Math.PI) / 180;
    const φ2 = (loc2.latitude * Math.PI) / 180;
    const Δφ = ((loc2.latitude - loc1.latitude) * Math.PI) / 180;
    const Δλ = ((loc2.longitude - loc1.longitude) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };





  return (
    <div style={{ padding: 20
     }}>
      <h2
      style={{
        display:"flex",
        justifyContent:"center",
        marginBottom:"40px",
      }}
      >Visitor Hub</h2>
      <form onSubmit={createMeet}>
        {loading?(
            <div className="spinner">

            </div>

        ):(
         <div style={{
            display:"flex",
            alignItems:"center"
         }}>
            {
                role?(
                    <div>

                    </div>
                ):(
                    <div style={{
                      display:"flex",
                      flexDirection:"column",

                    }}>
                        
                  <button className="google-signin-button" onClick={handleGoogleSignIn}>
            <div style={{
                display:"flex",
                flexDirection:"row",
                gap:"20px"
            }}>
            <FcGoogle style={{
  height:"25px",
  width:"25px",
}} />
<div style={{
    display:"flex",
    alignItems:"center",
}}>
Sign in with Google

</div>
            </div>

          </button>
           

       {/* <div
  style={{
    marginBottom: "20px",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  }}
>
  <span style={{ flex: 1, height: "1px", backgroundColor: "#ccc" }}></span>
  <span style={{ color: "#888" }}>OR</span>
  <span style={{ flex: 1, height: "1px", backgroundColor: "#ccc" }}></span>
</div> */}
<button
  className="guest-signin-button"
  onClick={() =>
  setRole("Guest")
  }
>
            <div style={{
                display:"flex",
                flexDirection:"row",
                gap:"20px"
            }}>
            {/* <FcGoogle style={{
  height:"25px",
  width:"25px",
}} /> */}
<div style={{
    display:"flex",
    alignItems:"center",
}}>
Sign in as a Guest

</div>
            </div>

          </button>

          <button className="google-signin-button" onClick={()=>navigate('/qrscan')}>
            <div style={{
                display:"flex",
                flexDirection:"row",
                gap:"20px"
            }}>
            <BsQrCodeScan style={{
  height:"25px",
  width:"25px",
}} />
<div style={{
    display:"flex",
    alignItems:"center",
}}>
Scan QR Code

</div>
            </div>

          </button>
                    </div>
                )
            }

            {
                role?(
                    <div>
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
                          justifyContent:"center",
                          alignItems:"center",
                          
                          
                                      }}>

                                        
                                      < FaRegIdCard />
                          
                                      </div>
                                  </div>
                                )}
  
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

                        {/* Location */}
        <div className="input-group">
          <label>Location</label>
          <select
                    className="career-input"

            name="branch"
            value={formData.branch}
            onChange={handleLocation}
            required
          >
            <option value="">Select Branch</option>
            <option value= "Chennai">Chennai</option>
          </select>

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



                {/* First Name */}
        <div className="input-group">
          <label>Purpose</label>
          <input
                    className="career-input"

            type="text"
            name="purpose"
            value={formData.purpose}
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
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
                    </div>
                ):(
                    <div>

                    </div>
                )
            }


 
</div>
        )}





      </form>
    </div>
  );
}