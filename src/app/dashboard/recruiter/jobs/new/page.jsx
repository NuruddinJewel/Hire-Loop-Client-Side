// "use client";

// import React, { useState } from "react";
// import { Button, toast } from "@heroui/react";
// import { FiBriefcase, FiMapPin, FiDollarSign, FiCalendar, FiFileText, FiChevronDown, FiToggleLeft, FiToggleRight, FiAlertCircle, FiCheckCircle, FiArrowLeft } from "react-icons/fi";
// import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
// import Link from "next/link";
// import { authClient } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";

// const JOB_CATEGORIES = ["Technology", "Design", "Marketing", "Finance", "Operations", "Sales", "HR", "Legal", "Healthcare", "Education", "Other"];
// const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship"];
// const CURRENCIES = ["USD", "BDT", "EUR", "GBP", "INR", "CAD", "AUD"];


// // Reusable field wrapper
// const Field = ({ label, children, className = "" }) => (
//     <div className={`flex flex-col gap-1.5 ${className}`}>
//         <label className="text-xs font-medium text-neutral-400 tracking-wide uppercase">{label}</label>
//         {children}
//     </div>
// );

// // Reusable text input
// const TextInput = ({ icon: Icon, placeholder, value, onChange, type = "text", prefix, ...props }) => (
//     <div className="relative flex items-center">
//         {prefix && (
//             <span className="absolute left-0 flex items-center h-full px-3 text-xs text-neutral-500 border-r border-neutral-800 bg-neutral-900/60 rounded-l-xl select-none">
//                 {prefix}
//             </span>
//         )}
//         {Icon && !prefix && (
//             <Icon className="absolute left-3.5 h-4 w-4 text-neutral-500 pointer-events-none" />
//         )}
//         <input
//             type={type}
//             placeholder={placeholder}
//             value={value}
//             onChange={onChange}
//             className={`w-full bg-neutral-900/80 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 rounded-xl py-3 outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-700/60 transition-all
//                 ${prefix ? "pl-20 pr-4" : Icon ? "pl-10 pr-4" : "px-4"}`}
//             {...props}
//         />
//     </div>
// );

// // Reusable select
// const SelectInput = ({ value, onChange, options, placeholder }) => (
//     <div className="relative">
//         <select
//             value={value}
//             onChange={onChange}
//             className="w-full appearance-none bg-neutral-900/80 border border-neutral-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-700/60 transition-all cursor-pointer"
//         >
//             {placeholder && <option value="" disabled>{placeholder}</option>}
//             {options.map(opt => (
//                 <option key={opt} value={opt} className="bg-neutral-900">{opt}</option>
//             ))}
//         </select>
//         <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" />
//     </div>
// );

// // Reusable textarea
// const TextArea = ({ placeholder, value, onChange, rows = 5 }) => (
//     <textarea
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         rows={rows}
//         className="w-full bg-neutral-900/80 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 rounded-xl px-4 py-3 outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-700/60 transition-all resize-none"
//     />
// );

// // Section header
// const SectionHeader = ({ icon: Icon, title, subtitle }) => (
//     <div className="flex items-center gap-3 mb-6">
//         <div className="p-2 bg-neutral-900/80 border border-neutral-800/60 rounded-lg">
//             <Icon className="h-4 w-4 text-purple-400" />
//         </div>
//         <div>
//             <h3 className="text-sm font-semibold text-white">{title}</h3>
//             {subtitle && <p className="text-xs text-neutral-500 mt-0.5">{subtitle}</p>}
//         </div>
//     </div>
// );

// export default function NewJobPage() {
//     const { data: session, isPending } = authClient.useSession();
//     const router = useRouter();

//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState(false);
//     const [isRemote, setIsRemote] = useState(false);

//     const [form, setForm] = useState({
//         title: "",
//         category: "",
//         jobType: "",
//         salaryMin: "",
//         salaryMax: "",
//         currency: "USD",
//         city: "",
//         country: "",
//         deadline: "",
//         responsibilities: "",
//         requirements: "",
//         benefits: "",
//     });

//     const set = (field) => (e) => {
//         setForm(prev => ({ ...prev, [field]: e.target.value }));
//         if (error) setError("");
//     };

