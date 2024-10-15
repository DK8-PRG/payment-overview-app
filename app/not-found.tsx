import { BackButton, HomeButton } from "./_components/layout/NavigationButtons";

export default function NotFound() {
  return (
    <div className=" flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          404 - Page Not Found
        </h1>
        <BackButton />
        <HomeButton />
      </div>
    </div>
  );
}
