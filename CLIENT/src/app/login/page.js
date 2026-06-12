"use client"

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"
import FeatureCard from "@/components/FeatureCard";
import { LogIn, Sparkles, Sliders, Blocks, Copy, LayoutTemplate } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  const router = useRouter();
  const { handleGoogleAuth } = useAuth();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.push("/generate");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
        <div className="relative flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin"></div>
          <p className="text-cyan-400 font-medium tracking-wide animate-pulse">Checking session...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className=" h-screen w-full px-4 flex justify-center items-center ">

      <div className=" z-10 w-2/3 h-10/13  flex items-center justify-between rounded-xl bg-linear-to-br from-slate-950 via-teal-950 to-slate-900 ">

        {/* Left Section */}
        <div className=" flex-1  px-8 h-full">

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-400 rounded-xl flex items-center justify-center">
              <LayoutTemplate className="w-6 h-6 text-slate-900" />
            </div>
            <h1 className="text-2xl font-semibold text-white ">VirtualUI</h1>
          </div>

          {/* How It Works Section */}
          <div className="space-y-4">
            <h2 className="text-cyan-200 text-xs font-semibold tracking-widest">HOW IT WORKS</h2>

            {/* Feature Items */}
            <div className="space-y-2">

              {
                [
                  { icon: LogIn, title: "Login With Google" },
                  { icon: Sparkles, title: " Get 150 AI Credits" },
                  { icon: Sliders, title: " Customize Props" },
                  { icon: Blocks, title: "Generate Components" },
                  { icon: Copy, title: "Copy or Save" }
                ].map((e, index) => (
                  <FeatureCard key={index} icon={e.icon} title={e.title} />
                ))
              }

            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className=" flex-1 flex flex-col items-center justify-center bg-black h-full ">
          {/* Icon */}
          <div className="w-16 h-16 bg-cyan-400/10 border border-cyan-400/30 rounded-2xl flex items-center justify-center mb-8">
            <LayoutTemplate className="w-10 h-10 text-cyan-400" />
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Welcome</h2>
            <p className="text-slate-400 text-base">Sign in to generate AI-powered UI components <br /> in seconds</p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-12 w-full">

            {
              [{ kaam: "150", naam: "AICREDITS" }, { kaam: "∞", naam: "COMPONENTS" }, { kaam: "JSX", naam: "READY" }].map(e =>
                <div key={e.kaam} className="text-center">
                  <div className="text-2xl font-bold rounded-lg p-2 bg-slate-700 text-cyan-400">{e.kaam}</div>
                  <div className="text-slate-500 text-xs mt-1">{e.naam}</div>
                </div>
              )}
          </div>

          <GoogleOAuthProvider clientId="536825012398-1d35bc52gj5vgm01aiso2oeogo7dfcka.apps.googleusercontent.com">
            <GoogleLogin onSuccess={(credentialResponse) => handleGoogleAuth(credentialResponse)} onError={() => console.log('Login Failed')} />
          </GoogleOAuthProvider>

          {/* Footer Note */}
          <p className="text-slate-500 text-sm mt-6">No account needed for npm. <a href="#" className="text-cyan-400 hover:text-cyan-300">View docs →</a></p>
        </div>

      </div>
    </div>
  );
}

export default Login;