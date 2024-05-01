// import { signOut } from "auth";

// export function SignOut() {
//   return (
//     <>
//       <form
//         action={async () => {
//           "use server";
//           await signOut();
//         }}
//       >
//         <button type="submit">Déconnexion</button>
//       </form>
//     </>
//   );
// }
// import { signIn } from "auth";

// export function SignIn() {
//   return (
//     <form
//       action={async () => {
//         "use server";
//         await signIn();
//       }}
//     >
//       <button type="submit">Connexion</button>
//     </form>
//   );
// }

import { signOut } from "next-auth/react";

export function SignOut() {
  return <button onClick={() => signOut()}>Déconnexion</button>;
}