//     const validate = () => {
//         if (!form.title.trim()) return "Job title is required.";
//         if (!form.category) return "Please select a job category.";
//         if (!form.jobType) return "Please select a job type.";
//         if (!form.salaryMin || !form.salaryMax) return "Salary range is required.";
//         if (Number(form.salaryMin) >= Number(form.salaryMax)) return "Max salary must be greater than min salary.";
//         if (!isRemote && (!form.city.trim() || !form.country.trim())) return "City and Country are required (or toggle Remote).";
//         if (!form.deadline) return "Application deadline is required.";
//         if (!form.responsibilities.trim()) return "Responsibilities are required.";
//         if (!form.requirements.trim()) return "Requirements are required.";
//         return null;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const validationError = validate();
//         if (validationError) { setError(validationError); return; }

//         setIsLoading(true);
//         setError("");

//         try {
//             const res = await fetch("/api/jobs", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     ...form,
//                     isRemote,
//                     status: "active",
//                     recruiterId: session?.user?.id,
//                 }),
//             });

//             const data = await res.json();
//             if (!res.ok) {
//                 setError(data.message || "Failed to post job. Please try again.");
//             } else {
//                 setSuccess(true);
//                 toast.success("Job posted successfully")
//                 setTimeout(() => router.push("/dashboard/recruiter/jobs"), 2000);
//             }
//         } catch {
//             setError("An unexpected error occurred. Please try again.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     if (isPending) return (
//         <div className="flex h-screen items-center justify-center bg-[#0a0a0a]">
//             <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
//         </div>
//     );

//     if (!session) return (
//         <div className="flex h-screen items-center justify-center bg-[#0a0a0a]">
//             <p className="text-red-400">Access Denied. Please log in.</p>
//         </div>
//     );

//     return (
//         <div className="min-h-screen bg-[#0a0a0a] text-white">
//             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

//                 {/* Page Header */}
//                 <div className="mb-8">
//                     <Link
//                         href="/dashboard/recruiter/jobs"
//                         className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-6 group"
//                     >
//                         <FiArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
//                         Back to Jobs
//                     </Link>
//                     <h1 className="text-3xl font-bold text-white">Post a New Job</h1>
//                     <p className="text-sm text-neutral-500 mt-1.5">Fill in the details below to publish your job listing.</p>
//                 </div>

//                 {/* Success Banner */}
//                 {success && (
//                     <div className="mb-6 flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm px-4 py-3 rounded-xl">
//                         <FiCheckCircle className="h-4 w-4 shrink-0" />
//                         <span>Job posted successfully! Redirecting...</span>
//                     </div>
//                 )}

//                 {/* Error Banner */}
//                 {error && (
//                     <div className="mb-6 flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">
//                         <FiAlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
//                         <span>{error}</span>
//                     </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="flex flex-col gap-5">

//                     {/* ── SECTION 1: Job Info ── */}
//                     <div className="bg-[#111113] border border-neutral-800/70 rounded-2xl p-6">
//                         <SectionHeader icon={FiBriefcase} title="Job Information" subtitle="Basic details about the position" />

//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                             <Field label="Job Title" className="sm:col-span-2">
//                                 <TextInput
//                                     icon={FiBriefcase}
//                                     placeholder="e.g. Senior Frontend Developer"
//                                     value={form.title}
//                                     onChange={set("title")}
//                                 />
//                             </Field>

//                             <Field label="Job Category">
//                                 <SelectInput
//                                     value={form.category}
//                                     onChange={set("category")}
//                                     options={JOB_CATEGORIES}
//                                     placeholder="Select category"
//                                 />
//                             </Field>

//                             <Field label="Job Type">
//                                 <SelectInput
//                                     value={form.jobType}
//                                     onChange={set("jobType")}
//                                     options={JOB_TYPES}
//                                     placeholder="Select type"
//                                 />
//                             </Field>

//                             {/* Salary */}
//                             <Field label="Min Salary">
//                                 <TextInput
//                                     icon={FiDollarSign}
//                                     type="number"
//                                     placeholder="e.g. 50000"
//                                     value={form.salaryMin}
//                                     onChange={set("salaryMin")}
//                                     min="0"
//                                 />
//                             </Field>

//                             <Field label="Max Salary">
//                                 <TextInput
//                                     icon={FiDollarSign}
//                                     type="number"
//                                     placeholder="e.g. 80000"
//                                     value={form.salaryMax}
//                                     onChange={set("salaryMax")}
//                                     min="0"
//                                 />
//                             </Field>

