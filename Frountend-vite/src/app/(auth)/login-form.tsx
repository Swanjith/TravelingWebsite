import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock, Phone } from "lucide-react";
import { useState } from "react";

export default function LoginForm({ onSwitchToSignup }: { onSwitchToSignup: () => void }) {
  const [loginType, setLoginType] = useState<'email' | 'phone'>('email');

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md space-y-8"
    >
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back</h1>
        <p className="text-gray-400">Sign in to your account</p>
      </div>

      <div className="space-y-4">
        <div className="flex space-x-4 mb-4">
          <Button
            variant={loginType === 'email' ? 'default' : 'outline'}
            className={loginType === 'email' ? 'bg-blue-600' : 'border-gray-700 text-white'}
            onClick={() => setLoginType('email')}
          >
            Use Email
          </Button>
          <Button
            variant={loginType === 'phone' ? 'default' : 'outline'}
            className={loginType === 'phone' ? 'bg-blue-600' : 'border-gray-700 text-white'}
            onClick={() => setLoginType('phone')}
          >
            Use Phone
          </Button>
        </div>

        <div className="space-y-2">
          <div className="relative">
            {loginType === 'email' ? (
              <>
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  className="pl-10 bg-gray-100 border-gray-700 text-white placeholder:text-gray-500"
                  placeholder="Email address"
                  type="email"
                />
              </>
            ) : (
              <>
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  className="pl-10 bg-gray-100 border-gray-700 text-white placeholder:text-gray-500"
                  placeholder="Phone number"
                  type="tel"
                />
              </>
            )}
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

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded bg-gray-100 border-gray-700 text-blue-600" />
            <span className="text-sm text-gray-400">Remember me</span>
          </label>
          <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
            Forgot password?
          </a>
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Sign In
          </Button>
        </motion.div>

        <div className="text-center">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <button

              className="text-blue-400 hover:text-blue-300"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );
}