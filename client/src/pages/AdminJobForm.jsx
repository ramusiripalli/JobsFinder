import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const AdminJobForm = () => {
  const initialValues = {
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    salary: "",
    description: "",
    jobLink: "",
    passouts: [],
    postedBy: ""
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Job title is required"),
    company: Yup.string().required("Company name is required"),
    location: Yup.string().required("Location is required"),
    type: Yup.string().required("Job type is required"),
    salary: Yup.string(),
    description: Yup.string().required("Job description is required"),
    jobLink: Yup.string().url("Enter a valid URL").required("Job link is required"),
    passouts: Yup.array().min(1, "Select at least one passout year"),
    postedBy: Yup.string().required("Posted by field is required")
  });

  const onSubmit = async (values, { resetForm }) => {
    console.log("Submitting Form with values:", values);
    try {
      const token = localStorage.getItem("token");
      console.log("Token from localStorage:", token);
      const apiURL = `${import.meta.env.VITE_API_BASE_URL}/api/jobs/create`;
      console.log("API URL:", apiURL);

      const res = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(values)
      });

      console.log("Response Status:", res.status);
      const data = await res.json();
      console.log("Response Data:", data);

      if (!res.ok) {
        toast.error(data.msg || "Something went wrong");
      } else {
        toast.success("Job posted successfully 🎉");
        resetForm();
      }
    } catch (error) {
      console.error("Error while submitting job:", error);
      toast.error("Network error");
    }
  };

  console.log("Rendering AdminJobForm...");

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Sidebar */}
      <aside className="w-80 bg-[#0f0f1fdd] p-6 border-r border-cyan-500 hidden md:block">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff00c3] mb-10">
          UdyogaSetu Admin
        </h2>
        <nav className="space-y-5">
          <Link
            to="/admin/dashboard"
            className="block px-4 py-2 bg-gradient-to-r from-[#00f0ff] to-[#ff00c3] text-white rounded-md font-semibold hover:shadow-[#ff00c3] transition-all duration-200 shadow-md"
          >
            Admin Dashboard
          </Link>
          <Link
            to="/admin/post-job"
            className="block px-4 py-2 rounded bg-cyan-800 hover:bg-cyan-700 transition"
          >
            Post a Job
          </Link>
        </nav>
      </aside>

      {/* Main Form Section */}
      <main className="flex-1 p-6 flex justify-center items-start bg-black">
        <div className="w-full max-w-3xl border-2 border-cyan-500 rounded-xl p-8 bg-[#0f0f1fdd] shadow-xl shadow-cyan-400 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff00c3] py-5">
            Post a New Job
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, errors, touched }) => {
              console.log("Formik values:", values);
              console.log("Formik errors:", errors);
              console.log("Formik touched:", touched);

              return (
                <Form className="space-y-6">
                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1">Job Title</label>
                      <Field name="title" className="w-full p-3 rounded bg-gray-900 border border-cyan-500" />
                      <ErrorMessage name="title" component="div" className="text-red-400 text-sm" />
                    </div>
                    <div>
                      <label className="block mb-1">Company</label>
                      <Field name="company" className="w-full p-3 rounded bg-gray-900 border border-cyan-500" />
                      <ErrorMessage name="company" component="div" className="text-red-400 text-sm" />
                    </div>

                    <div>
                      <label className="block mb-1">Location</label>
                      <Field name="location" className="w-full p-3 rounded bg-gray-900 border border-cyan-500" />
                      <ErrorMessage name="location" component="div" className="text-red-400 text-sm" />
                    </div>
                    <div>
                      <label className="block mb-1">Job Type</label>
                      <Field as="select" name="type" className="w-full p-3 rounded bg-gray-900 border border-cyan-500">
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Internship">Internship</option>
                      </Field>
                      <ErrorMessage name="type" component="div" className="text-red-400 text-sm" />
                    </div>

                    <div>
                      <label className="block mb-1">Salary (optional)</label>
                      <Field name="salary" className="w-full p-3 rounded bg-gray-900 border border-cyan-500" />
                    </div>
                    <div>
                      <label className="block mb-1">Posted By (Platform)</label>
                      <Field name="postedBy" placeholder="e.g. LinkedIn, Naukri" className="w-full p-3 rounded bg-gray-900 border border-cyan-500" />
                      <ErrorMessage name="postedBy" component="div" className="text-red-400 text-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1">Description</label>
                    <Field as="textarea" name="description" rows="4" className="w-full p-3 rounded bg-gray-900 border border-cyan-500" />
                    <ErrorMessage name="description" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label className="block mb-1">Job Link</label>
                    <Field name="jobLink" className="w-full p-3 rounded bg-gray-900 border border-cyan-500" />
                    <ErrorMessage name="jobLink" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label className="block mb-1">Passouts</label>
                    <div className="grid grid-cols-4 gap-2">
                      {[2019, 2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
                        <label key={year} className="flex items-center space-x-2">
                          <Field type="checkbox" name="passouts" value={String(year)} />
                          <span>{year}</span>
                        </label>
                      ))}
                    </div>
                    <ErrorMessage name="passouts" component="div" className="text-red-400 text-sm" />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-[#00f0ff] to-[#ff00c3] text-white rounded-md font-semibold hover:shadow-[#ff00c3] transition-all duration-200 shadow-md"
                  >
                    Post Job
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </main>
    </div>
  );
};

export default AdminJobForm;
