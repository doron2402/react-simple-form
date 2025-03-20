import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  confirm: boolean;
}

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Successfully submitted form');
        setSubmitted(true);
      } else {
        alert("Failed to submit form");
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="glass-effect p-8 shadow-xl rounded-2xl text-center w-96">
          <div className="mb-4">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Thank You!</h2>
          <p className="text-gray-100">Your message has been received. We'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-purple-600 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="glass-effect p-8 shadow-xl rounded-2xl w-full max-w-md relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-400 rounded-full opacity-10"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400 rounded-full opacity-10"></div>

        <h2 className="text-3xl font-bold text-white text-center mb-8">Get in Touch</h2>

        <div className="space-y-6">
          <div className="relative">
            <label className="block text-white text-sm font-medium mb-2 ml-1">First Name</label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50
                focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent
                transition-all duration-300 hover:bg-white/20"
              placeholder="Enter your first name"
            />
            {errors.firstName && <p className="mt-2 text-pink-200 text-sm">{errors.firstName.message}</p>}
          </div>

          <div className="relative">
            <label className="block text-white text-sm font-medium mb-2 ml-1">Last Name</label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50
                focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent
                transition-all duration-300 hover:bg-white/20"
              placeholder="Enter your last name"
            />
            {errors.lastName && <p className="mt-2 text-pink-200 text-sm">{errors.lastName.message}</p>}
          </div>

          <div className="relative">
            <label className="block text-white text-sm font-medium mb-2 ml-1">Phone</label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: { value: /^[0-9]+$/, message: "Invalid phone number" },
              })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50
                focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent
                transition-all duration-300 hover:bg-white/20"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="mt-2 text-pink-200 text-sm">{errors.phone.message}</p>}
          </div>

          <div className="relative">
            <label className="block text-white text-sm font-medium mb-2 ml-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Invalid email" },
              })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50
                focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent
                transition-all duration-300 hover:bg-white/20"
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-2 text-pink-200 text-sm">{errors.email.message}</p>}
          </div>

          <div className="flex items-center space-x-3 py-2">
            <input
              type="checkbox"
              {...register("confirm", { required: "You must confirm before submitting" })}
              className="w-5 h-5 rounded border-white/20 bg-white/10 text-pink-500
                focus:ring-2 focus:ring-pink-400 focus:ring-offset-0"
            />
            <label className="text-white text-sm">I confirm that the details are correct</label>
          </div>
          {errors.confirm && <p className="text-pink-200 text-sm">{errors.confirm.message}</p>}

          <button
            type="submit"
            className="w-full bg-white/20 backdrop-blur-sm text-white py-3 px-6 rounded-xl font-medium
              hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-pink-500
              transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
              border border-white/20"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;