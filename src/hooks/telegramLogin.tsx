// import { useEffect } from "react"

export default function TelegramLogin(){

// useEffect(()=>{

// const sessionId = localStorage.getItem("tg_session")

// const interval = setInterval(async()=>{

// const res = await fetch(
// `http://localhost:8080/public/check-login?session=${sessionId}`
// )

// const data = await res.json()

// if(data.success){

// localStorage.setItem("token",data.token)

// window.location.href="/"

// }

// },2000)

// return ()=>clearInterval(interval)

// },[])

return (
<div style={{textAlign:"center",marginTop:"100px"}}>
<h2>Waiting for Telegram login...</h2>
<p>Open Telegram and share your phone number.</p>
</div>
)

}