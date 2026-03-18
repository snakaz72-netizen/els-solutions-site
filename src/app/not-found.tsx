import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          ページが見つかりません
        </h2>
        <p className="text-muted-foreground mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 h-10 text-sm font-medium rounded-md transition-colors no-underline"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}
