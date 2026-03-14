


    // import { useEffect, useRef } from "react"

    // interface TelegramUser {
    // id: number
    // first_name: string
    // username?: string
    // auth_date: number
    // hash: string
    // }

    // declare global {
    // interface Window {
    //     onTelegramAuth: (user: TelegramUser) => void
    // }
    // }

    // export default function TelegramLogin() {

    // const ref = useRef<HTMLDivElement>(null)

    // useEffect(() => {

    //     const script = document.createElement("script")

    //             // const apiUrl = "http://localhost:8080/public/auth/telegram"
    //                             // const apiUrl = "https://crud-production-a206.up.railway.app/public/auth/telegram"


    //     script.src = "https://telegram.org/js/telegram-widget.js?22"
    //     script.async = true
    //     script.setAttribute("data-telegram-login", "ShindenTech_bot")
    //     script.setAttribute("data-size", "large")
    //     script.setAttribute("data-request-access","write")
    //     script.setAttribute("data-onauth","onTelegramAuth(user)")

    //     window.onTelegramAuth = async (user: TelegramUser) => {

    //     // const res = await fetch(apiUrl,{
    //     //     method:"POST",
    //     //     headers:{
    //     //     "Content-Type":"application/json"
    //     //     },
    //     //     body:JSON.stringify(user)
    //     // })

    //     // const data = await res.json()

    //     console.log("LOGIN RESPONSE:",user)

    //     // if(data.status === "success"){
    //     //     alert("Login successful")
    //     // }else{
    //     //     alert("Login failed")
    //     // }

    //     }

    //     ref.current?.appendChild(script)

    // },[])

    // return <div ref={ref}></div>
    // }





import { useEffect, useRef } from "react"

interface TelegramUser {
  id: number
  first_name: string
  username?: string
  photo_url?: string
  auth_date: number
  hash: string
}

declare global {
  interface Window {
    onTelegramAuth: (user: TelegramUser) => void
  }
}

  const apiUrl = 'https://erp-iliw.onrender.com/public/telegram-auth';

//   const apiUrl =   "http://localhost:8080/telegram-auth"


export default function TelegramLogin() {

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const script = document.createElement("script")

    script.src = "https://telegram.org/js/telegram-widget.js?22"
    script.async = true
    script.setAttribute("data-telegram-login", "ShindenTech_bot")
    script.setAttribute("data-size", "large")
    script.setAttribute("data-request-access", "write")
    script.setAttribute("data-onauth", "onTelegramAuth(user)")

    window.onTelegramAuth = async (user: TelegramUser) => {

      console.log("Telegram User:", user)

      const params = new URLSearchParams()

      Object.entries(user).forEach(([key, value]) => {
        params.append(key, String(value))
      })

      const res = await fetch(
        apiUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: params.toString()
        }
      )

      const data = await res.json()

      if (data.success) {

        alert("Login successful!")

        console.log("User ID:", data.user_id)

      } else {

        alert("Login failed")

      }

    }

    ref.current?.appendChild(script)

  }, [])

  return (
    <div style={{display:"flex", justifyContent:"center", marginTop:"50px"}}>
      <div ref={ref}></div>
    </div>
  )
}