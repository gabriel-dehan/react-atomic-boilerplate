import { Outlet } from "@tanstack/react-router";
import Navigation from "@components/organisms/Navigation/Navigation";
import Footer from "@components/organisms/Footer/Footer";
import { Suspense } from "react";
import Loader from "@components/atoms/Loader/Loader";
const Default = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Default;
