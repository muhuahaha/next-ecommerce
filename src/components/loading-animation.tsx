export function LoadingAnimation() {
  return (
    <div className="flex items-center justify-center gap-1">
      <div className="h-1 w-1 animate-pulse rounded-full bg-primary-foreground duration-700 direction-alternate" />
      <div className="h-1 w-1 animate-pulse rounded-full bg-primary-foreground delay-150 duration-700 direction-alternate" />
      <div className="h-1 w-1 animate-pulse rounded-full bg-primary-foreground delay-300 duration-700 direction-alternate" />
    </div>
  );
}
