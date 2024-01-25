
import "./globals.css";
import PageWrapper from "./PageWrapper";

export const metadata = {
  title: 'Blog App',
  description: 'This a Blogging app',
}


export default function RootLayout({ children }) {
  return (
    <PageWrapper children={children}/>
  );
}
