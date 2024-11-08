import Button from "@/components/core/Button";
import Heading from "@/components/core/Heading";
import { routes } from "@/routes-config";

const NotFound = async () => {
  return (
    <div className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center space-y-4 sm:space-y-6">
        <p className="text-lg font-semibold">404</p>
        <Heading as={"h1"} size={"lg"} title="Page not found" />
        <p className="text-15px">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            role="link"
            url={routes.home}
            variant="primary"
            size="lg"
            label="Go back home"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
