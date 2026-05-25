"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowLeft } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (error) setError("");
    };

    const validate = () => {
        if (!form.email.trim()) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Enter a valid email address.";
        if (!form.password) return "Password is required.";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validate();
        if (validationError) {
            setError(validationError);
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const { error: authError } = await authClient.signIn.email({
                email: form.email,
                password: form.password,
            });

            if (authError) {
                setError(authError.message || "Invalid email or password. Please try again.");
            } else {
                // router.push("/dashboard");
                router.push("/"); //Homepage
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 relative overflow-hidden">

            {/* Ambient glow */}
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-700/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-80px] right-1/4 w-[300px] h-[300px] bg-purple-800/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full max-w-md">

                {/* Back link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-8 group"
                >
                    <FiArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                    Back to Home
                </Link>

                {/* Card */}
                <div className="bg-[#111113] border border-neutral-800/70 rounded-2xl p-8 shadow-2xl">

                    {/* Logo */}
                    <div className="flex items-center gap-2.5 mb-8">
                        <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center font-bold text-white text-sm shadow-md">
                            H
                        </div>
                        <span className="font-semibold text-sm text-white whitespace-nowrap">
                            Hire{" "}
                            <span className="text-neutral-400 font-medium">Loop</span>
                        </span>
                    </div>

                    {/* Header */}
                    <div className="mb-7">
                        <h1 className="text-2xl font-bold text-white mb-1">Welcome back</h1>
                        <p className="text-sm text-neutral-400">
                            Don&apos;t have an account?{" "}
                            <Link href="/auth/signup" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                                Sign up
                            </Link>
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-5 flex items-start gap-2.5 bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">
                            <span className="mt-0.5 shrink-0">⚠</span>
                            <span>{error}</span>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-neutral-400 tracking-wide">Email</label>
                            <div className="relative">
                                <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" />
                                <input
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="john@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-900/80 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-700 transition-all"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1.5">
                            {/* <div className="flex items-center justify-between">
                                <label className="text-xs font-medium text-neutral-400 tracking-wide">Password</label>
                                <Link
                                    // href="/forgot-password"
                                    className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            </div> */}
                            <div className="relative">
                                <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" />
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-900/80 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 rounded-xl pl-10 pr-11 py-3 outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-700 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
                                >
                                    {showPassword ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            isLoading={isLoading}
                            className="w-full bg-white text-black font-semibold text-sm rounded-xl hover:bg-neutral-100 transition-colors mt-1 h-11"
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </Button>
                    </form>

                    {/* Terms */}
                    {/* <p className="text-xs text-neutral-600 text-center mt-5 leading-relaxed">
                        By signing in, you agree to our{" "}
                        <Link href="/terms" className="text-neutral-500 hover:text-neutral-300 underline underline-offset-2 transition-colors">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-neutral-500 hover:text-neutral-300 underline underline-offset-2 transition-colors">
                            Privacy Policy
                        </Link>
                        .
                    </p> */}
                </div>
            </div>
        </main>
    );
}