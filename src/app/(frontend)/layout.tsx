// import "@/app/globals.css";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }

// app/layout.tsx

// import { SanityLive } from "@/sanity/lib/live"

// export default function FrontendLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>
//         {children}
//         <SanityLive />
//       </body>
//     </html>
//   )
// }

//working code
// import { SanityLive } from '@/sanity/lib/live'
// import { draftMode } from "next/headers";
// import { VisualEditing } from "next-sanity";
// import { DisableDraftMode } from '../components/disableDraftMode';
// export default function FrontendLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <>
//       {children}
//       <SanityLive />
      
//     </>
//   )
// }

import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";

import { Header } from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "../components/DisableDraftMode";

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-white min-h-screen">
      <Header /> 
      {children}
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode /> 
          <VisualEditing />
        </>
      )}
    </section>
  );
}