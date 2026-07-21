import { useState } from "react";

import { useApi } from "../../../hooks/useApi";
import { siteApi } from "../../../services/api";
import type { GenerateSitePayload } from "../../../types/site.types";

import GenerateSiteForm from "../../../components/sites/GenerateSiteForm";

const Generate = () => {
  const [generateData, setGenerateData] = useState<GenerateSitePayload>({
    businessName: "",
    businessCategory: "",
    primaryColor: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const { post } = useApi();

  const handleGenerateSite = async () => {
    try {
      setLoading(true);
      const response = await siteApi.generate(post, generateData);
      console.log(response);
    } catch (error) {
      console.log("Generate site error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-5rem-1px)] flex items-center justify-center">
      <div className="flex-1 max-w-110">
        <GenerateSiteForm
          generateData={generateData}
          setGenerateData={setGenerateData}
          onSubmit={handleGenerateSite}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Generate;
