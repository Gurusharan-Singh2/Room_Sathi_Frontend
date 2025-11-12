import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
  baseURL: "http://localhost:8000/api/auth",
  fetchOptions: {
    credentials: "include", // so cookies are sent
  },
});



// import { createAuthClient } from "better-auth/react"
// export const authClient = createAuthClient({
//     baseURL: "http://localhost:8000"
// });


// export const { signIn, signUp, useSession } = createAuthClient();