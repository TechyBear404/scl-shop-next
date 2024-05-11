// "use client";
export default function TabButton({
  activeTab,
  setActiveTab,
  tab,
}: {
  activeTab: number;
  setActiveTab: (arg0: number) => void;
  tab: { id: number; name: string };
}) {
  return (
    <button
      className={`${activeTab === tab.id ? "border-rose-800 bg-rose-800" : "mt-1 border-rose-950 border-b-rose-100/50 bg-rose-950 text-rose-50/50"} grow rounded-t-md border border-b-4 p-2 transition duration-200 ease-in-out`}
      onClick={() => setActiveTab(tab.id)}
    >
      {tab.name}
    </button>
  );
}
