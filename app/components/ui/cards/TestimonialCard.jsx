export default function TestimonialCard({ name, role, text }) {
  return (
    <div className="min-w-[280px] bg-gradient-to-b from-[#F2F2F2] to-[#E6E6E6] dark:from-[#282828] dark:to-[#1d1d1d] rounded-2xl p-6 flex flex-col justify-between relative">
      <div>
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-gray-500 text-xs">{role}</p>
      </div>

      <p className="mt-4 leading-relaxed text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>

      <div className="mt-4 text-9xl font-bold text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text absolute right-5 rotate-180 -top-15">
        “
      </div>
    </div>
  );
}
