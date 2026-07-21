import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, ...props }) => {
  return (
    <div className="mb-6">
      {label && (
        <label className="text-gray-400 font-medium uppercase block mb-2">
          {label}
        </label>
      )}
      <textarea className="flex items-center px-3 py-2 border border-gray-700 rounded-md text-gray-400 focus:border-amber-500 focus:outline-0 w-full resize-none" {...props}></textarea>
    </div>
  );
};

export default Textarea;
