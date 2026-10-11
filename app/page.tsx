export default function Home() {
  return (
    <div className="bg-slate-700 text-white w-screen h-screen">
      <p>This is in the {process.env.NODE_ENV} stage</p>
      <p>Testing dev branch</p>
      <p>I think so a oo</p>
      <p>Some changes in the dev part</p>
    </div>
  );
}