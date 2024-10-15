"use client";
import {
  BackButton,
  HomeButton,
  TryAgainButton,
} from "./_components/layout/NavigationButtons";

interface ErrorProps {
  error: Error;
}

function Error({ error }: ErrorProps) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>
      <div className="flex space-x-4">
        <TryAgainButton />
        <HomeButton />
        <BackButton />
      </div>
    </main>
  );
}

export default Error;
