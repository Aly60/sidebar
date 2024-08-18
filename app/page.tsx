
import Layout from "../app/layout";
import RootLayout from "../app/RootLayout";
import { ColorProvider } from "../app/context/ColorContext";
//import Navbar from "../components/navbar";


export default function Dashboard() {
  return (<ColorProvider>
  <Layout>
    <RootLayout>
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="p-5">
      </div>
    </div>
    </RootLayout>
    </Layout>
    </ColorProvider>
  );
}
