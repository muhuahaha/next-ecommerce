import { LoadingAnimation } from "@/components/loading-animation";

export default function LoadingPage() {
  return (
    <span className="loading loading-dots loading-lg m-auto block">
      <LoadingAnimation />
    </span>
  );
}
