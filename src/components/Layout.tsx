import { Fragment } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout_ = ({ children }: any) => {
  return (
    <Fragment>
      <div className="relative  w-full font-['Noto Sans']">
        <Navbar />
        {children}
        <footer className="drop-shadow-2xl border-t bg-white text-black py-4 mt-14 border-slate-100">
          <div className="container mx-auto px-4">
            <div className="border-gray-700 text-center">
              <p className="text-sm">
                © {new Date().getFullYear()} OARIZED. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};
