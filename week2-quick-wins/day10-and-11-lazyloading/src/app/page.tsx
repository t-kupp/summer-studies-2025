"use client";

import { lazy, useState } from "react";
import ImageCarousel from "../components/ImageCarousel";

type ActivePage = "dashboard" | "profile" | "analytics" | "settings";

const Dashboard = lazy(() => import("../components/Dashboard"));
const Profile = lazy(() => import("../components/Profile"));
const Analytics = lazy(() => import("../components/Analytics"));
const Settings = lazy(() => import("../components/Settings"));

export default function Home() {
  const [activePage, setActivePage] = useState<ActivePage>("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "profile":
        return <Profile />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return <ImageCarousel />;

  // return (
  //   <div className="min-h-screen bg-gray-50">
  //     Navigation
  //     <nav className="border-b bg-white px-6 py-4">
  //       <div className="flex space-x-8">
  //         {(["dashboard", "profile", "analytics", "settings"] as const).map((page) => (
  //           <button
  //             key={page}
  //             onClick={() => setActivePage(page)}
  //             className={`rounded px-4 py-2 capitalize ${
  //               activePage === page ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
  //             }`}
  //           >
  //             {page}
  //           </button>
  //         ))}
  //       </div>
  //     </nav>

  //     {/* Page Content */}
  //     <Suspense fallback={<div>loading...</div>}>{renderPage()}</Suspense>
  //   </div>
  // );
}
