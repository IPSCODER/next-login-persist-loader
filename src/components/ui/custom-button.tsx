"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "@/components/form/auth/sign-in";
import SignUp from "@/components/form/auth/sign-up";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Mock authentication state (replace this with actual auth check)
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  return { isAuthenticated, setIsAuthenticated };
};

interface CustomButtonProps {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const CustomButton = ({ onClick, href, children, className }: CustomButtonProps) => {
  const { isAuthenticated } = useAuth();
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!isAuthenticated) {
      event.preventDefault(); // Prevent navigation
      setOpen(true); // Show sign-in popup
      return;
    }
    if (onClick) onClick();
  };

  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <Button className={className} onClick={handleClick}>
            {children}
          </Button>
        </Link>
      ) : (
        <Button className={className} onClick={handleClick}>
          {children}
        </Button>
      )}

      {/* Sign-In Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>Sign In / Sign Up</DialogTitle> {/* Required for accessibility */}
          <Tabs defaultValue="sign-in" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="sign-in">Sign In</TabsTrigger>
              <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="sign-in">
              <SignIn onAuthenticated={() => setOpen(false)} />
            </TabsContent>
            <TabsContent value="sign-up">
              <SignUp onAuthenticated={() => setOpen(false)} />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CustomButton;
