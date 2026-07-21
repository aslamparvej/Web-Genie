const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-full w-full fixed bg-dark opacity-50"></div>
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 border-6 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-300 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