//                             <Field label="Currency">
//                                 <SelectInput
//                                     value={form.currency}
//                                     onChange={set("currency")}
//                                     options={CURRENCIES}
//                                 />
//                             </Field>

//                             <Field label="Application Deadline">
//                                 <TextInput
//                                     icon={FiCalendar}
//                                     type="date"
//                                     value={form.deadline}
//                                     onChange={set("deadline")}
//                                 />
//                             </Field>

//                             {/* Location + Remote toggle */}
//                             <Field label="Location" className="sm:col-span-2">
//                                 <div className="flex items-center gap-3 mb-2">
//                                     <button
//                                         type="button"
//                                         onClick={() => setIsRemote(!isRemote)}
//                                         className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-200
//                                             ${isRemote
//                                                 ? "bg-purple-500/15 border-purple-500/50 text-purple-400"
//                                                 : "bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-700"}`}
//                                     >
//                                         {isRemote ? <FiToggleRight className="h-4 w-4" /> : <FiToggleLeft className="h-4 w-4" />}
//                                         Remote
//                                     </button>
//                                     {isRemote && <span className="text-xs text-neutral-500">Location fields disabled for remote jobs</span>}
//                                 </div>
//                                 <div className="grid grid-cols-2 gap-3">
//                                     {/* City */}
//                                     <div className="relative flex items-center">
//                                         <FiMapPin className="absolute left-3.5 h-4 w-4 text-neutral-500 pointer-events-none" />
//                                         <input
//                                             type="text"
//                                             placeholder="City"
//                                             value={form.city}
//                                             onChange={set("city")}
//                                             disabled={isRemote}
//                                             className={`w-full bg-neutral-900/80 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-700/60 transition-all
//                                                 ${isRemote ? "opacity-40 cursor-not-allowed" : ""}`}
//                                         />
//                                     </div>
//                                     {/* Country */}
//                                     <div className="relative flex items-center">
//                                         <input
//                                             type="text"
//                                             placeholder="Country"
//                                             value={form.country}
//                                             onChange={set("country")}
//                                             disabled={isRemote}
//                                             className={`w-full bg-neutral-900/80 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 rounded-xl px-4 py-3 outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-700/60 transition-all
//                                                 ${isRemote ? "opacity-40 cursor-not-allowed" : ""}`}
//                                         />
//                                     </div>
//                                 </div>
//                             </Field>
//                         </div>
//                     </div>

//                     {/* ── SECTION 2: Job Description ── */}
//                     <div className="bg-[#111113] border border-neutral-800/70 rounded-2xl p-6">
//                         <SectionHeader icon={FiFileText} title="Job Description" subtitle="Describe the role in detail" />

//                         <div className="flex flex-col gap-4">
//                             <Field label="Responsibilities">
//                                 <TextArea
//                                     placeholder="• Lead frontend development&#10;• Collaborate with design team&#10;• Review code and mentor juniors..."
//                                     value={form.responsibilities}
//                                     onChange={set("responsibilities")}
//                                     rows={6}
//                                 />
//                             </Field>

//                             <Field label="Requirements">
//                                 <TextArea
//                                     placeholder="• 3+ years of React experience&#10;• Strong TypeScript skills&#10;• Experience with REST APIs..."
//                                     value={form.requirements}
//                                     onChange={set("requirements")}
//                                     rows={6}
//                                 />
//                             </Field>

//                             <Field label="Benefits (Optional)">
//                                 <TextArea
//                                     placeholder="• Competitive salary&#10;• Health insurance&#10;• Flexible working hours..."
//                                     value={form.benefits}
//                                     onChange={set("benefits")}
//                                     rows={4}
//                                 />
//                             </Field>
//                         </div>
//                     </div>

//                     {/* ── SECTION 3: Company (auto-filled) ── */}
//                     <div className="bg-[#111113] border border-neutral-800/70 rounded-2xl p-6">
//                         <SectionHeader
//                             icon={HiOutlineBuildingOffice2}
//                             title="Company"
//                             subtitle="Auto-filled from your registered company"
//                         />
//                         <div className="flex items-center gap-3 bg-neutral-900/60 border border-neutral-800/60 rounded-xl px-4 py-3">
//                             <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
//                                 {session?.user?.name?.[0]?.toUpperCase() || "C"}
//                             </div>
//                             <div>
//                                 <p className="text-sm font-medium text-white">{session?.user?.companyName || "Your Company"}</p>
//                                 <p className="text-xs text-neutral-500">Linked to your recruiter account · {session?.user?.email}</p>
//                             </div>
//                             <div className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
//                                 <FiCheckCircle className="h-3 w-3" />
//                                 Approved
//                             </div>
//                         </div>
//                     </div>

