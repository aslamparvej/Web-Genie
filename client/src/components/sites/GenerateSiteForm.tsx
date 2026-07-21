import React from "react";

import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

import type { GenerateSitePayload } from "../../types/site.types";

const themeOptions = [
  {
    label: "Minimal Dark",
    value: "minimal-dark",
  },
  {
    label: "Warm Cream",
    value: "warm-cream",
  },
  {
    label: "Bold & Modern",
    value: "bold-modern",
  },
  {
    label: "Earthy Natural",
    value: "earthy-natural",
  },
  {
    label: "Luxury Gold",
    value: "luxury-gold",
  },
];

interface GenerateSiteFormProps {
  generateData: GenerateSitePayload;
  setGenerateData: React.Dispatch<React.SetStateAction<GenerateSitePayload>>;
  onSubmit: () => void;
  loading: boolean;
}

const GenerateSiteForm: React.FC<GenerateSiteFormProps> = ({
  generateData,
  setGenerateData,
  onSubmit,
  loading,
}) => {
  return (
    <div className="p-8 border border-gray-800 rounded-xl shadow-lg">
      <h3 className="text-2xl text-center font-bold mb-8">Generate Site</h3>
      <Input
        value={generateData.businessName}
        onChange={(e) =>
          setGenerateData((prev) => ({
            ...prev,
            businessName: e.target.value,
          }))
        }
        label="Business Name *"
        type="text"
        placeholder="e.g. Digital Marketing"
      />
      <Input
        value={generateData.businessCategory}
        onChange={(e) =>
          setGenerateData((prev) => ({
            ...prev,
            businessCategory: e.target.value,
          }))
        }
        label="Business Category *"
        type="text"
        placeholder="e.g. Restaurant / Café"
      />
      <Select
        value={generateData.primaryColor}
        onChange={(e) =>
          setGenerateData((prev) => ({
            ...prev,
            primaryColor: e.target.value,
          }))
        }
        label="Primary Color Vibe *"
        type="select"
        selectOptions={themeOptions}
        placeholder="e.g. Digital Marketing"
      />
      <Textarea
        value={generateData.description}
        onChange={(e) =>
          setGenerateData((prev) => ({
            ...prev,
            description: e.target.value,
          }))
        }
        label="Describe Your Need *"
        rows={4}
        placeholder="e.g. Generate a single page website for a cafe. It should be modern and also unique."
      />

      <Button
        label={loading ? "Generating" : "Generate"}
        onClick={onSubmit}
        variant="primary"
        fullWidth
      />
    </div>
  );
};

export default GenerateSiteForm;
