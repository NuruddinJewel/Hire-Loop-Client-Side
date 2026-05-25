"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Input, Button } from "@heroui/react";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (error) setError("");
    };

    const validate = () => {
        if (!form.name.trim()) return "Name is required.";
        if (!form.email.trim()) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Enter a valid email address.";
        if (!form.password) return "Password is required.";
        if (form.password.length < 8) return "Password must be at least 8 characters.";
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
            const { error: authError } = await authClient.signUp.email({
                name: form.name,
                email: form.email,
                password: form.password,
            });

            if (authError) {
                setError(authError.message || "Something went wrong. Please try again.");
            } else {
                setSuccess(true);
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

                {/* Back to Sign In */}
                <Link
                    href="/sign-in"
                    className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-8 group"
                >
                    <FiArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                    Back to Sign In
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

                    {/* Success State */}
                    {success ? (
                        <div className="flex flex-col items-center text-center py-6 gap-4">
                            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                                <FiCheckCircle className="h-7 w-7 text-emerald-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-white mb-1">Account Created!</h2>
                                <p className="text-sm text-neutral-400">
                                    Welcome aboard, <span className="text-white font-medium">{form.name}</span>. Your account is ready.
                                </p>
                            </div>
                            <Link href="/sign-in" className="w-full mt-2">
                                <Button className="w-full bg-white text-black font-semibold rounded-xl hover:bg-neutral-100 transition-colors">
                                    Go to Sign In
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <>
                            {/* Header */}
                            <div className="mb-7">
                                <h1 className="text-2xl font-bold text-white mb-1">Create an account</h1>
                                <p className="text-sm text-neutral-400">
                                    Already have one?{" "}
                                    <Link href="/sign-in" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                                        Sign in
                                    </Link>
                                </p>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="mb-5 flex items-start gap-2.5 bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">
                                    <span className="mt-0.5 flex-shrink-0">⚠</span>
                                    <span>{error}</span>
                                </div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                                {/* Name */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-medium text-neutral-400 tracking-wide">Full Name</label>
                                    <div className="relative">
                                        <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" />
                                        <input
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            placeholder="John Doe"
                                            value={form.name}
                                            onChange={handleChange}
                                            className="w-full bg-neutral-900/80 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-700 transition-all"
                                        />
                                    </div>
                                </div>

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
                                    <label className="text-xs font-medium text-neutral-400 tracking-wide">Password</label>
                                    <div className="relative">
                                        <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" />
                                        <input
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            autoComplete="new-password"
                                            placeholder="Min. 8 characters"
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
                                    {/* Password strength hint */}
                                    {form.password.length > 0 && (
                                        <p className={`text-xs mt-0.5 ${form.password.length >= 8 ? "text-emerald-400" : "text-amber-400"}`}>
                                            {form.password.length >= 8 ? "✓ Strong enough" : `${8 - form.password.length} more characters needed`}
                                        </p>
                                    )}
                                </div>

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    isLoading={isLoading}
                                    className="w-full bg-white text-black font-semibold text-sm py-3 rounded-xl hover:bg-neutral-100 transition-colors mt-1 h-11"
                                >
                                    {isLoading ? "Creating account..." : "Create Account"}
                                </Button>
                            </form>

                            {/* Terms */}
                            <p className="text-xs text-neutral-600 text-center mt-5 leading-relaxed">
                                By signing up, you agree to our{" "}
                                <Link href="/terms" className="text-neutral-500 hover:text-neutral-300 underline underline-offset-2 transition-colors">
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy" className="text-neutral-500 hover:text-neutral-300 underline underline-offset-2 transition-colors">
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}