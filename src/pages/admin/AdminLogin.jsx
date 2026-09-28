import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";
import { loginAdmin } from "../../services/authService";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginAdmin(formData);

      console.log("Login Response:", data);

      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminData", JSON.stringify(data.admin));

      alert("Login successful!");
      navigate("/admin");
    } catch (error) {
      console.error("Login Error:", error);

      alert(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#fcf9f3] text-[#1c1c18] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">

        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#775a19] mb-3">
            Glare30 Institute
          </p>

          <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
            Admin <span className="italic text-[#775a19]">Login</span>
          </h1>

          <p className="text-[#5f5e5e] text-sm mt-4">
            Sign in to manage your Glare30 website.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-[#d1c5b4]/40 rounded-2xl p-7 md:p-9 shadow-sm">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#775a19]"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@example.com"
                  required
                  className="w-full h-12 rounded-xl border border-[#d1c5b4]/60 bg-[#fcf9f3]/50 pl-11 pr-4 text-sm outline-none transition focus:border-[#775a19] focus:ring-1 focus:ring-[#775a19]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#775a19]"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full h-12 rounded-xl border border-[#d1c5b4]/60 bg-[#fcf9f3]/50 pl-11 pr-12 text-sm outline-none transition focus:border-[#775a19] focus:ring-1 focus:ring-[#775a19]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5f5e5e] hover:text-[#775a19] transition"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-[#1c1c18] text-[#fcf9f3] flex items-center justify-center gap-2 text-sm font-medium transition hover:bg-[#775a19] group"
            >
              Sign In
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-[#5f5e5e] mt-7">
          Glare30 Institute · Admin Panel
        </p>
      </div>
    </main>
  );
};

export default AdminLogin;