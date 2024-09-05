import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoggedOutLayout from "@/layouts/logged-out";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";
import { title } from "@/components/primitives";

const validateLogin = (email: string, password: string): boolean => {
  return email === "admin@fdtt.com" && password === "1234";
};

export default function LandingPage() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    isHidden: true,
    isInvalid: false,
    isLoading: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  async function onLogIn(): Promise<void> {
    handleChange("isLoading", true);
    if (!validateLogin(formState.email, formState.password)) {
      handleChange("isInvalid", true);
      handleChange("isLoading", false);
      return;
    }
    navigate("/home");
  }

  return (
    <LoggedOutLayout>
      <Card className="flex flex-col justify-center w-fit mb-20">
        <CardHeader className="flex flex-col justify-center p-4 gap-2">
          <div>
            <h1 className={title()}>Empowering&nbsp;</h1>
            <h1 className={title({ color: "yellow" })}>Heroes</h1>
            <h1 className={title()}>,</h1>
          </div>
          <div>
            <h1 className={title()}>Tracking&nbsp;</h1>
            <h1 className={title({ color: "pink" })}>Safety</h1>
          </div>
        </CardHeader>
        <Divider className="max-w-[calc(100%-2rem)] mx-4" />
        <CardBody className="flex pb-6 gap-4 size-full items-center justify-center">
          <div className="flex flex-col gap-4 items-center w-72 mt-2">
            <Input
              type="email"
              placeholder="Email"
              value={formState.email}
              isInvalid={formState.isInvalid}
              isDisabled={formState.isLoading}
              onValueChange={(value) => handleChange("email", value)}
              onInput={() => handleChange("isInvalid", false)}
            />
            <Input
              type={formState.isHidden ? "password" : "text"}
              placeholder="Password"
              isInvalid={formState.isInvalid}
              isDisabled={formState.isLoading}
              value={formState.password}
              onValueChange={(value) => handleChange("password", value)}
              onInput={() => handleChange("isInvalid", false)}
              endContent={
                <Button
                  className="rounded-full bg-transparent"
                  isIconOnly
                  size="sm"
                  type="button"
                  onClick={() => handleChange("isHidden", !formState.isHidden)}
                  aria-label="toggle password visibility"
                >
                  {formState.isHidden ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </Button>
              }
            />
          </div>
          <div className="w-72 grid grid-cols-2 gap-4">
            <Button
              className="w-full"
              color="primary"
              variant="solid"
              isLoading={formState.isLoading}
              onClick={onLogIn}
            >
              Log in
            </Button>
            <Button
              className="w-full"
              color="default"
              variant="bordered"
              isDisabled={formState.isLoading}
            >
              Need Account?
            </Button>
          </div>
        </CardBody>
      </Card>
    </LoggedOutLayout>
  );
}
