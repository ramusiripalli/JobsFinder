import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createJob, resetCreateJobStatus } from "../redux/jobs/jobsSlice";

const AdminJobForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createJobStatus, error } = useSelector((state) => state.jobs);
  const token = useSelector((state) => state.auth.token);

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

  useEffect(() => {
    if (createJobStatus === 'succeeded') {
      toast.success("Job posted successfully 🎉");
      dispatch(resetCreateJobStatus());
      navigate('/admin/dashboard');
    } else if (createJobStatus === 'failed') {
      toast.error(error || "Failed to post job");
      dispatch(resetCreateJobStatus());
    }
  }, [createJobStatus, error, dispatch, navigate]);

  const onSubmit = async (values, { resetForm }) => {
    try {
      // Format passouts as numbers
      const formattedValues = {
        ...values,
        passouts: values.passouts.map(Number)
      };
      
      dispatch(createJob({ jobData: formattedValues, token }));
    } catch (error) {
      toast.error(error.message || "Network error");
    }
  };

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Sidebar */}
      <aside className="w-80 p-6 space-y-10 shadow-2xl border-r border-white">
      <h1 className="text-3xl font-bold text-white tracking-wide">UdyogaSetu</h1>
        <nav className="space-y-5">
          <Link
            to="/admin/dashboard"
            className="block px-4 py-2 bg-gradient-to-l from-[#00f0ff] to-[#ff00c3] rounded font-bold hover:shadow-[#ff00c3] transition-all duration-200 shadow-md"
          >
            Admin Dashboard
          </Link>
          <Link
            to="/admin/post-job"
            className="block px-4 py-2 bg-gradient-to-l from-[#00f0ff] to-[#ff00c3] hover:shadow-[#00f0ff] rounded transition-all duration-200 shadow-md"
          >
            Post a Job
          </Link>
        </nav>
      </aside>

      {/* Main Form Section */}
      <main className="flex-1 p-6 flex justify-center items-start bg-[#0f0f1fdd] ">
        <div className="w-full max-w-3xl border-2 border-cyan-500 rounded-xl p-8 shadow-xl shadow-cyan-400 animate-fade-in-up bg-black">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808] mb-6">
            Post a new Job
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, errors, touched }) => (
              <Form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1">Job Title</label>
                    <Field 
                      name="title" 
                      className="w-full p-3 rounded bg-gray-900 border border-cyan-500" 
                    />
                    <ErrorMessage name="title" component="div" className="text-red-400 text-sm" />
                  </div>
                  <div>
                    <label className="block mb-1">Company</label>
                    <Field 
                      name="company" 
                      className="w-full p-3 rounded bg-gray-900 border border-cyan-500" 
                    />
                    <ErrorMessage name="company" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label className="block mb-1">Location</label>
                    <Field 
                      name="location" 
                      className="w-full p-3 rounded bg-gray-900 border border-cyan-500" 
                    />
                    <ErrorMessage name="location" component="div" className="text-red-400 text-sm" />
                  </div>
                  <div>
                    <label className="block mb-1">Job Type</label>
                    <Field 
                      as="select" 
                      name="type" 
                      className="w-full p-3 rounded bg-gray-900 border border-cyan-500"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Internship">Internship</option>
                    </Field>
                    <ErrorMessage name="type" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label className="block mb-1">Salary (optional)</label>
                    <Field 
                      name="salary" 
                      className="w-full p-3 rounded bg-gray-900 border border-cyan-500" 
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Posted By (Platform)</label>
                    <Field 
                      name="postedBy" 
                      placeholder="e.g. LinkedIn, Naukri" 
                      className="w-full p-3 rounded bg-gray-900 border border-cyan-500" 
                    />
                    <ErrorMessage name="postedBy" component="div" className="text-red-400 text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Description</label>
                  <Field 
                    as="textarea" 
                    name="description" 
                    rows="4" 
                    className="w-full p-3 rounded bg-gray-900 border border-cyan-500" 
                  />
                  <ErrorMessage name="description" component="div" className="text-red-400 text-sm" />
                </div>

                <div>
                  <label className="block mb-1">Job Link</label>
                  <Field 
                    name="jobLink" 
                    className="w-full p-3 rounded bg-gray-900 border border-cyan-500" 
                  />
                  <ErrorMessage name="jobLink" component="div" className="text-red-400 text-sm" />
                </div>

                <div>
                  <label className="block mb-1">Passouts</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[2019, 2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
                      <label key={year} className="flex items-center space-x-2">
                        <Field 
                          type="checkbox" 
                          name="passouts" 
                          value={String(year)} 
                        />
                        <span>{year}</span>
                      </label>
                    ))}
                  </div>
                  <ErrorMessage name="passouts" component="div" className="text-red-400 text-sm" />
                </div>

                <button
                  type="submit"
                  disabled={createJobStatus === 'loading'}
                  className={`w-full py-3 bg-gradient-to-r from-[#00f0ff] to-[#ff00c3] text-white rounded-md font-semibold hover:shadow-[#ff00c3] transition-all duration-200 shadow-md ${
                    createJobStatus === 'loading' ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {createJobStatus === 'loading' ? "Posting..." : "Post Job"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </main>
    </div>
  );
};

export default AdminJobForm;