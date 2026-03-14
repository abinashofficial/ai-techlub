    import { useEffect, useRef } from "react"

    interface TelegramUser {
    id: number
    first_name: string
    username?: string
    auth_date: number
    hash: string
    }

    declare global {
    interface Window {
        onTelegramAuth: (user: TelegramUser) => void
    }
    }

    export default function TelegramLogin() {

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const script = document.createElement("script")

                // const apiUrl = "http://localhost:8080/public/auth/telegram"
                                const apiUrl = "https://crud-production-a206.up.railway.app/public/auth/telegram"


        script.src = "https://telegram.org/js/telegram-widget.js?22"
        script.async = true
        script.setAttribute("data-telegram-login", "ShindenTech_bot")
        script.setAttribute("data-size", "large")
        script.setAttribute("data-request-access","write")
        script.setAttribute("data-onauth","onTelegramAuth(user)")

        window.onTelegramAuth = async (user: TelegramUser) => {

        const res = await fetch(apiUrl,{
            method:"POST",
            headers:{
            "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })

        const data = await res.json()

        console.log("LOGIN RESPONSE:",data)

        if(data.status === "success"){
            alert("Login successful")
        }else{
            alert("Login failed")
        }

        }

        ref.current?.appendChild(script)

    },[])

    return <div ref={ref}></div>
    }