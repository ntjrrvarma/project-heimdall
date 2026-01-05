import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const supabase = await createClient();

  // 1. Check if user is logged in
  const { data: { user } } = await supabase.auth.getUser();

  // 2. If not, kick them back to login
  if (!user) {
    return redirect("/");
  }

  return (
    <div className="min-h-screen bg-black text-white p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 mb-4">
        WELCOME TO ASGARD
      </h1>
      <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-center">
        <img 
          src={user.user_metadata.avatar_url} 
          alt="Avatar" 
          className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-yellow-500"
        />
        <p className="text-xl font-bold text-yellow-200">{user.user_metadata.full_name}</p>
        <p className="text-sm text-zinc-400">{user.email}</p>
      </div>
      
      {/* LOGOUT BUTTON (Optional for now) */}
      <form action="/auth/signout" method="post" className="mt-8">
        <button className="bg-red-600/20 text-red-400 px-6 py-2 rounded hover:bg-red-600/40 transition">
          Sign Out
        </button>
      </form>
    </div>
  );
}