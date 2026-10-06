import InteractiveNetwork from "./InteractiveNetwork";

export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#0B0D10]" />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.12),transparent_35%)]" />

        <InteractiveNetwork />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(11,13,16,0.35)_60%,#0B0D10_100%)]" />
      </div>
    </>
  );
}
