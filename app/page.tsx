"use client"; // CRITICAL: This makes it interactive
import { createClient } from "../utils/supabase/client"; // Import the client we just made
import { Shield, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  
  const handleLogin = async (provider: "google" | "github") => {
    const supabase = createClient();
    
    // 1. Redirect to Google/GitHub
    await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${location.origin}/auth/callback`, // Where to come back after login
      },
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#1a0b2e] via-[#0f0f0f] to-[#0f0518] text-white relative overflow-hidden">
      
      {/* GLOWS */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] opacity-70" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px] opacity-70" />

      {/* CARD */}
      <div className="relative w-full max-w-md p-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-purple-900/40 z-10">
        
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-2xl shadow-lg shadow-amber-500/40 ring-1 ring-white/20">
            <Shield className="w-10 h-10 text-black fill-current" />
          </div>
        </div>

        <div className="text-center mb-12 space-y-3">
          <h1 className="text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 drop-shadow-sm">
            HEIMDALL
          </h1>
          <p className="text-xl text-amber-100/90 font-serif italic border-b border-white/10 pb-4 mx-8">
            "Only the worthy shall pass."
          </p>
          <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase pt-2">
            Divine Access Protocol
          </p>
        </div>

        <div className="space-y-4">
          
          {/* GOOGLE BUTTON */}
          <button 
            onClick={() => handleLogin("google")}
            className="group relative w-full flex items-center justify-center gap-3 bg-white text-black font-bold py-4 rounded-xl overflow-hidden transition-all hover:shadow-[0_0_25px_rgba(250,204,21,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="relative flex items-center gap-3 z-10">
              <div className="w-6 h-6 rounded-full border-2 border-zinc-300 flex items-center justify-center">
                <span className="text-sm font-serif font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">G</span>
              </div>
              <span>Continue with Google</span>
            </div>
          </button>

          {/* GITHUB BUTTON */}
          <button 
            onClick={() => handleLogin("github")}
            className="group w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-medium py-4 rounded-xl transition-all hover:bg-white/10 hover:border-purple-500/50 active:scale-[0.98]"
          >
            <Lock className="w-5 h-5 text-zinc-400 group-hover:text-purple-400 transition-colors" />
            <span>Continue with GitHub</span>
          </button>

        </div>
      </div>
    </main>
  );
}