import { useNavigate } from 'react-router-dom';




  import { FcGoogle } from "react-icons/fc";

    export default function GoogleReviews() {

  const navigate = useNavigate()
                              


    return (
      <div className="review-main">
              <div className="review-header" >

          <div className="review-title-box">
            <div style={{
              display:"flex",
              flexDirection:"row",
              gap:"10px",
            }}>

            <FcGoogle size={30}/>

            <h2 className="review-title">Reviews</h2>
                      </div>

            <div >
              <div style={{
              display:"flex",
              flexDirection:"row",
              justifyContent:"center",
              gap:"10px",
            }}>
              <h3>
  4.8
              </h3>
                <div>
                  <StarDisplay rating={Math.round(4.8)} size={20} />
                </div>
                                <div >
                                  (100+)
                                  </div>

              </div>


            </div>

          </div>

                                                      <button style={{
                                          background:"rgb(56, 141, 168)",
                                          borderRadius:"10px",
                                          color:"white",
                                        }}
                                         onClick={()=> navigate("https://g.page/r/CfmKvuW__k4OEBE/review")}>
                        Write review

              </button>



              
        </div>


                      <div className='link' style={{
                  margin:"10px",
                }} onClick={()=>navigate("https://share.google/TnUNFUyF8PvSCA614")} >
  All reviews
      </div> 

  


      </div>
    );
  }

interface StarProps {
  filled: boolean;
  size?: number;
}

const Star: React.FC<StarProps> = ({ filled, size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "#FBBF24" : "none"}
      stroke="#F59E0B"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block mr-0.5 cursor-pointer"
    >
      <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.87 1.401-8.168L.132 9.211l8.2-1.193z" />
    </svg>
  );
};

interface StarDisplayProps {
  rating?: number;
  size?: number;
}

const StarDisplay: React.FC<StarDisplayProps> = ({ rating = 0, size = 18 }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < rating} size={size} />
      ))}
    </div>
  );
};

