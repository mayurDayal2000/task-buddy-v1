import { Outlet, useNavigation } from "react-router";
import { Spinner } from "./components/ui/Spinner";

export default function Root() {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  return (
    <>
      {isNavigating && <Spinner />}
      <Outlet />
    </>
  );
}
