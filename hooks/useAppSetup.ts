import { useEffect } from "react";

// Runs asynchronously once and only once the application loads. Stuff in here is non-blocking
// so the application will still continue to load. I typically use it to setup SDK's for
// in-app purchases, ads, etc...
export default function useAppSetup() {
  const setup = async () => {
    try {
      // SETUP STUFF HERE
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setup();
  }, []);
}
