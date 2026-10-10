export default function Home() {
  return (
    <div className="bg-slate-700 text-white">
      <p>This is in the {process.env.NODE_ENV} stage</p>
    </div>
  );
}