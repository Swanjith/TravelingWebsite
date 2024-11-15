import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock, User } from "lucide-react";

export function AuthForm() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-start p-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back</h1>
          <p className="text-gray-400">Please sign in to your account or create a new one</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                className="pl-10 bg-gray-100 border-gray-700 text-white placeholder:text-gray-500"
                placeholder="Username"
                type="text"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                className="pl-10 bg-gray-100 border-gray-700 text-white placeholder:text-gray-500"
                placeholder="Email"
                type="email"
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

          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Sign In
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Button
              variant="outline"
              className="w-full border-gray-700 text-white hover:bg-gray-100"
            >
              Create Account
            </Button>
          </motion.div>
        </div>

        <div className="text-center">
          <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
            Forgot your password?
          </a>
        </div>
      </motion.div>
    </div>
  );
}