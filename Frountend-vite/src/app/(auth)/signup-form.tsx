import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock, User, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function SignupForm() {
  const Navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md space-y-8"
    >
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">Create Account</h1>
        <p className="text-gray-400">Sign up for a new account</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              className="pl-10 bg-gray-100 border-gray-700 text-white placeholder:text-gray-500"
              placeholder="First Name"
              type="text"
            />
          </div>
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              className="pl-10 bg-gray-100 border-gray-700 text-white placeholder:text-gray-500"
              placeholder="Last Name"
              type="text"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              className="pl-10 bg-gray-100 border-gray-700 text-white placeholder:text-gray-500"
              placeholder="Email address"
              type="email"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              className="pl-10 bg-gray-100 border-gray-700 text-white placeholder:text-gray-500"
              placeholder="Phone number"
              type="tel"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              className="pl-10 bg-gray-100 border-gray-700 text-white placeholder:text-gray-500"
              placeholder="Password"
              type="password"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              className="pl-10 bg-gray-100 border-gray-700 text-white placeholder:text-gray-500"
              placeholder="Confirm Password"
              type="password"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" className="rounded bg-gray-100 border-gray-700 text-blue-600" />
          <span className="text-sm text-gray-400">
            I agree to the{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Privacy Policy
            </a>
          </span>
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Create Account
          </Button>
        </motion.div>

        <div className="text-center">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Button
              useNa
              className="text-blue-400 hover:text-blue-300"
            >
              Sign in
            </Button>
          </p>
        </div>
      </div>
    </motion.div>
  );
}