//                     {/* ── ACTION BUTTONS ── */}
//                     <div className="flex items-center justify-end gap-3 pt-2">
//                         <Link href="/dashboard/recruiter/jobs">
//                             <Button
//                                 type="button"
//                                 variant="bordered"
//                                 className="border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 font-medium px-6 rounded-xl transition-colors"
//                             >
//                                 Cancel
//                             </Button>
//                         </Link>
//                         <Button
//                             type="submit"
//                             isLoading={isLoading}
//                             className="bg-white text-black font-semibold px-8 rounded-xl hover:bg-neutral-100 transition-colors h-11"
//                         >
//                             {isLoading ? "Posting..." : "Post Job"}
//                         </Button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

"use client";

import React, { useState } from "react";
import { Button, toast } from "@heroui/react";
import { FiBriefcase, FiMapPin, FiDollarSign, FiCalendar, FiFileText, FiChevronDown, FiToggleLeft, FiToggleRight, FiAlertCircle, FiCheckCircle, FiArrowLeft } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { createJob } from "@/lib/actions/jobs";

const JOB_CATEGORIES = ["Technology", "Design", "Marketing", "Finance", "Operations", "Sales", "HR", "Legal", "Healthcare", "Education", "Other"];
const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship"];
const CURRENCIES = ["USD", "BDT", "EUR", "GBP", "INR", "CAD", "AUD"];

const Field = ({ label, children, className = "" }) => (
    <div className={`flex flex-col gap-1.5 ${className}`}>
        <label className="text-xs font-medium text-neutral-400 tracking-wide uppercase">{label}</label>
        {children}
    </div>
);

