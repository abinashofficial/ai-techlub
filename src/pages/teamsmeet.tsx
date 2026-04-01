
import {
  PublicClientApplication
} from "@azure/msal-browser";
import type { 
  AuthenticationResult,
  AccountInfo}  from "@azure/msal-browser";
// MicrosoftSignIn.tsx
import { useEffect, useState } from "react";


// ✅ MSAL config
const msalInstance = new PublicClientApplication({
  auth: {
    clientId: "28ae262d-ce18-46d6-ad8d-6da45d3d5d4d", // 🔴 replace
    authority: "https://login.microsoftonline.com/common",
    redirectUri: window.location.origin,
  },
});

// ✅ basic scope
const loginRequest = {
  scopes: ["User.Read"],
};

export default function MicrosoftSignIn() {
  const [account, setAccount] = useState<AccountInfo | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ Initialize MSAL
  useEffect(() => {
    const init = async () => {
      try {
        await msalInstance.initialize();

        const response: AuthenticationResult | null =
          await msalInstance.handleRedirectPromise();

        if (response?.account) {
          setAccount(response.account);
        } else {
          const accounts = msalInstance.getAllAccounts();
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        }
      } catch (err) {
        console.error("MSAL init error:", err);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  // ✅ Login
  const handleLogin = async () => {
    try {
      await msalInstance.loginRedirect(loginRequest);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  // ✅ Logout
  const handleLogout = () => {
    msalInstance.logoutRedirect();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fb",
      }}
    >
      <div
        style={{
          padding: 30,
          borderRadius: 10,
          background: "#fff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: 320,
        }}
      >
        <h2>Microsoft Sign In</h2>

        {account ? (
          <>
            <p>Welcome 👋</p>
            <p style={{ fontWeight: "bold" }}>{account.username}</p>

            <button
              onClick={handleLogout}
              style={{
                marginTop: 20,
                padding: "10px 20px",
                background: "#d83b01",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            style={{
              marginTop: 20,
              padding: "10px 20px",
              background: "#0078D4",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              width: "100%",
            }}
          >
            Sign in with Microsoft
          </button>
        )}
      </div>
    </div>
  );
}