import type React from "react";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
  onBackRoute?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  showBack,
  onBackRoute,
}) => {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex gap-2 items-center">
        {showBack && (
          <Link to={onBackRoute || ""} className="">
            <MoveLeft size={20} color="#FFF" />
          </Link>
        )}
        <h2 className="text-gray-300 text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default PageHeader;
