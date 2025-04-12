import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";

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
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(values)
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.msg || "Something went wrong");
      } else {
        toast.success("Job posted successfully 🎉");
        resetForm();
      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">
        Post a New Job
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="max-w-3xl mx-auto space-y-6">
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

          <div>
            <label className="block mb-1">Posted By (Platform)</label>
            <Field name="postedBy" placeholder="e.g. LinkedIn, Naukri" className="w-full p-3 rounded bg-gray-900 border border-cyan-500" />
            <ErrorMessage name="postedBy" component="div" className="text-red-400 text-sm" />
          </div>

          <button type="submit" className="w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-md font-semibold">
            Post Job
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AdminJobForm;