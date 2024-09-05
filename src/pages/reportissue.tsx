import { useState } from "react";
import DefaultLayout from "@/layouts/default";
import { Input, Textarea } from "@nextui-org/input";
import { image } from "@nextui-org/theme";
import ImageUploader from "@/components/image-uploader";

export default function ReportIssuePage() {
  const [formState, setFormState] = useState({
    subject: "",
    images: [],
    isInvalid: false,
    isLoading: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <DefaultLayout>
      {/* <div className="w-[90%]">
        <Input
          type="text"
          placeholder="Subject"
          value={formState.subject}
          isInvalid={formState.isInvalid}
          isDisabled={formState.isLoading}
          onValueChange={(value) => handleChange("subject", value)}
          onInput={() => handleChange("isInvalid", false)}
        />
      </div> */}
      <ImageUploader />

      {/* <Textarea className="w-[90%]" placeholder="Explain issue here..." /> */}
    </DefaultLayout>
  );
}
