"use client";

import { SendHorizonal } from "lucide-react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";

interface IFormInputs {
  fullName: string;
  email: string;
  mobileNo?: number;
  subject?: string;
  message: string;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <section className=" flex justify-center items-center bg-gray-100 p-4 w-[80%] rounded-[30px] md:rounded-[50px] mt-10">
      <div className=" p-2 md:p-6 2xl:p-12 w-full">
        <div className="relative w-full whitespace-nowrap text-center mb-4">
          <h2 className="opacity-20 text-6xl text-transparent font-bold text-gray-400 font-outline-2-light">Contact Me</h2>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-gray-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Contact Me
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:grid md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-600 mb-2 ml-6">Full Name *</label>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("fullName", {
                required: "Full Name is required",
                maxLength: 80,
              })}
              className="w-full py-4 2xl:py-6 px-9 rounded-full text-black border focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-2 ml-6">Email *</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
              })}
              className="w-full py-4 2xl:py-6 px-9 rounded-full text-black border focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-gray-600 mb-2 ml-6">Mobile No.</label>
            <input
              type="number"
              placeholder="Enter your mobile number"
              {...register("mobileNo", {
                maxLength: { value: 10, message: "Max 10 digits allowed" },
              })}
              className="w-full py-4 2xl:py-6 px-9 rounded-full text-black border focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.mobileNo && <p className="text-red-500 text-sm mt-1">{errors.mobileNo.message}</p>}
          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-600 mb-2 ml-6">Subject</label>
            <input
              type="text"
              placeholder="Enter the subject"
              {...register("subject")}
              className="w-full py-4 2xl:py-6 px-9 rounded-full text-black border focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Message */}
          <div className="col-span-2">
            <label className="block text-gray-600 mb-2 ml-6">Message *</label>
            <textarea
              placeholder="Enter your message here"
              {...register("message", {
                required: "Message is required",
                maxLength: { value: 1000, message: "Max 1000 characters allowed" },
                minLength: { value: 50, message: "At least 50 characters required" },
              })}
              rows={5}
              className="w-full py-4 2xl:py-6 px-9 border rounded-2xl text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className=" bg-yellow-500 hover:bg-yellow-500/20 w-44 hover:border-yellow-500 hover:border hover:text-yellow-500 text-white text-2xl font-bold !py-7 px-6 rounded-full transition-all duration-300"
          >
            Send
            <SendHorizonal className="!w-8 !h-8" />
          </Button>
        </form>
      </div>
    </section>
  );
}