const TextInput = ({ icon: Icon, placeholder, value, onChange, type = "text", prefix, ...props }) => (
    <div className="relative flex items-center">
        {prefix && (
            <span className="absolute left-0 flex items-center h-full px-3 text-xs text-neutral-500 border-r border-neutral-800 bg-neutral-900/60 rounded-l-xl select-none">
                {prefix}
            </span>
        )}
        {Icon && !prefix && (
            <Icon className="absolute left-3.5 h-4 w-4 text-neutral-500 pointer-events-none" />
        )}
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full bg-neutral-900/80 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 rounded-xl py-3 outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-700/60 transition-all
                ${prefix ? "pl-20 pr-4" : Icon ? "pl-10 pr-4" : "px-4"}`}
            {...props}
        />
    </div>
);

const SelectInput = ({ value, onChange, options, placeholder }) => (
    <div className="relative">
        <select
            value={value}
            onChange={onChange}
            className="w-full appearance-none bg-neutral-900/80 border border-neutral-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-700/60 transition-all cursor-pointer"
        >
            {placeholder && <option value="" disabled>{placeholder}</option>}
            {options.map(opt => (
                <option key={opt} value={opt} className="bg-neutral-900">{opt}</option>
            ))}
        </select>
        <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" />
    </div>
);

const TextArea = ({ placeholder, value, onChange, rows = 5 }) => (
    <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full bg-neutral-900/80 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 rounded-xl px-4 py-3 outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-700/60 transition-all resize-none"
    />
);

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
    <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-neutral-900/80 border border-neutral-800/60 rounded-lg">
            <Icon className="h-4 w-4 text-purple-400" />
        </div>
        <div>
            <h3 className="text-sm font-semibold text-white">{title}</h3>
            {subtitle && <p className="text-xs text-neutral-500 mt-0.5">{subtitle}</p>}
        </div>
    </div>
);

export default function NewJobPage() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isRemote, setIsRemote] = useState(false);

    const [form, setForm] = useState({
        title: "",
        category: "",
        jobType: "",
        salaryMin: "",
        salaryMax: "",
        currency: "USD",
        city: "",
        country: "",
        deadline: "",
        responsibilities: "",
        requirements: "",
        benefits: "",
    });

    const set = (field) => (e) => {
        setForm(prev => ({ ...prev, [field]: e.target.value }));
        if (error) setError("");
    };

    const validate = () => {
        if (!form.title.trim()) return "Job title is required.";
        if (!form.category) return "Please select a job category.";
        if (!form.jobType) return "Please select a job type.";
        if (!form.salaryMin || !form.salaryMax) return "Salary range is required.";
        if (Number(form.salaryMin) >= Number(form.salaryMax)) return "Max salary must be greater than min salary.";
        if (!isRemote && (!form.city.trim() || !form.country.trim())) return "City and Country are required (or toggle Remote).";
        if (!form.deadline) return "Application deadline is required.";
        if (!form.responsibilities.trim()) return "Responsibilities are required.";
        if (!form.requirements.trim()) return "Requirements are required.";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validate();
        if (validationError) { setError(validationError); return; }

        setIsLoading(true);
        setError("");

        try {
            const newJobData = {
                ...form,
                isRemote,
                status: "active",
                recruiterId: session?.user?.id,
                recruiterEmail: session?.user?.email,
                postedAt: new Date().toISOString(),
            };

            const result = await createJob(newJobData);

            if (result?.insertedId) {
                setSuccess(true);
                toast({
                    title: "Job posted successfully!",
                    description: "Your job is now publicly visible.",
                    color: "success",
                });
                setTimeout(() => router.push("/dashboard/recruiter/jobs"), 2000);
            } else {
                setError(result?.message || "Failed to post job. Please try again.");
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isPending) return (
        <div className="flex h-screen items-center justify-center bg-[#0a0a0a]">
            <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
        </div>
    );

    if (!session) return (
        <div className="flex h-screen items-center justify-center bg-[#0a0a0a]">
            <p className="text-red-400">Access Denied. Please log in.</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Page Header */}
                <div className="mb-8">
                    <Link
                        href="/dashboard/recruiter/jobs"
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-6 group"
                    >
                        <FiArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                        Back to Jobs
                    </Link>
                    <h1 className="text-3xl font-bold text-white">Post a New Job</h1>
                    <p className="text-sm text-neutral-500 mt-1.5">Fill in the details below to publish your job listing.</p>
                </div>

                {/* Success Banner */}
                {success && (
                    <div className="mb-6 flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm px-4 py-3 rounded-xl">
                        <FiCheckCircle className="h-4 w-4 shrink-0" />
                        <span>Job posted successfully! Redirecting...</span>
                    </div>
                )}

                {/* Error Banner */}
                {error && (
                    <div className="mb-6 flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">
                        <FiAlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    {/* ── SECTION 1: Job Info ── */}
                    <div className="bg-[#111113] border border-neutral-800/70 rounded-2xl p-6">
                        <SectionHeader icon={FiBriefcase} title="Job Information" subtitle="Basic details about the position" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field label="Job Title" className="sm:col-span-2">
                                <TextInput
                                    icon={FiBriefcase}
                                    placeholder="e.g. Senior Frontend Developer"
                                    value={form.title}
                                    onChange={set("title")}
                                />
                            </Field>

                            <Field label="Job Category">
                                <SelectInput
                                    value={form.category}
                                    onChange={set("category")}
                                    options={JOB_CATEGORIES}
                                    placeholder="Select category"
                                />
                            </Field>

                            <Field label="Job Type">
                                <SelectInput
                                    value={form.jobType}
                                    onChange={set("jobType")}
                                    options={JOB_TYPES}
                                    placeholder="Select type"
                                />
                            </Field>

                            <Field label="Min Salary">
                                <TextInput
                                    icon={FiDollarSign}
                                    type="number"
                                    placeholder="e.g. 50000"
                                    value={form.salaryMin}
                                    onChange={set("salaryMin")}
                                    min="0"
                                />
                            </Field>

                            <Field label="Max Salary">
                                <TextInput
                                    icon={FiDollarSign}
                                    type="number"
                                    placeholder="e.g. 80000"
                                    value={form.salaryMax}
                                    onChange={set("salaryMax")}
                                    min="0"
                                />
                            </Field>

                            <Field label="Currency">
                                <SelectInput
                                    value={form.currency}
                                    onChange={set("currency")}
                                    options={CURRENCIES}
                                />
                            </Field>

                            <Field label="Application Deadline">
                                <TextInput
                                    icon={FiCalendar}
                                    type="date"
                                    value={form.deadline}
                                    onChange={set("deadline")}
                                />
                            </Field>

                            {/* Location + Remote toggle */}
                            <Field label="Location" className="sm:col-span-2">
                                <div className="flex items-center gap-3 mb-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsRemote(!isRemote)}
                                        className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-200
                                            ${isRemote
                                                ? "bg-purple-500/15 border-purple-500/50 text-purple-400"
                                                : "bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-700"}`}
                                    >
                                        {isRemote ? <FiToggleRight className="h-4 w-4" /> : <FiToggleLeft className="h-4 w-4" />}
                                        Remote
                                    </button>
                                    {isRemote && <span className="text-xs text-neutral-500">Location fields disabled for remote jobs</span>}
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="relative flex items-center">
                                        <FiMapPin className="absolute left-3.5 h-4 w-4 text-neutral-500 pointer-events-none" />
                                        <input
                                            type="text"
                                            placeholder="City"
                                            value={form.city}
                                            onChange={set("city")}
                                            disabled={isRemote}
                                            className={`w-full bg-neutral-900/80 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-700/60 transition-all
                                                ${isRemote ? "opacity-40 cursor-not-allowed" : ""}`}
                                        />
                                    </div>
                                    <div className="relative flex items-center">
                                        <input
                                            type="text"
                                            placeholder="Country"
                                            value={form.country}
                                            onChange={set("country")}
                                            disabled={isRemote}
                                            className={`w-full bg-neutral-900/80 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 rounded-xl px-4 py-3 outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-700/60 transition-all
                                                ${isRemote ? "opacity-40 cursor-not-allowed" : ""}`}
                                        />
                                    </div>
                                </div>
                            </Field>
                        </div>
                    </div>

                    {/* ── SECTION 2: Job Description ── */}
                    <div className="bg-[#111113] border border-neutral-800/70 rounded-2xl p-6">
                        <SectionHeader icon={FiFileText} title="Job Description" subtitle="Describe the role in detail" />

                        <div className="flex flex-col gap-4">
                            <Field label="Responsibilities">
                                <TextArea
                                    placeholder="• Lead frontend development&#10;• Collaborate with design team&#10;• Review code and mentor juniors..."
                                    value={form.responsibilities}
                                    onChange={set("responsibilities")}
                                    rows={6}
                                />
                            </Field>

                            <Field label="Requirements">
                                <TextArea
                                    placeholder="• 3+ years of React experience&#10;• Strong TypeScript skills&#10;• Experience with REST APIs..."
                                    value={form.requirements}
                                    onChange={set("requirements")}
                                    rows={6}
                                />
                            </Field>

                            <Field label="Benefits (Optional)">
                                <TextArea
                                    placeholder="• Competitive salary&#10;• Health insurance&#10;• Flexible working hours..."
                                    value={form.benefits}
                                    onChange={set("benefits")}
                                    rows={4}
                                />
                            </Field>
                        </div>
                    </div>

                    {/* ── SECTION 3: Company (auto-filled) ── */}
                    <div className="bg-[#111113] border border-neutral-800/70 rounded-2xl p-6">
                        <SectionHeader
                            icon={HiOutlineBuildingOffice2}
                            title="Company"
                            subtitle="Auto-filled from your registered company"
                        />
                        <div className="flex items-center gap-3 bg-neutral-900/60 border border-neutral-800/60 rounded-xl px-4 py-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0">
                                {session?.user?.name?.[0]?.toUpperCase() || "C"}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">{session?.user?.companyName || "Your Company"}</p>
                                <p className="text-xs text-neutral-500">Linked to your recruiter account · {session?.user?.email}</p>
                            </div>
                            <div className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                                <FiCheckCircle className="h-3 w-3" />
                                Approved
                            </div>
                        </div>
                    </div>

                    {/* ── ACTION BUTTONS ── */}
                    <div className="flex items-center justify-end gap-3 pt-2">
                        <Link href="/dashboard/recruiter/jobs">
                            <Button
                                type="button"
                                variant="bordered"
                                className="border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 font-medium px-6 rounded-xl transition-colors"
                            >
                                Cancel
                            </Button>
                        </Link>
                        <Button
                            type="submit"
                            isLoading={isLoading}
                            className="bg-white text-black font-semibold px-8 rounded-xl hover:bg-neutral-100 transition-colors h-11"
                        >
                            {isLoading ? "Posting..." : "Post Job"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}