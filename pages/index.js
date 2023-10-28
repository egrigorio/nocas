import {
    Home as HomeIcon,
    Search,
    Library,
    ChevronLeft,
    ChevronRight,
    Shuffle,
    SkipBack,
    SkipForward,
    Repeat,
    Play,
    Mic2,
    LayoutList,
    Laptop2,
    Volume,
    Maximize,
    Maximize2,
    
  } from "lucide-react";
  import { Sidebar } from "../spotify-rosa/src/app/components/Sidebar";
  import Image from "next/image";
  import { Footer } from "../spotify-rosa/src/app/components/Footer";
  import { MainContent } from "../spotify-rosa/src/app/components/MainContent";
  
  export default function Home() {
    return (
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <Sidebar />
          <MainContent />
        </div>
  
        <Footer />
      </div>
    );
  }
  